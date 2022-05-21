import React from 'react'
import './header.css'
import Logo from '../../assets/img/hacker-news.png'
import { Link } from "react-router-dom"; //Importamos navlink y link para la navegacion interna entre páginas



const Header = () => {
  return (
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