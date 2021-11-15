//Página de Error 404
import React from "react";
import './Error.css';

const Error = () => {
    
    return(
        <div className="error">
            <h1>Oops! Ocurrió un error en la ruta</h1>
            <div className="status">
            <h2>404</h2>
            </div>
            <img src="/images/undraw_page_not_found_su7k.svg" alt="Error 404. página no encontrada" />
        </div>
    )
}

export default Error