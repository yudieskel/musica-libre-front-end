//Mini librería para peticiones fetch (arquitectura REST).
export const helpHttp = () => {

            const customFetch = (endpoint, options) => {
                //Cabecera por defecto
                const defaulHeader = {
                    accept: "application/json",
                }
                    //Trabajando el objeto options
            //Abortamos la petición caso no haya respuesta
            const controller = new AbortController();
            options.signal = controller.signal;
            //Validamos los métodos (GET es por default)
            options.method = options.method || "GET";
            //Mezclamos las defaulHeader con las que vienen desde el usuario en options
            options.headers = options.headers 
            ? {...defaulHeader, ...options.headers} : defaulHeader;
            //Vamos al BODY (hay que convertirlo a JSONstringify)
            options.body = JSON.stringify(options.body) || false;
            //Eliminamos el body si no existe
            if(!options.body) delete options.body;

            //Vamos a controlar el tiempo de respuesta, caso demore 3s abortamos
            setTimeout(() => controller.abort(), 3000);
            
            return fetch(endpoint, options)
                .then ( res=> res.ok ? res.json() 
                : Promise.reject({err: true,
                                status: res.status || "000",
                                statusText: res.statusText || "Ocurrio un error",}) )
                .catch(err => err);
            };
    
    const get = (url, options = {}) => customFetch(url, options);

    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    };

    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options);
    };

    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options);
    };

    return{
        get,
        post,
        put,
        del
    };
}