//Encapsular lógica del formulario ResetPassword
import { useState, useEffect, useContext } from "react";
import { helpHttp } from "../helpers/helpHttp";
import ForgotContext from "../context/ForgotContext";

//Componente
export const useFormResetPassword = ( inicial, validatedForm ) => {

    //Context
    const { activoActualizar } = useContext(ForgotContext);

    //Input
    const [ input, setInput ] = useState(inicial);
    //Toggle
    const [ activoReset, setActivoReset ] = useState(false); 
    //Errores al Validar
    const [ validar, setValidar ] = useState({}); 

    //Desde FormularioForgotPassword envío contenido, cierro FormularioForgotPassword y abro FormularioResetPassword
    useEffect( () => {
        setActivoReset(activoActualizar);
    }, [activoActualizar] );
    
    //Entrada de datos
    const handleChange = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
        });
    };

    //Activar Clase
    const handleToggle = () => {
        setActivoReset(!activoReset);
    };

    //Cuando pierde el foco
    const handleBlur = (e) => {
        handleChange(e);
        setValidar(validatedForm(input));
    };

    //Creamos variables para simplificar la solicitud
    let api = helpHttp();
    let url = 'http://localhost:2000/musicalibre/reset_password';

    //Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidar(validatedForm(input));
        //Comprobar que el objeto 'validar' esté vacío.
            if (Object.keys(validar).length === 0) {
                //POST 
                let options = { body: input,
                    headers: { "Content-Type": "application/json",
                                Accept: "aplication/json" }
                };
                await Promise.all([
                api
                    .post( url, options)
                    .then(res => {
                    if(res.ok) {
                        //Envío Suceso
                        console.log("suceso ", res );
                        handleResetR();
                    } else { 
                        //Envío Error
                        console.log("error ", res );
                        handleResetR()
                    }
                    })
                ]);       
            } else {
                return
            };
    };

    //Reset
    const handleResetR = (e) => {
        setInput(inicial);
        setActivoReset(!activoReset);
    };

    return {
        input,
        validar,
        activoReset,
        handleChange,
        handleToggle,
        handleBlur,
        handleSubmit
    };
};
