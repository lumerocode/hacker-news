import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom"; //Importamos navlink y link para la navegacion interna entre páginas


const Navbar = () => {
  return (
    <nav className="container__navbar">
        <div className="navbar__names">
            <div className="" id="">
            <div className="navbar__nav">
                <NavLink to='/' className="nav__link" href="#">
                  All
                </NavLink>
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