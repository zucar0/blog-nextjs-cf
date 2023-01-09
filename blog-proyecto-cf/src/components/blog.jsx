import React from 'react'
import Articles from './articles'
import { ArticlesProvider } from "../contexts/ArticlesContexts"

export const Blog = () => {
  return (
    <ArticlesProvider>
      <div className='page'>
        <h1 className='heading'>
          Opinión
        </h1>
        <section className='services'>
          <Articles/>
        </section>
      </div>
    </ArticlesProvider>
  )
}
