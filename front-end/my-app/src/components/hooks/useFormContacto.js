//Encapsular lógica del formulario contactos
import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

//Componente
export const useFormContacto = ( inicial, validatedForm, handleErrorC, handleSucesoC ) => {

    //Input
    const [ input, setInput ] = useState(inicial);
    //Errores al Validar
    const [ validar, setValidar ] = useState({}); 
    
    //Entrada de datos
    const handleChange = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
        });
    };

    //Cuando pierde el foco
    const handleBlur = (e) => {
        handleChange(e);
        setValidar(validatedForm(input));
    };

    //Creamos variables para simplificar la solicitud
    let api = helpHttp();
    let url = 'http://localhost:2000/musicalibre/contacto';

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
                        handleSucesoC();
                        handleResetC()
                    } else { 
                        //Envío Error
                        console.log("error ", res );
                        handleErrorC();
                        handleResetC()
                    }
                    })
                ]);       
        } else {
            return
        };
    };

    //Reset
    const handleResetC = (e) => {
        setInput(inicial);
    };

    return {
        input,
        validar,
        handleChange,
        handleBlur,
        handleSubmit
    };
};
