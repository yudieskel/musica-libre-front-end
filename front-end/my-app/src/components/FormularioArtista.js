//Formulario para buscar por artista
import { useState } from 'react';
import { helpHttp } from './helpers/helpHttp';
import '../pages/Libreria.css';

//Crear variable inicial
const inicial = {
    artista:""
};

const FormularioArtista = ({ handleErrorAr, handleSucesoAr, handleBuscar }) => {

    //Input
    const [ input, setInput ] = useState(inicial);
    //Botón
    const [ activar, setActivar ] = useState("disabled");

    //Entrada de datos
    const handleChange = (e) => {
        setInput({
            [e.target.name]: e.target.value
            }); 
        handleButton()
        };
    
    //Activar Botón
    const handleButton = () =>{
        if(input.artista.trim()) {
            setActivar("")
            }
    };

    //Creamos variables para simplificar la solicitud
    let api = helpHttp();
    let url = 'http://localhost:2000/musicalibre/artista';

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
                        handleSucesoAr();
                        handleResetAr()
                    } else { 
                        //Envío Error
                        console.log("error ", res );
                        handleErrorAr();
                        handleResetAr()
                    }
                    })
                ]);       
        } else {
            return
        };
    };

    //Reset
    const handleResetAr = (e) => {
        setInput(inicial);
        setActivar("disabled")
    };

return(
    <form className="libreria" onSubmit={handleSubmit} method="POST" autoComplete="off">
        <button id="buscar-artista" disabled={activar}>
            <img className="lupa-buscar" src="../images/busqueda-de-lupa.png"
            alt="Lupa"/>
        </button>
        <input id="artista" type="text" name="artista" placeholder="Artista"
         value={input.artista} onChange={handleChange}
         />
    </form>
)
};

export default FormularioArtista;