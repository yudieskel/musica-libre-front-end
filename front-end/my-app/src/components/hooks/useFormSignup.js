//Encapsular lógica del formulario signup
import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

//Componente
export const useFormSignup = ( inicial, validatedForm, handleErrorS, handleSucesoS ) => {

    //Input
    const [ input, setInput ] = useState(inicial);
    //Toggle
    const [ activo, setActivo ] = useState(false);
    //Checked
    const [ checked, setChecked ] = useState(false);
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

    //Controlar términos y condiciones
    const handleChecked = (e) => {
        setChecked(e.target.checked);
    };

    //Cuando pierde el foco
    const handleBlur = (e) => {
        handleChange(e);
        setValidar(validatedForm(input));
    };

    //Creamos variables para simplificar la solicitud
    let api = helpHttp();
    let url = 'http://localhost:2000/musicalibre/signup';

    //Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidar(validatedForm(input));
        //Validar que se marcó términos
        if(checked) {
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
                        handleSucesoS();
                        handleResetS();
                        return ( true )
                    } else { 
                        //Envío Error
                        console.log("error ", res );
                        handleErrorS();
                        handleResetS()
                    }
                    })
                ]);       
            } else {
                return
            };
        } else {
            alert("El formulario NO! se ha enviado. Aceptar Términos")
            return ( false );
        };
    };

    //Reset
    const handleResetS = (e) => {
        setChecked(false);
        setInput(inicial);
        setActivo(!activo);
    };

    return {
        input,
        validar,
        activo,
        checked,
        handleChange,
        handleToggle,
        handleChecked,
        handleBlur,
        handleSubmit
    };
};
