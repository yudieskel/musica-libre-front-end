//Página librería
import { useState } from "react";
import FlechaArriba from "../components/FlechaArriba";
import FormularioArtista from "../components/FormularioArtista";
import FormularioAño from "../components/FormularioAño";
import FormularioGenero from "../components/FormularioGenero";
import FormularioTitulo from "../components/FormularioTitulo";
import LibreriaTabla from "../components/LibreriaTabla";
import MenuHamburguesa from "../components/MenuHamburguesa";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Libreria.css';

const Libreria = ({ 
    db,
    handleErrorTi, handleSucesoTi,
    handleErrorAr, handleSucesoAr,
    handleErrorGe, handleSucesoGe,
    handleErrorAñ, handleSucesoAñ,
    handleErrorDes
    }) => {
        
    //Crear variable de estado para los datos
    const [ res, setRes] = useState([]);

    //Variable de estado para actualizar reproductor
    const [ reproductor, setReproductor ] = useState(null);
    
    const handleBuscar = (res) => {
        setRes(res)
    };

    const handleReproducir = (ruta) => {
        setReproductor(ruta)
    };

    return(
    <>
    <MenuHamburguesa/>
    
    <main id="centro-de-pagina-libreria">
        <div className="contenedor-libreria">
            <div className="buscador-libreria">
                <h1>Música sin restricción para tus proyectos</h1>
                <img className="vinilo" src="../images/vinyl-pixabay-no-copyright-pictures.png"
                    alt="Muchos discos de vinilo"/>
            <div className="blanco"></div>
                <img className="logo-libreria" src="../images/poster5_16_104838.jpeg" alt="Logo de Música Libre"/>

                {/* Buscar por título */}
                <FormularioTitulo handleErrorTi={handleErrorTi} handleSucesoTi={handleSucesoTi} handleBuscar={handleBuscar}/>

                {/* Buscar por artista */}
                <FormularioArtista handleErrorAr={handleErrorAr} handleSucesoAr={handleSucesoAr} handleBuscar={handleBuscar}/>

                {/* Buscar por género */}
                <FormularioGenero handleErrorGe={handleErrorGe} handleSucesoGe={handleSucesoGe} handleBuscar={handleBuscar}/>

                {/* Buscar por año */}
                <FormularioAño handleErrorAñ={handleErrorAñ} handleSucesoAñ={handleSucesoAñ} handleBuscar={handleBuscar}/>
            </div>

            {/* Crear lista de temas */}
            <LibreriaTabla res={res} db={db} handleErrorDes={handleErrorDes} handleReproducir={handleReproducir}/>

            {/* Reproductor de Audio */}
            <AudioPlayer
            autoPlay
            src={reproductor ? `http://localhost:2000/music/${reproductor}` : "#"}
            style={{
                width: '300px',
                height: '80px',
            }}
            />

        </div>
    </main>
    <FlechaArriba/>
    </>
    )
};

export default Libreria;