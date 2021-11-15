//Formulario para login
import { useContext } from "react";
import ForgotContext from "./context/ForgotContext";
import Boton from "./Boton";
import { useFormLogin } from "./hooks/useFormLogin";
import { Link } from "react-router-dom";

//Crear variable inicial
const inicial = {
    email:"",
    password:""
};

//Crear función que va a controlar los errores del formulario
const validationsForm = (input) => {
    let validar = {};
    
    //Expresión reguladora:
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if(!input.email.trim()) {
        validar.email = "El campo 'Email' es requerido"
    } else if(!regexEmail.test(input.email.trim())) {
        validar.email = "El campo 'Email' es incorrecto"
    } else if(!input.password.trim()) {
        validar.password = "El campo 'Clave' es requerido"
    };
    return validar;
};

//Estilo mensajes de validación
let styles = {
    fontWeight: "bold",
    color: "#ae2012",
    fontSize: "0.8rem"
};

//Componente
const FormularioLogin = ( { handleErrorL, handleSucesoL } ) => {

    //Hook personalizado
    const {
        input,
        validar,
        activo,
        handleChange,
        handleToggle,
        handleBlur,
        handleSubmit,
    } = useFormLogin( inicial, validationsForm, handleErrorL, handleSucesoL );

    //Context
    const { handlePassword } = useContext(ForgotContext);

    return(

    <section id="s1" className={ activo ? "visible_entrar" : null }>
        <div id="envoltura-entrar">
            <div>
                <Boton 
                ruta="#" 
                id="a1-entrar" 
                className="entrar_on" 
                texto="Entrar" 
                handleToggle={handleToggle}
                />
            </div>
            <div className="abrir-entrar">
                <Boton 
                ruta="#" 
                className="entrar_on" 
                handleToggle={handleToggle}
                >
                <img className="boton-cerrar-entrar" src="../images/boton-eliminar.png"
                 alt="Cerrar"/>
                </Boton>
                <div className="contenedor-entrar">
                    <img className="logo-entrar" src="../images/poster5_16_104838.jpeg"
                        alt="Logo de Música Libre"/>
                    <h1>Entrar aquí</h1>

                    <form onSubmit={handleSubmit} method="POST">
                        {/* Usuario  */}
                        <label htmlFor="username">Usuario:</label>
                        <input type="email" id="username" name="email" 
                         required={true} placeholder="Ej: correo@gmail.com" 
                         value={input.email} onChange={handleChange} onBlur={handleBlur}/>
                         {validar.email && <p style={styles}>{validar.email}</p>}

                        {/* Clave  */}
                        <label htmlFor="password">Clave:</label>
                        <input type="password" id="password" name="password" 
                         required={true} placeholder="Entre su Clave" 
                         value={input.password} onChange={handleChange} onBlur={handleBlur}/>
                         {validar.password && <p style={styles}>{validar.password}</p>}

                        {/* Entrar  */}
                        <input type="submit" value="Entrar" />

                        {/* Recuperar Clave  */}
                        <Link  to="#" onClick={ () => (handlePassword(), handleToggle()) }>Olvidó su Clave?</Link> 
                    
                    </form>
                </div>
            </div>
        </div>
    </section>

    )
};

export default FormularioLogin;