//Formulario para buscar por género
import { useState } from 'react';
import { helpHttp } from './helpers/helpHttp';
import '../pages/Libreria.css';

//Crear variable inicial
const inicial = {
    genero:""
};

const FormularioGenero = ({ handleErrorGe, handleSucesoGe, handleBuscar }) => {

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
    let url = 'http://localhost:2000/musicalibre/genero';

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
                        handleSucesoGe();
                        handleResetGe()
                    } else { 
                        //Envío Error
                        console.log("error ", res );
                        handleErrorGe();
                        handleResetGe()
                    }
                    })
                ]);       
        } else {
            return
        };
    };

    //Reset
    const handleResetGe = (e) => {
        setInput(inicial);
        setActivar("disabled")
    };

return(
    <form className="libreria" onSubmit={handleSubmit} method="POST">
    <button id="buscar-genero" disabled={activar}>
        <img className="etiqueta" src="../images/etiqueta.png"
        alt="Etiqueta"/>
    </button>
    <select name="genero" id="genero" value={input.genero} onChange={handleChange}>
        <option value="" disabled>Género</option>
        <option value="ambient">Ambient</option>
        <option value="bass">Bass</option>
        <option value="chill">Chill</option>
        <option value="dance">Dance</option>
        <option value="drum-bass">Drum & Bass</option>
        <option value="drumstep">Drumstep</option>
        <option value="dubstep">Dubstep</option>
        <option value="edm">EDM</option>
        <option value="electronic">Electronic</option>
        <option value="future-house">Future House</option>
        <option value="hardstyle">Hardstyle</option>
        <option value="house">House</option>
        <option value="indie">Indie</option>
        <option value="melodic-dubstep">Melodic Dubstep</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="trap">Trap</option>
    </select>
</form>
)
};

export default FormularioGenero;