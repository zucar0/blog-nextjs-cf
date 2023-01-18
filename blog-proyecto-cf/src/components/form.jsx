import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const Form = () => {
    
    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
                .min(2, "El nombre que has escrito es demasiado corto")
                .max(50, "El máximo es de 50 letras")
                .required("El nombre es un campo obligatorio"),
        apellido: Yup.string()
                .min(2, "El apellido que has escrito es demasiado corto")
                .max(50, "El máximo es de 50 letras")
                .required("El apellido es un campo obligatorio"),
        mensaje: Yup.string()
                .min(180, "El mensaje requiere más detalles, al menos 180 caracteres")
                .max(1500, "El máximo es de 1500 caracteres")
                .required("Este campo es obligatorio"),
        email: Yup.string()
                .email("Email inválido, ingresa un formato válido")
                .required("El email es un campo obligatorio"),
    })

    //Se usa el hook useFormik con un objeto
    const formik = useFormik({
        initialValues:{
            nombre: '',
            email: '',
            apellido: ''
        },
        validationSchema,
        onSubmit: values => {
            console.log(values)
        }
    })
  return (
    <div>
        <h1>Contacto</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" id='nombre' name='nombre' 
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    placeholder="Ingresa tu nombre"
                />
                <div className='error'>
                    {formik.errors.nombre && formik.touched.nombre ? formik.errors.nombre:''}
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="apellido">Apellido: </label>
                <input type="text" id='apellido' name='apellido' 
                    value={formik.values.apellido}
                    onChange={formik.handleChange}
                    placeholder="Ingresa tu apellido"
                />
                <div className='error'>
                    {formik.errors.apellido && formik.touched.apellido ? formik.errors.apellido:''}
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email: </label>
                <input type="text" id='email' name='email' 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="ejemplo@mail.com"
                />
                <div className='error'>
                    {formik.errors.email && formik.touched.email ? formik.errors.email:''}
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="mensaje">Mensaje: </label>
                {/* <input type="textarea" id='mensaje' name='mensaje' 
                    value={formik.values.mensaje}
                    onChange={formik.handleChange}
                    placeholder="Escribe tu mensaje aquí"
                /> */}
                <textarea name="mensaje" id="mensaje" cols="30" rows="10" 
                        placeholder='Motivo de contacto'
                        value={formik.values.mensaje}
                        onChange={formik.handleChange}
                ></textarea>
                <div className='error'>
                    {formik.errors.mensaje && formik.touched.mensaje ? formik.errors.mensaje:''}
                </div>
            </div>
            <input type="submit" placeholder='Enviar' value="Enviar"/>
        </form>
    </div>
  )
}
