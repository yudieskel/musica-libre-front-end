//Formulario para buscar por título
import { useState } from 'react';
import { helpHttp } from "./helpers/helpHttp";
import '../pages/Libreria.css';

//Crear variable inicial
const inicial = {
    titulo:""
};

const FormularioTitulo = ({ handleErrorTi, handleSucesoTi, handleBuscar }) => {

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
        if(input.titulo.trim()) {
            setActivar("")
            }
    };

    //Creamos variables para simplificar la solicitud
    let api = helpHttp();
    let url = 'http://localhost:2000/musicalibre/titulo';

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
                        handleSucesoTi();
                        handleResetTi()
                    } else { 
                        //Envío Error
                        console.log("error ", res );
                        handleErrorTi();
                        handleResetTi()
                    }
                    })
                ]);       
        } else {
            return
        };
    };

    //Reset
    const handleResetTi = (e) => {
        setInput(inicial);
        setActivar("disabled")
    };

return(
    <form className="libreria" onSubmit={handleSubmit} method="POST" autoComplete="off">
        <button id="buscar-titulo" disabled={activar}>
            <img className="lupa-buscar" src="../images/busqueda-de-lupa.png"
            alt="Lupa"/>
         </button>

        <input id="titulo" type="text" placeholder="Título"
         name="titulo" value={input.titulo} onChange={handleChange}
         />
    </form>
)
};

export default FormularioTitulo;