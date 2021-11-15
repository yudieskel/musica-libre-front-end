//Página entrar (signup, login, forgot_password, reset_password)
import React from "react";
import FormularioSignup from "../components/FormularioSignup";
import FormularioLogin from "../components/FormularioLogin";
import FormularioForgotPassword from "../components/FormularioForgotPassword";
import FormularioResetPassword from "../components/FormularioResetPassword";
import { ForgotProvider } from "../components/context/ForgotContext";
import MenuHamburguesa from "../components/MenuHamburguesa";
import './Entrar.css';

const Entrar = ( { handleErrorL, handleSucesoL, handleErrorS, handleSucesoS } ) => {

    return(
        <>
        <MenuHamburguesa/>
        <main id="centro-de-pagina-entrar-registrar">
            <div className="contenedor-entrar-registrar">
                <div className="entrar-registrar">
                    <h1>Estás solo a un paso!</h1>
                    <img className="onda-sonido" src="../images/Música Libre Onda.png" alt="Onda de sonido"/>
                    <div className="blanco"></div>
                    <img className="logo" src="../images/poster5_16_104838.jpeg" alt="Logo de Música Libre"/>
                    <ForgotProvider>
                    <FormularioLogin handleErrorL={handleErrorL} handleSucesoL={handleSucesoL}/>
                    <FormularioSignup handleErrorS={handleErrorS} handleSucesoS={handleSucesoS}/>
                    <FormularioForgotPassword/>
                    <FormularioResetPassword/>
                    </ForgotProvider>
                    
                </div>
            </div>
        </main>
        </>
    )
}

export default Entrar