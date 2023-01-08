import React from 'react';
import {Routes, Route,BrowserRouter, Navigate } from "react-router-dom";
import {Inicio} from "../components/inicio"
import {Portafolio} from "../components/portafolio"
import {Servicios} from "../components/servicios"
import {Curriculum} from "../components/curriculum"
import {Contacto} from "../components/contacto"
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import {Error} from '../components/error';
import {Blog} from '../components/blog';
import {Proyecto} from '../components/proyecto';


export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* Header y Navegación */}
        <HeaderNav/>
        {/* Contenido Central */}
        <section className="content">
            <Routes>
                <Route path='/' element={<Navigate to="/inicio" />}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/portafolio' element={<Portafolio/>}/>
                <Route path='/servicios' element={<Servicios/>}/>
                <Route path='/curriculum' element={<Curriculum/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/proyecto/:id' element={<Proyecto/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </section>
        {/* Footer */}
        <Footer/>
    </BrowserRouter>
  )
}
