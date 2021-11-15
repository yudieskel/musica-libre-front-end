//Abstraer la paginación en librería (3 temas a cada vez)
import { useState } from "react";

export const usePaginarLibreria = (db, res) => {

    //Variables de estado
    const [ paginaDB, setPaginaDB ] = useState(0);
    const [ paginaRES, setPaginaRES ] = useState(0);
    
    //Funciones para db
    const dividirDB = () => {
        return db.slice(paginaDB, paginaDB + 3)
    };

    const proximaPaginaDB = () => {
        if(db.length > (paginaDB + 3)) {
            setPaginaDB(paginaDB + 3)
        }
    };
    
    const anteriorPaginaDB = () => {
        if(paginaDB > 0) {
            setPaginaDB(paginaDB - 3)
        }
    };

    //Funciones para res
    const dividirRES = () => {
        return res.slice(paginaRES, paginaRES + 3)
    };

    const proximaPaginaRES = () => {
        if(res.length > (paginaRES + 3)) {
            setPaginaRES(paginaRES + 3)
        }
    };
    
    const anteriorPaginaRES = () => {
        if(paginaRES > 0) {
            setPaginaRES(paginaRES - 3)
        }
    };

return {
    paginaDB,
    paginaRES,
    dividirDB,
    dividirRES,
    proximaPaginaDB,
    proximaPaginaRES,
    anteriorPaginaDB,
    anteriorPaginaRES
}

};