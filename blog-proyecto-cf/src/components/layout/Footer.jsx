import React from 'react'
import { Social } from '../social'

export const Footer = () => {
  return (
    <footer className='footer'>
        Portafolio de <span>Antonio Enríquez</span> &copy; Desarrollador Web | 2023
        <div className='social-links'>
          <Social/>
        </div>
    </footer>
  )
}
