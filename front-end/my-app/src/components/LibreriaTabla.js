//Presentación de la lista de temas (todos o por búsqueda)
import { usePaginarLibreria } from "./hooks/usePaginarLibreria";
import LibreriaTablaFila from "./LibreriaTablaFila";

const LibreriaTabla = ({ db, res, handleErrorDes, handleReproducir }) => {

    //Llamando hook personalizado
    const {
        paginaDB,
        paginaRES,
        dividirDB,
        dividirRES,
        proximaPaginaDB,
        proximaPaginaRES,
        anteriorPaginaDB,
        anteriorPaginaRES
    } = usePaginarLibreria(db, res);

    return(
        <>
        <div className="listado">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Título</th>
                        <th>Artista</th>
                        <th>Género</th>
                        <th>Año</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { (res.length === 0) ? (dividirDB().map( (e, index) =>  <LibreriaTablaFila key={index} e={e} handleErrorDes={handleErrorDes} handleReproducir={handleReproducir}/>)
                            ) : (
                              dividirRES().map( (e, index) =>  <LibreriaTablaFila key={index} e={e} handleErrorDes={handleErrorDes} handleReproducir={handleReproducir}/>)
                            ) }
                </tbody>
            </table>
        </div>
        
        <div className="btns-l">
        { (res.length === 0) ? (
          ( (paginaDB + 3) < db.length ) && <button className="btn-dividir-next" onClick= {proximaPaginaDB}>
                    <img className="atras-delante"
                     src="../images/rapido-hacia-delante.png" alt="Flecha adelante"/></button> 
        ) : (
          ( (paginaRES + 3) < res.length) && <button className="btn-dividir-next" onClick= {proximaPaginaRES}>
                    <img className="atras-delante"
                     src="../images/rapido-hacia-delante.png" alt="Flecha adelante"/></button>)   
         }

        { (res.length === 0) ? (
           (paginaDB > 0) && <button className="btn-dividir-previous" onClick= {anteriorPaginaDB}>
                    <img className="atras-delante"
                     src="../images/rapido-hacia-atras.png" alt="Flecha atrás"/></button> 
        ) : (
           (paginaRES > 0) && <button className="btn-dividir-previous" onClick= {anteriorPaginaRES}>
                    <img className="atras-delante"
                     src="../images/rapido-hacia-atras.png" alt="Flecha atrás"/></button>
        ) }
        </div>
        </>
    )
};
export default LibreriaTabla