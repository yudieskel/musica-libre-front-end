//Abstraer la lógica de la fila de la tabla de librería
import { useHistory } from "react-router";

const LibreriaTablaFila = ({ e, handleErrorDes, handleReproducir }) => {
    
    //Extraer token de sessionStorage
    let token = JSON.parse(sessionStorage.getItem('data')) || null;
    
    let { titulo, autor, genero, ruta, año } = e; 

    //Creamos variable de historial para hacer re-direccionamiento a página entrar/registrar
    //si pretende descargar sin estar logeado
    let history = useHistory()

    //Enviar mensaje: Autenticar para Descargar
    const handleClick = () => {
        history.push('entrar');
        handleErrorDes()
    };

    return( 
        <tr>
            <td>
            <a className="reproducir" 
               href="#"
               onClick={ () => handleReproducir(ruta) }
            >
                <img className="boton-reproducir"
                    src="../images/boton-de-play.png" alt="Reproducir"
                />
            </a>
            </td>
            <td>{titulo}</td>
            <td>{autor}</td>
            <td>{genero}</td>
            <td>{año}</td>
            <td><a className="descargar" 
            onClick={!token ? () => handleClick() : token}
            href={ token ? `http://localhost:2000/musicalibre/download/${ruta}?secret_token=${token}` : "#" }>
                <img className="boton-descargar"
                     src="../images/flecha-hacia-abajo.png" alt="Descargar"/>
                </a>
            </td>
        </tr>
    )
};

export default LibreriaTablaFila
