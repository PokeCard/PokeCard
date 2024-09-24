import { useState } from 'react'

import './App.css'
import NavbarAboutUs from './assets/components/NavbarAboutUs'
import CardAboutUs from './assets/components/CardAboutUs'

function App() {


  return (
    <>
    <body class='background'>
      <NavbarAboutUs />
      <h2 className='display-5 text-center text-light'>Our Team</h2>
      <p className='text-center text-light'>Consist of talentful person, coming from all corner of the islands. Here they are!</p>
      <section className='container text-center'>
        <div className='row justify-content-around'>
          {
            ['Julio', 'Diana', 'Ivan'].map((item) => {
              return <CardAboutUs />
            })
          }
        </div>
      </section>
      <footer class='footer'>Footer</footer>
      </body>
    </>
  )
}

export default App
