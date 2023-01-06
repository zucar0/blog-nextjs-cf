import React from 'react'
import {Link} from'react-router-dom';

export const Inicio = () => {
  return (
    <div className='home'>
      <h2 className='main'>
        Hola, soy <strong>Antonio Enríquez</strong>, Ing. en Desarrollo de Software, ex periodista (Lic. en Ciencias de la Comunicación) y un profesional de las Tecnologías de la Información apegado al principio de adquirir aprendizaje todos los días.
      </h2>
      <p className='secondary'>
        Mi <strong>perfil híbrido</strong> es un aliciente con el que se puede obtener valor agregado en cualquier trabajo. <Link to="/contacto">Contáctame</Link>
      </p>
      <section className='trabajos'>
        <h2>
          Proyectos
        </h2>
        <p>Estos son algunos de los trabajos en los que he colaborado</p>
      </section>
    </div>
  )
}
