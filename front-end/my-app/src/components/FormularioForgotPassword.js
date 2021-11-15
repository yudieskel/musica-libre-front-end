//Formulario para correo de recuperación de clave
import Boton from "./Boton";
import { useFormForgotPassword } from "./hooks/useFormForgotPassword";

//Crear variable inicial
const inicial = {
    email:""
};

//Crear función que va a controlar los errores del formulario
const validationsForm = (input) => {
    let validar = {};
    
    //Expresión reguladora:
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if(!input.email.trim()) {
        validar.email = "El campo 'Email' es requerido"
    } else if(!regexEmail.test(input.email.trim())) {
        validar.email = "El campo 'Email' es incorrecto"
    };
    return validar;
};

//Estilo mensajes de validación
let styles = {
    fontWeight: "bold",
    color: "#ae2012",
    fontSize: "0.8rem"
};

//Componente
const FormularioForgotPassword = () => {

    //Hook personalizado
    const {
        input,
        validar,
        activoForgot,
        handleChange,
        handleToggle,
        handleBlur,
        handleSubmit
    } = useFormForgotPassword( inicial, validationsForm );

    return(

    <section className={ activoForgot ? "visible_recuperar" : null }>
        <div id="envoltura-recuperar">

            <div className="abrir-recuperar">
                <Boton 
                ruta="#" 
                id="a1-recuperar"
                className="recuperar_on" 
                handleToggle={handleToggle}
                >
                <img className="boton-cerrar-recuperar" src="../images/boton-eliminar.png"
                 alt="Cerrar"/>
                </Boton>
                <div className="contenedor-recuperar">
                    <img className="logo-recuperar" src="../images/poster5_16_104838.jpeg"
                        alt="Logo de Música Libre"/>
                    <h1>Recuperar</h1>

                    <form onSubmit={handleSubmit} method="POST">
                        {/* Usuario  */}
                        <label htmlFor="usernamerecuperar">Usuario:</label>
                        <input type="email" id="usernamerecuperar" name="email" 
                         required={true} placeholder="Ej: correo@gmail.com" 
                         value={input.email} onChange={handleChange} onBlur={handleBlur}/>
                         {validar.email && <p style={styles}>{validar.email}</p>}

                        {/* Enviar  */}
                        <input type="submit" value="Recuperar" />
                    </form>
                </div>
            </div>
        </div>
    </section>

    )
};

export default FormularioForgotPassword;