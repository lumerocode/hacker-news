import React from 'react'
import './header.css'
import Logo from '../../assets/img/hacker-news.png'


const Header = () => {
  return (
    <section className='container'>
        <div className='container__header'>
            <img src={Logo}/>
        </div>
    </section>
  )
}

export default Header