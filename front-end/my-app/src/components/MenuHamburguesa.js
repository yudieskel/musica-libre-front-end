//Menú Hamburguesa para disenho responsivo
import { useState } from "react";
import { Link } from "react-router-dom";
import './MenuHamburguesa.css';

const MenuHamburguesa = () => {

    //Toggle
    const [ activo, setActivo ] = useState(false);

    const handleToggle = () => {
        setActivo(!activo);
    };

    return(
        <nav className={ activo ? "visible_menu" : null }>
            <div id="envoltura">
                <div>
                    <a id="menu_on" onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className="nav">
                    <ul className="menu-hamburguesa">
                        <li><Link exact to="/inicio">Inicio</Link></li>
                        <li><Link exact to="/entrar">Entrar</Link></li>
                        <li><Link exact to="/libreria">Librería</Link></li>
                        <li><Link exact to="/contacto">Contacto</Link></li>
                        <li><Link exact to="/terminos">Términos</Link></li>
                        <li><Link exact to="/privacidad">Privacidad</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default MenuHamburguesa;
