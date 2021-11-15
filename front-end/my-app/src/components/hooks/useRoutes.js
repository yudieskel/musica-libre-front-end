//Abstraer lógica de Routes
import { useState } from "react";

export const useRoutes = () => {
//Variables de estado para mensajes
     //Error Contacto
     const [errorC, setErrorC] = useState(null);
     //Suceso Contacto
     const [sucesoC, setSucesoC] = useState(null);
 
     //Error Login
     const [errorL, setErrorL] = useState(null);
     //Suceso Login
     const [sucesoL, setSucesoL] = useState(null);
 
     //Error Signup
     const [errorS, setErrorS] = useState(null);
     //Suceso Signup
     const [sucesoS, setSucesoS] = useState(null);
 
     //Error Título
     const [errorTi, setErrorTi] = useState(null);
     //Suceso Título
     const [sucesoTi, setSucesoTi] = useState(null);
 
     //Error Artista
     const [errorAr, setErrorAr] = useState(null);
     //Suceso Artista
     const [sucesoAr, setSucesoAr] = useState(null);
 
     //Error Género
     const [errorGe, setErrorGe] = useState(null);
     //Suceso Género
     const [sucesoGe, setSucesoGe] = useState(null);

     //Error Año
     const [errorAñ, setErrorAñ] = useState(null);
     //Suceso Año
     const [sucesoAñ, setSucesoAñ] = useState(null);

     //Error Descarga con Token
     const [errorDes, setErrorDes] = useState(null);
//-------------------------------------------------------------------------------------------
//Funciones controladoras de mensajes
     //Función Error Contacto
     const handleErrorC = () => {
         setErrorC(true)
         setTimeout(() => handleErrorResetC(), 8000);
     };
 
     const handleErrorResetC = () => {
         setErrorC(null)
     };
     //Función Suceso Contacto
     const handleSucesoC = () => {
         setSucesoC(true)
         setTimeout(() => handleSucesoResetC(), 8000);
     };
 
     const handleSucesoResetC = () => {
         setSucesoC(null)
     };
     //-------------------------------------------------------------------------------------------
     //Función Error Login
     const handleErrorL = () => {
         setErrorL(true)
         setTimeout(() => handleErrorResetL(), 8000);
     };
 
     const handleErrorResetL = () => {
         setErrorL(null)
     };
     //Función Suceso Login
     const handleSucesoL = () => {
         setSucesoL(true)
         setTimeout(() => handleSucesoResetL(), 8000);
     };
 
     const handleSucesoResetL = () => {
         setSucesoL(null)
     };
     //-------------------------------------------------------------------------------------------
     //Función Error Signup
     const handleErrorS = () => {
         setErrorS(true)
         setTimeout(() => handleErrorResetS(), 8000);
     };
 
     const handleErrorResetS = () => {
         setErrorS(null)
     };
     //Función Suceso Signup
     const handleSucesoS = () => {
         setSucesoS(true)
         setTimeout(() => handleSucesoResetS(), 8000);
     };
 
     const handleSucesoResetS = () => {
         setSucesoS(null)
     };
     //-------------------------------------------------------------------------------------------
     //Función Error Título
     const handleErrorTi = () => {
         setErrorTi(true)
         setTimeout(() => handleErrorResetTi(), 8000);
     };
 
     const handleErrorResetTi = () => {
         setErrorTi(null)
     };
     //Función Suceso Título
     const handleSucesoTi = () => {
         setSucesoTi(true)
         setTimeout(() => handleSucesoResetTi(), 8000);
     };
 
     const handleSucesoResetTi = () => {
         setSucesoTi(null)
     };
     //-------------------------------------------------------------------------------------------
     //Función Error Artista
     const handleErrorAr = () => {
         setErrorAr(true)
         setTimeout(() => handleErrorResetAr(), 8000);
     };
 
     const handleErrorResetAr = () => {
         setErrorAr(null)
     };
     //Función Suceso Artista
     const handleSucesoAr = () => {
         setSucesoAr(true)
         setTimeout(() => handleSucesoResetAr(), 8000);
     };
 
     const handleSucesoResetAr = () => {
         setSucesoAr(null)
     };
     //-------------------------------------------------------------------------------------------
     //Función Error Género
     const handleErrorGe = () => {
         setErrorGe(true)
         setTimeout(() => handleErrorResetGe(), 8000);
     };
 
     const handleErrorResetGe = () => {
         setErrorGe(null)
     };
     //Función Suceso Género
     const handleSucesoGe = () => {
         setSucesoGe(true)
         setTimeout(() => handleSucesoResetGe(), 8000);
     };
 
     const handleSucesoResetGe = () => {
         setSucesoGe(null)
     };
    //-------------------------------------------------------------------------------------------
     //Función Error Año
     const handleErrorAñ = () => {
        setErrorAñ(true)
        setTimeout(() => handleErrorResetAñ(), 8000);
    };

    const handleErrorResetAñ = () => {
        setErrorAñ(null)
    };
    //Función Suceso Año
    const handleSucesoAñ = () => {
        setSucesoAñ(true)
        setTimeout(() => handleSucesoResetAñ(), 8000);
    };

    const handleSucesoResetAñ = () => {
        setSucesoAñ(null)
    };
    //-------------------------------------------------------------------------------------------
     //Función Error Descarga con Token
     const handleErrorDes = () => {
        setErrorDes(true)
        setTimeout(() => handleErrorResetDes(), 8000);
    };

    const handleErrorResetDes = () => {
        setErrorDes(null)
    };

return{
        errorC, errorL, errorS, errorTi, errorAr, errorGe, errorAñ, errorDes,
        sucesoC, sucesoL, sucesoS, sucesoTi, sucesoAr, sucesoGe, sucesoAñ,
        handleErrorC, handleErrorL, handleErrorS, handleErrorTi, handleErrorAr, handleErrorGe, handleErrorAñ, handleErrorDes,
        handleSucesoC, handleSucesoL, handleSucesoS, handleSucesoTi, handleSucesoAr, handleSucesoGe, handleSucesoAñ,
    }
};