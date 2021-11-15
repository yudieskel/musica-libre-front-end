//Encapsular lógica del formulario ForgotPassword
import { useContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import ForgotContext from "../context/ForgotContext";

//Componente
export const useFormForgotPassword = ( inicial, validatedForm ) => {

    //Context
    const { activoInicial, handleActualizar } = useContext(ForgotContext);

    //Input
    const [ input, setInput ] = useState(inicial);
    //Toggle
    const [ activoForgot, setActivoForgot ] = useState(false);
    //Errores al Validar
    const [ validar, setValidar ] = useState({}); 

    //Desde FormularioLogin se cierra FormularioLogin y abre FormularioForgotPassword
    useEffect( () => {
        setActivoForgot(activoInicial);
    }, [activoInicial] );
    
    //Entrada de datos
    const handleChange = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
        });
    };

    //Activar Clase
    const handleToggle = () => {
        setActivoForgot(!activoForgot);
    };

    //Cuando pierde el foco
    const handleBlur = (e) => {
        handleChange(e);
        setValidar(validatedForm(input));
    };

    //Creamos variables para simplificar la solicitud
    let api = helpHttp();
    let url = 'http://localhost:2000/musicalibre/forgot_password';

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
                        console.log("Suceso ", res );
                        handleResetF()
                    } else { 
                        //Envío Error
                        console.log("error ", res );
                        handleResetF()
                    }
                    })
                ]);       
        } else {
            return
        };
    };

    //Reset
    const handleResetF = (e) => {
        setInput(inicial);
        setActivoForgot(!activoForgot);
        handleActualizar()
    };

    return {
        input,
        validar,
        activoForgot,
        handleChange,
        handleToggle,
        handleBlur,
        handleSubmit
    };
};