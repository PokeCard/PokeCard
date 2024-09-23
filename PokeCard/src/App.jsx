import { useState } from 'react'

import './App.css'
import NavbarAboutUs from './assets/components/NavbarAboutUs'
import CardAboutUs from './assets/components/CardAboutUs'

function App() {


  return (
    <>
      <NavbarAboutUs />
      <h1 className='display-2 text-center'>Test Bootstrap</h1>
      <section className='container text-center'>
        <div className='row justify-content-around'>
          {
            ['Julio', 'Diana', 'Ivan'].map((item) => {
              return <CardAboutUs />
            })
          }
        </div>
      </section>
    </>
  )
}

export default App
