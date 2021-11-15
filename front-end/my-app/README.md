FRONT-END

### `npm run start` 

Breve explicación: 

-Inicio: Nos da una página de presentación con un menú de navegación que está presente en el resto de las páginas, al igual que el footer que contiene las redes sociales, los términos y condiciones, además de la política de privacidad. Se destaca el botón ‘biblioteca de audio’ ya que el interés principal es su acceso. 

-Entrar: En esta página el usuario podrá registrarse y/o autenticarse, además de poder recuperar su clave, caso la haya olvidado. Todos los formularios están validados usando "Expresiones Reguladoras" y en el caso específico de registrarse es necesario aceptar los términos.  

Tanto suceso como error en cualquier paso será indicado con mensajes en la parte inferior de la página y es válido aclarar que la clave de usuario se almacena encriptada para proteger los datos. 

-Librería: Como ejemplo la librería cuenta con 17 géneros e igual número de canciones, que pueden ser reproducidas y/o descargadas; pero para descargar primeramente el usuario tiene que estar autenticado, así que al tocar el icono será re-direccionado a la página de entrar y verá un mensaje informando lo acontecido. 

Los temas están paginados de 3 en 3, pudiendo el usuario ir adelante o atrás según desee, o realizar búsquedas por título, artista, género o año.  

-Contactos: En esta página los campos están validados usando "Expresiones Reguladoras", una vez enviado el formulario es almacenado, además el contacto es enviado al correo del administrador. 

-Manejo de errores: Los errores en rutas te re-direccionan a una página de error 404. 

-Diseño responsivo: Fue comprobado para Chrome en los simuladores de dispositivos, particularmente en iPhone 5/SE y iPad (tanto vertical como horizontal). Presentamos un menú hamburguesa y retiramos el header y el footer. 

Módulos usados: 

    react-router-dom (Rutas en React) 

    react-h5-audio-player (Reproductos de audio) 

    react-scroll-up-button (Flecha arriba) 