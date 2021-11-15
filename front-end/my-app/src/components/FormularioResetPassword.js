//Formulario para actualizar clave
import Boton from "./Boton";
import { useFormResetPassword } from "./hooks/useFormResetPassword";

//Crear variable inicial
const inicial = {
    correo:"",
    token:"",
    clave:""
};
//Crear función que va a controlar los errores del formulario
const validationsForm = (input) => {
    let validar = {};
    
    //Expresión reguladora:
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if(!input.correo.trim()) {
        validar.correo = "El campo 'Email' es requerido"
    } else if(!regexEmail.test(input.correo.trim())) {
        validar.correo = "El campo 'Email' es incorrecto"
    } else if(!input.token.trim()) {
        validar.token = "El campo 'Token' es requerido"
    } else if(!input.clave.trim()) {
        validar.clave = "El campo 'Clave' es requerido"
    }
    return validar;
};

//Estilo mensajes de validación
let styles = {
    fontWeight: "bold",
    color: "#ae2012",
    fontSize: "0.7rem"
};

//Componente
const FormularioResetPassword = () => {
  
    //Hook personalizado
    const {
        input,
        validar,
        activoReset,
        handleChange,
        handleToggle,
        handleBlur,
        handleSubmit
    } = useFormResetPassword( inicial, validationsForm );


    return(
        <section className={activoReset ? "visible_reset" : null }>
                    <div id="envoltura-reset">
                        
                        <div className="abrir-reset">
                            <Boton 
                            ruta="#" 
                            id="a1-reset"
                            className="reset_on" 
                            handleToggle={handleToggle}
                            >
                            <img className="boton-cerrar-reset"
                             src="../images/boton-eliminar.png" alt="Cerrar"/>
                            </Boton>
                            <div className="contenedor-reset">
                                <img className="logo-reset" src="../images/poster5_16_104838.jpeg"
                                    alt="Logo de Música Libre"/>
                                <h1>Actualizar</h1>

                                <form onSubmit={handleSubmit} method="POST">

                                    {/* Usuario */}
                                    <label htmlFor="user-name-reset">Email:</label>
                                    <input type="email" id="user-name-reset" name="correo" 
                                     required={true} placeholder="Ej: correo@gmail.com" 
                                     value={input.correo} onChange={handleChange} onBlur={handleBlur}/>
                                     {validar.correo && <p style={styles}>{validar.correo}</p>}

                                    {/* Token */}
                                    <label htmlFor="token">Token:</label>
                                    <input type="text" id="token" name="token" 
                                     required={true} placeholder="Entre su Token" 
                                     value={input.token} onChange={handleChange} onBlur={handleBlur}/>
                                     {validar.token && <p style={styles}>{validar.token}</p>}

                                    {/* Clave */}
                                    <label htmlFor="new-password">Clave:</label>
                                    <input type="password" id="new-password" name="clave" 
                                     required={true} placeholder="Entre su nueva Clave" 
                                     value={input.clave} onChange={handleChange} onBlur={handleBlur}/>
                                     {validar.clave && <p style={styles}>{validar.clave}</p>}

                                    {/* Enviar  */}
                                    <input type="submit" value="Actualizar"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
    )
};

export default FormularioResetPassword;