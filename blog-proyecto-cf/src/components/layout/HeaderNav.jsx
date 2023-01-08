import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
        <header className='header'>
            <div className='logo'>
                <span>T</span>
                <h3>Antonio Enríquez Web</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio" className={({isActive})=> isActive ? 'active' : ''}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portafolio">Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios">Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum">CV</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
