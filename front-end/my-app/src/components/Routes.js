//Rutas
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Contacto from "../pages/Contacto";
import Entrar from "../pages/Entrar";
import Error from "../pages/Error";
import Inicio from "../pages/Inicio";
import Libreria from "../pages/Libreria";
import Menu from "./Menu";
import Footer from "./Footer";
import Terminos from "../pages/Terminos";
import Privacidad from "../pages/Privacidad";
import Message from "./Message";
import { useRoutes } from "./hooks/useRoutes";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { helpHttp } from "./helpers/helpHttp";

const Routes = () => {

    //Crear variable de estado para los datos
    const [ db, setDb] = useState([]);
    //Crear variable de estado para el Loader
    const [loading, setLoading] = useState(false);

   //Creamos variables para simplificar la solicitud
   let api = helpHttp();
   let url = "http://localhost:2000/musicalibre/db";

   useEffect( () => {

     const fetchData = async () => {

       //Actualizar setLoading a true y mostrar spinner
       setLoading(true);
       
           await Promise.all([
               api
               .get(url)
               .then( res => {
                   if(!res.err) {
                       const { ok } = res;
                       setDb(ok);
                   } else {
                        setDb(null);
                        console.log("error ", res );
                   }
               } )
               ]);

        //Actualizar setLoading a false y ocultar spinner
        setLoading(false); 
     } 
     fetchData();
   }, [] );

//Llamando hook personalizado
   const {
        errorC, errorL, errorS, errorTi, errorAr, errorGe, errorAĆ±, errorDes,
        sucesoC, sucesoL, sucesoS, sucesoTi, sucesoAr, sucesoGe, sucesoAĆ±,
        handleErrorC, handleErrorL, handleErrorS, handleErrorTi, handleErrorAr, handleErrorGe, handleErrorAĆ±, handleErrorDes,
        handleSucesoC, handleSucesoL, handleSucesoS, handleSucesoTi, handleSucesoAr, handleSucesoGe, handleSucesoAĆ±
    } = useRoutes();

    return(
        <div className="grid">

            <Router basename= "musicalibre">

            <Menu/>

              <Switch>

              <Route exact path="/">
                   <Redirect to="/inicio"/>
              </Route>

               <Route exact path="/inicio" component={Inicio}/>

               <Route exact path="/entrar">
                {errorL && <Message msg='Error! Clave y/o usuario incorrecto' bgColor="var(--rojo)"/>}
                {errorS && <Message msg='Error! Usuario existente' bgColor="var(--rojo)"/>}
                {sucesoL && <Message msg='Suceso! Autenticado' bgColor="var(--verde)"/>}
                {sucesoS && <Message msg='Suceso! QuedĆ³ registrado' bgColor="var(--verde)"/>}
                {errorDes && <Message msg='Autenticarse para Descargar' bgColor="var(--rojo)"/>}
                {<Entrar 
                 handleErrorL={handleErrorL} handleSucesoL={handleSucesoL}
                 handleErrorS={handleErrorS} handleSucesoS={handleSucesoS}
                 />}
                </Route>

               <Route exact path="/libreria">
                {/* Renderizado condicional del Loader (spinner) */}
                {loading && <Loader/>}
                {errorTi && <Message msg='No se encontrĆ³ resultado para tĆ­tulo' bgColor="var(--rojo)"/>}
                {sucesoTi && <Message msg='Suceso en la bĆŗsqueda' bgColor="var(--verde)"/>}
                {errorAr && <Message msg='No se encontrĆ³ resultado para artista' bgColor="var(--rojo)"/>}
                {sucesoAr && <Message msg='Suceso en la bĆŗsqueda' bgColor="var(--verde)"/>}
                {errorGe && <Message msg='No se encontrĆ³ resultado para gĆ©nero' bgColor="var(--rojo)"/>}
                {sucesoGe && <Message msg='Suceso en la bĆŗsqueda' bgColor="var(--verde)"/>}
                {errorAĆ± && <Message msg='No se encontrĆ³ resultado para aĆ±o' bgColor="var(--rojo)"/>}
                {sucesoAĆ± && <Message msg='Suceso en la bĆŗsqueda' bgColor="var(--verde)"/>}
                {<Libreria
                 db={db} 
                 handleErrorTi={handleErrorTi} handleSucesoTi={handleSucesoTi}
                 handleErrorAr={handleErrorAr} handleSucesoAr={handleSucesoAr}
                 handleErrorGe={handleErrorGe} handleSucesoGe={handleSucesoGe}
                 handleErrorAĆ±={handleErrorAĆ±} handleSucesoAĆ±={handleSucesoAĆ±}
                 handleErrorDes={handleErrorDes}
                 />}
               </Route>

               <Route exact path="/contacto">
                {errorC && <Message msg='Error en el envĆ­o' bgColor="var(--rojo)"/>}
                {sucesoC && <Message msg='Suceso en el envĆ­o' bgColor="var(--verde)"/>}
                {<Contacto 
                handleErrorC={handleErrorC} handleSucesoC={handleSucesoC}
                />}
               </Route>

               <Route exact path="/terminos" component={Terminos}/>

               <Route exact path="/privacidad" component={Privacidad}/>

               <Route path="*" component={Error}/>

              </Switch>

            <Footer/>

            </Router>

        </div>
    )
};

export default Routes