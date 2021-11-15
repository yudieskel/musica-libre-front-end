//Formulario para registrarse
import { useFormSignup } from "../components/hooks/useFormSignup";
import { Link } from "react-router-dom";
import Boton from "./Boton";

//Crear variable inicial
const inicial = {
    nombre: "",
    correo:"",
    clave1:"",
    clave2:""
};

//Crear función que va a controlar los errores del formulario
const validationsForm = (input) => {
    let validar = {};
    
    //Expresiones reguladoras:
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if(!input.nombre.trim()) {
        validar.nombre = "El campo 'Nombre' es requerido"
    } else if(!regexName.test(input.nombre.trim())) {
        validar.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco"
    } else if(!input.correo.trim()) {
        validar.correo = "El campo 'Email' es requerido"
    } else if(!regexEmail.test(input.correo.trim())) {
        validar.correo = "El campo 'Email' es incorrecto"
    } else if(!input.clave1.trim()) {
        validar.clave1 = "El campo 'Clave' es requerido"
    } else if(!input.clave2.trim()) {
        validar.clave2 = "El campo 'Clave' es requerido"
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
const FormularioSignup = ( { handleErrorS, handleSucesoS } ) => {
  
    //Hook personalizado
    const {
        input,
        validar,
        activo,
        checked,
        handleChange,
        handleToggle,
        handleChecked,
        handleBlur,
        handleSubmit
    } = useFormSignup( inicial, validationsForm, handleErrorS, handleSucesoS );


    return(
        <section id="s2" className={activo ? "visible_registrar" : null }>
                    <div id="envoltura-registrar">
                        <div>
                            <Boton 
                            ruta="#" 
                            id="a1-registrar" 
                            className="registrar_on" 
                            texto="Registrarse"
                            handleToggle={handleToggle}
                            />
                        </div>
                        <div className="abrir-registrar">
                            <Boton 
                            ruta="#" 
                            className="registrar_on" 
                            handleToggle={handleToggle}
                            >
                            <img className="boton-cerrar-registrar"
                             src="../images/boton-eliminar.png" alt="Cerrar"/>
                            </Boton>
                            <div className="contenedor-registrar">
                                <img className="logo-registrar" src="../images/poster5_16_104838.jpeg"
                                    alt="Logo de Música Libre"/>
                                <h1>Registrarse aquí</h1>
                                <form onSubmit={handleSubmit} method="POST">
                                    {/* Nombre */}
                                    <label htmlFor="name">Nombre:</label>
                                    <input type="text" id="name" name="nombre" 
                                     required={true} placeholder="Ej: Juán Pérez"
                                     value={input.nombre} onChange={handleChange} onBlur={handleBlur}/>
                                     {validar.nombre && <p style={styles}>{validar.nombre}</p>}

                                    {/* Usuario */}
                                    <label htmlFor="user-name">Email:</label>
                                    <input type="email" id="user-name" name="correo" 
                                     required={true} placeholder="Ej: correo@gmail.com" 
                                     value={input.correo} onChange={handleChange} onBlur={handleBlur}/>
                                     {validar.correo && <p style={styles}>{validar.correo}</p>}

                                    {/* Claves */}
                                    <label htmlFor="password1">Clave:</label>
                                    <input type="password" id="password1" name="clave1" 
                                     required={true} placeholder="Entre su Clave" 
                                     value={input.clave1} onChange={handleChange} onBlur={handleBlur}/>
                                     {validar.clave1 && <p style={styles}>{validar.clave1}</p>}

                                    <label htmlFor="password2">Clave:</label>
                                    <input type="password" id="password2" name="clave2" 
                                     required={true} placeholder="Repita su Clave" 
                                     value={input.clave2} onChange={handleChange} onBlur={handleBlur}/>
                                     {validar.clave2 && <p style={styles}>{validar.clave2}</p>}

                                    {/* Checkbox Términos y Condiciones */}
                                    <input type="checkbox" name="terminos" id="terminos" 
                                     onChange={handleChecked} checked={checked}/>
                                    <label className="terminos" htmlFor="terminos"><Link 
                                    className="terminos-condiciones" to="/terminos">Términos</Link></label>
                                    {/* Registrar */}
                                    {checked ? <span id="info"></span> : <span id="info">Debe Aceptar</span> }
                                    <input type="submit" value="Registrar"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
    )
};

export default FormularioSignup;