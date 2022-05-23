import React, { useEffect, useState } from 'react' //Importamos los hoooks
import ReactPaginate from 'react-paginate'; //Importamos ReactPaginate para la paginación
import './pagination.css' //Estilos de css


const Pagination = ({setPageNumber, nbPages}) => {
    /*
    {setPageNumber} ===> Traemos esta constante de App.js para actualizar la numeración de la página 
    {nbPages} ===> Traemos la constante de App.js para saber la cantidad total de páginas 
    */

    //console.log(nbPages) //Para encontrar el número de páginas

    //Estado para guardar y actualizar el width de la pantalla
    const [width, setWidth] = useState(window.innerWidth)

    //Aqui asignamos el valor del width de la pantalla a setWidth
    const updateDimen = () => {
      setWidth(window.innerWidth)
    }

    //Ejecuta la acción y elimina la misma cada vez que ampliamos o contraemos la cantalla o de acuerdo al screen 
    useEffect(() => {
      window.addEventListener("resize", updateDimen)
      return () => window.removeEventListener("resize", updateDimen)
    }, [])

    //Funcion handlePageChange
    const handleOnPageChange = (data) => {
       setPageNumber(data.selected + 1) //Trae la numeración de las páginas
    }

  return (
    <>
      {/* Componente de React js para la paginación */}
      <ReactPaginate 
        className="pagination"
        nextLabel=">" //Texto en el botón siguiente
        nextLinkClassName="btn_page_next next" //Estilos para el botón siguiente
        previousLabel="<" //Texto en el botón anterior
        previousLinkClassName="btn_page_prev prev" //Estilos para el botón anterior
        pageLinkClassName="page_link" //El nombre de la clase en la etiqueta de cada elemento de página
        activeLinkClassName="page_active" //Paginador activo
        onPageChange={handleOnPageChange} //Método para llamar cuando se cambia una página. 
        pageCount={124} //Cantidad de páginas
        marginPagesDisplayed={width < 576 ? 2 : 3} //Mostrar cantidad de paginas
        pageRangeDisplayed={width < 576 ? 2 : 3}  //Mostrar máximo d páginas
      />
    </>
  )
}

export default Pagination