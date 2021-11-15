//Contexto (variables globales)
import { createContext, useState } from "react";

const ForgotContext = createContext();

    //Valor inicial de variables
    let valorInicialRecuperar = false;
    let valorInicialActualizar = false;

        const ForgotProvider = ({children}) => {

        //Toggle Recuperar
        const [ activoInicial, setActivoInicial ] = useState(valorInicialRecuperar);
        //Toggle Actualizar
        const [ activoActualizar, setActivoActualizar ] = useState(valorInicialActualizar);

        //Función para activar toggle recuperar
        const handlePassword = () => {
            setActivoInicial(true);
        };
        //Función para activar toggle actualizar
        const handleActualizar = () => {
            setActivoActualizar(true);
        };

        //Crear objeto que define los valores que quiero conservar globalmente
        const data = {activoInicial, activoActualizar, handlePassword, handleActualizar};

        return(
        
            <ForgotContext.Provider value={data}>{children}</ForgotContext.Provider>
        )
};

export {ForgotProvider};
export default ForgotContext;