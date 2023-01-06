import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/works'

export const Proyecto = () => {

    const params = useParams();
    // Se hace uso del estado para pasar informacion al JSX, por defecto estará vacío el proyecto
    const [proyecto, setProyecto] = useState("");
    // se utiliza una sola vez con los corchetes
    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        //Se pasa el índice porque representa el proyecto contenido en la variable proyecto
        setProyecto(proyecto[0]);
    },[]);

    return (
        <div className='page'>
            <h1 className='heading'>
                {proyecto.nombre}
            </h1>
            <div className='mask'>
              <img src={"/images/"+proyecto.id+".png"} />
            </div>
            <section>
                <article>
                    {proyecto.tecnologias}    
                </article>
                <p>
                    {proyecto.descripcion}
                </p>
                <a href={"https://"+proyecto.url} target="_blank">Conócelo</a>
            </section>
        </div>
    )
}
