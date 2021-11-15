//Formulario para buscar por año
import { useState } from 'react';
import { helpHttp } from './helpers/helpHttp';
import '../pages/Libreria.css';

//Crear variable inicial
const inicial = {
    año:""
};

const FormularioAño = ({ handleErrorAñ, handleSucesoAñ, handleBuscar }) => {

    //Input
    const [ input, setInput ] = useState(inicial);
    //Botón
    const [ activar, setActivar ] = useState("disabled");

    //Entrada de datos
    const handleChange = (e) => {
        setInput({
            [e.target.name]: e.target.value
            }); 
            setActivar("")
        };

    //Creamos variables para simplificar la solicitud
    let api = helpHttp();
    let url = 'http://localhost:2000/musicalibre/anho';

    //Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        if (input) {
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
                        handleBuscar(res.ok);
                        handleSucesoAñ();
                        handleResetAñ()
                    } else { 
                        //Envío Error
                        console.log("error ", res );
                        handleErrorAñ();
                        handleResetAñ()
                    }
                    })
                ]);       
        } else {
            return
        };
    };

    //Reset
    const handleResetAñ = (e) => {
        setInput(inicial);
        setActivar("disabled")
    };

return(
    <form className="libreria" onSubmit={handleSubmit} method="POST">
    <button id="buscar-año" disabled={activar}>
        <img className="etiqueta" src="../images/etiqueta.png"
        alt="Etiqueta"/>
    </button>
    <select name="año" id="año" value={input.año} onChange={handleChange}>
        <option value="" disabled>Año</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
    </select>
</form>
)
};

export default FormularioAño;