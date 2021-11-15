//Página de contactos
import { useFormContacto } from "../components/hooks/useFormContacto";
import MenuHamburguesa from "../components/MenuHamburguesa";
import './Contacto.css';

//Crear variable inicial
const inicial = {
    nombre:"",
    direccion:"",
    correo:"",
    mensaje:""
};

//Crear función que va a controlar los errores del formulario
const validationsForm = (input) => {
    let validar = {};
    
    //Expresiones reguladoras:
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
      let regexComments = /^.{1,255}$/;
    
    if(!input.nombre.trim()) {
        validar.nombre = "El campo 'Nombre' es requerido"
    } else if(!regexName.test(input.nombre.trim())) {
        validar.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco"
    } else if(!input.direccion.trim()) {
        validar.direccion = "El campo 'Dirección' es requerido"
    } else if(!input.correo.trim()) {
        validar.correo = "El campo 'Email' es requerido"
    } else if(!regexEmail.test(input.correo.trim())) {
        validar.correo = "El campo 'Email' es incorrecto"
    } else if(!input.mensaje.trim()) {
        validar.mensaje = "El campo 'Comentarios' es requerido"
    } else if(!regexComments.test(input.mensaje.trim())) {
        validar.mensaje = "El campo 'Comentarios' no debe exceder los 255 caracteres"
    };

    return validar;
};

//Estilo para los mensajes
let styles = {
    fontWeight: "bold",
    color: "#dc3545",
    fontSize: "1rem"
};

//Componente
const Contacto = ( { handleErrorC, handleSucesoC } ) => {

    //Hook personalizado
    const {
        input,
        validar,
        handleChange,
        handleBlur,
        handleSubmit
    } = useFormContacto( inicial, validationsForm, handleErrorC, handleSucesoC );

    return(
        <>
        <MenuHamburguesa/>
        <main id="centro-de-pagina-contacto">
            <div className="contenedor-externo">
                <div className="contenedor-contacto">
                    <form onSubmit={handleSubmit} method="POST" className="form">
                        <div className="form-encabezado">
                            <h1 className="form-titulo">C<span>ontacto</span></h1>
                        </div>
                        {/* Nombre */}
                        <label htmlFor="nombre" className="form-etiqueta">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" className="form-entrar" 
                         onChange={handleChange} required={true} placeholder="Ej: Juán Pérez"
                         onBlur={handleBlur} value= {input.nombre}/>
                         {validar.nombre && <p style={styles}>{validar.nombre}</p>}

                        {/* Dirección */}
                        <label htmlFor="direccion" className="form-etiqueta">Dirección:</label>
                        <input type="text" name="direccion" id="direccion" className="form-entrar" 
                         onChange={handleChange} required={true} placeholder="Ej: Habana. Cuba"
                         onBlur={handleBlur} value= {input.direccion}/>
                         {validar.direccion && <p style={styles}>{validar.direccion}</p>}

                        {/* Correo */}
                        <label htmlFor="correo" className="form-etiqueta">Correo Electrónico:</label>
                        <input type="email" name="correo" id="correo" className="form-entrar" 
                         onChange={handleChange} required={true} placeholder="Ej: correo@gmail.com"
                         onBlur={handleBlur} value= {input.correo}/>
                         {validar.correo && <p style={styles}>{validar.correo}</p>}

                        {/* Mensaje */}
                        <label htmlFor="mensaje" className="form-etiqueta">Mensaje:</label>
                        <textarea name="mensaje" id="mensaje" className="form-area-texto" 
                         onChange={handleChange} placeholder="Escriba su mensaje"
                         onBlur={handleBlur} value= {input.mensaje}></textarea>
                         {validar.mensaje && <p style={styles}>{validar.mensaje}</p>}

                        {/* Enviar */}
                        <input type="submit" className="btn-enviar" value="Enviar consulta"/>
                    </form>
                </div>
            </div>
        </main>
        </>
    );
};

export default Contacto;