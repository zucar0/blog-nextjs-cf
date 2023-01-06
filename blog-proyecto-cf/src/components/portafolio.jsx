import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/works'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>
        Portafolio
      </h1>
      <section className='trabajos-container'>
      {
        trabajos.map(trabajo =>{
          return(
          <article key={trabajo.id} className="item-de-portafolio">
            <div className='mask'>
              <img src={"/images/"+trabajo.id+".png"} alt="" />
            </div>
            <h2 className='name'>
              <Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link>
            </h2>
            <p className='tecnologias'>{trabajo.tecnologias}</p>
            <span className='categorias'>{trabajo.categorias}</span>

          </article>
          )
        })
      }
      </section>
    </div>
  )
}
