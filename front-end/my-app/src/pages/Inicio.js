//Página de Inicio
import Boton from "../components/Boton";
import MenuHamburguesa from "../components/MenuHamburguesa";
import './Inicio.css';

const Inicio = () => {
    
    return(
        <>
        <MenuHamburguesa/>
        <main id="centro-de-pagina">
            <div className="contenedor">
                <h1>Música Libre</h1>
                <h4>Descargas gratis y seguras</h4>
                <Boton 
                ruta="/libreria" 
                texto="Biblioteca de Audio"
                />
            </div>
            <img className="principal" 
            src="../images/audience-Imagen de Pexels en Pixabay-no-copyright-pictures.jpg"
            alt="Personas en un concierto de música electrónica"/>
        </main>
        </>
    )
}

export default Inicio;