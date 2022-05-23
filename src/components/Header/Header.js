import React from 'react'
import './header.css' //Importamos estilos
import Logo from '../../assets/img/hacker-news.png' //Importamos la imagen que aparecerá en la cabecera
import { Link } from "react-router-dom"; //Importamos navlink y link para la navegacion interna entre páginas


const Header = () => {
  return (
    // Contenedor del Header
    <section className='container'>
        <div className='container__header'>
          <Link to='/'>
            <img src={Logo}/>
          </Link>
        </div>
    </section>
  )
}

export default Header