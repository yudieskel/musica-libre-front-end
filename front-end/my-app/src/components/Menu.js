//Header común para las páginas
import { NavLink } from "react-router-dom";
import './Menu.css';

const Menu = () => {

return(
    <header>
            <ul className="menu-principal">
                <li className="inicio"><NavLink exact to="/inicio" activeClassName="active">Inicio</NavLink></li>
                <li className="entrar"><NavLink exact to="/entrar" activeClassName="active">Entrar</NavLink></li>
                <li className="libreria"><NavLink exact to="/libreria" activeClassName="active">Librería</NavLink></li>
                <li className="contacto"><NavLink exact to="/contacto" activeClassName="active">Contacto</NavLink></li>
            </ul>      
    </header>
 )
};

export default Menu;
