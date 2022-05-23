import React from 'react'
import './navbar.css' //Importamos estilos
import { NavLink } from "react-router-dom"; //Importamos navlink y link para la navegacion interna entre páginas


const Navbar = () => {
  return (
    //Contenedor del Nav
    <nav className="container__navbar">
        <div className="navbar__names">
            <div className="" id="">
            <div className="navbar__nav">
              {/* Página All */}
                <NavLink to='/' className="nav__link" href="#">
                  All
                </NavLink>
                {/* Página My faves */}
                <NavLink to='/faves' activeclass="active" className="nav__link" href="#">
                  My faves 
                </NavLink>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar