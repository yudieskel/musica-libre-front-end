//Página de Términos
import React from "react";
import FlechaArriba from "../components/FlechaArriba";
import MenuHamburguesa from "../components/MenuHamburguesa";
import './Terminos.css';

const Terminos = () => {

    return(
        <>
        <MenuHamburguesa/>
        <div className="terminos">
            <h3>Términos y Condiciones</h3>
            <h4>– Datos de identificación:</h4>
            <p>Música Libre, desde este momento “PROPIETARIO”, es el encargado de la creación, actualización  y mantenimiento del “SITIO”, para la divulgación y 
            distribución de contenido musical. Por favor, siéntase libre de navegar por el mismo y de descargar los temas musicales que aquí se encuentran.</p>
            <h4>– Derechos de propiedad intelectual:</h4>
            <p>Usted debe asumir que todo lo que ve, escuche o lee en el Sitio está protegido por derechos de autor y en consecuencia, debe asumir que dicho contenido 
            no puede ser utilizado más allá de lo que se establece en estos “TÉRMINOS Y CONDICIONES”. Música Libre no garantiza que el uso de los contenidos que 
            aparecen en el Sitio web no infrinja derechos de terceros ni se responsabiliza por ello.
            <br/>En cuanto a la música, la misma tiene derecho de autor; pero es de uso gratuito, lo que significa que no puede distribuir estas pistas en servicios de 
            Streaming como Spotify / Apple Music; pero puede usar las pistas sin riesgo de reclamos de derecho de autor en sus proyectos personales, siempre que haga 
            referencia al autor.</p>
            <h4>– Pasos a seguir para descargar:</h4>
            <p>Para realizar descargas desde el Sitio, el “USUARIO” debe de registrarse para así crear su cuenta gratuitamente y estar debidamente autenticado.</p>
            <h4>– Producto o servicio objeto de contratación:</h4>
            <p>El contenido musical que está disponible en el Sitio web está en constante actualización, puede accederse en formato mp3 y no hay limitación alguna para 
            el número de descargas.</p>
            <h4>– Precios, duración y formas de pago:</h4>
            <p>El contenido disponibilizado en el Sitio web no tiene precio, es totalmente GRATIS.</p>
            <h4>– Reglas de conducta:</h4>
            <p>El Usuario además de poder descargar contenido musical desde el Sitio web, también puede enviar sus comentarios o consultas, quedando a su responsabilidad 
            el uso de un vocabulario adecuado, si su conducta no es acorde con las reglas de comportamiento establecidas, el Propietario se reserva el derecho de hacer 
            valer su autoridad y definir la permanencia o no del Usuario en el Sitio.</p>
            <h4>– Responsabilidades y garantías:</h4>
            <p>El uso y la navegación en el Sitio web y el uso de su contenido corren por cuenta y riesgo del Usuario. ni Música Libre ni ninguna otra persona y/o agente 
            involucrado en la creación, actualización, mantenimiento y/o entrega del Sitio es responsable de ningún daño directo, indirecto, incidental ni de cualquier 
            otro daño derivado del acceso o uso del Sitio o uso del contenido del Sitio cualquiera sea su naturaleza. Música Libre no asume ninguna responsabilidad ni 
            otorga garantía de ningún tipo, ni expresa ni implícita, respecto del Sitio, su contenido, su acceso y su uso. Música Libre tampoco asume responsabilidad ni 
            será responsable por ningún daño o virus que pueda infectar o invadir su equipo informático u otro dispositivo como consecuencia del acceso, uso o navegación 
            en el Sitio o descarga de cualquier material desde el Sitio.</p>
            <h4>– Sistema de solución de conflictos:</h4>
            <p>Haciendo uso de los medios establecidos (vía web o correo electrónico) se resolverán los conflictos que se puedan crear debido al uso de nuestro Sitio o el 
            material disponibilizado en el mismo. <br/>Correo de contacto: musicasinderechoautoral@gmail.com</p>
            <h4>– Seguridad y confidencialidad de los datos:</h4>
            <p>La información que Ud. proporciona al Sitio web de Música libre es manipulada bajo estrictos estándares de seguridad. Música libre ha adoptado todas las medidas 
            de seguridad necesarias para asegurar la conservación de sus datos, a fin de evitar su extravío, alteración, cualquier posible acceso o tratamiento no autorizado 
            por parte de terceros, en cumplimiento con lo establecido por la normativa vigente.</p>
            <h4>– Uso de Cookies:</h4>
            <p>Música libre utiliza cookies en su sitio web con fines estadísticos con el fin de calcular, a modo de ejemplo, la cantidad de usuarios que acceden al sitio y 
            para conocer los hábitos de navegación de los usuarios. Esta recopilación también nos ayuda a medir los patrones de tráfico, que nos permite conocer cuáles de 
            las páginas del sitio han sido las más visitadas por los usuarios. Esto nos permite comprender mejor las preferencias de los usuarios respecto a los contenidos 
            ofrecidos en el Sitio.</p>
            <h4>– Otros:</h4>
            <p>Música Libre puede en cualquier momento revisar y modificar estos Términos y Condiciones, por lo que es de su propia carga e interés revisar – de tanto en tanto
            – los mismos para mantenerse actualizado.</p>
            <br/>
        </div>
        <FlechaArriba/>
        </>
    )
};

export default Terminos;