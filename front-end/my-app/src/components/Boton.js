//Componente botón de enlace
import { Link } from "react-router-dom";

const Boton = ({ ruta, texto, id, className, handleToggle, children }) => {

    return(
            <Link  to={ruta} id={id} className={className} onClick={handleToggle} >{texto || children} </Link>  
    )
};

export default Boton;