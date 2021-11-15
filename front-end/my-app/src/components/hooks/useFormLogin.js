//Encapsular lógica del formulario login
import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

//Componente
export const useFormLogin = ( inicial, validatedForm, handleErrorL, handleSucesoL ) => {

    //Input
    const [ input, setInput ] = useState(inicial);
    //Toggle
    const [ activo, setActivo ] = useState(false);
    //Errores al Validar
    const [ validar, setValidar ] = useState({}); 
    
    //Entrada de datos
    const handleChange = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
        });
    };

    //Activar Clase
    const handleToggle = () => {
        setActivo(!activo);
    };

    //Cuando pierde el foco
    const handleBlur = (e) => {
        handleChange(e);
        setValidar(validatedForm(input));
    };

    //Creamos variables para simplificar la solicitud
    let api = helpHttp();
    let url = 'http://localhost:2000/musicalibre/login';

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
                        sessionStorage.setItem('data', JSON.stringify(res.ok));
                        console.log("Enviando TOKEN ", res );
                        handleSucesoL();
                        handleResetL()
                    } else { 
                        //Envío Error
                        console.log("error ", res );
                        handleErrorL();
                        handleResetL()
                    }
                    })
                ]);       
        } else {
            return
        };
    };

    //Reset
    const handleResetL = (e) => {
        setInput(inicial);
        setActivo(!activo);
    };

    return {
        input,
        validar,
        activo,
        handleChange,
        handleToggle,
        handleBlur,
        handleSubmit,
    };
};