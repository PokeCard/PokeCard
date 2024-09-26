import { useState } from 'react'

import './App.css'
import NavbarAboutUs from './assets/components/NavbarAboutUs'
import CardAboutUs from './assets/components/CardAboutUs'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <>
      <body class='background'>
        {/* <NavbarAboutUs />
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
      <footer class='footer'>Footer</footer> */}
        ------------------------
        <h1 className="display-6">Creat Your Team</h1>
        <Form>
          <div className='container'>
            <div className='row justify-content-between'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Create Team</Form.Label>
                <Form.Control type="email" placeholder="Create Team" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Pokemon</Form.Label>
                <Form.Control type="password" placeholder="Select.." />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formButton">
                <Form.Text className="text-muted">
                  <Button variant="primary" type="submit">Add Data</Button>
                </Form.Text>
              </Form.Group>
            </div>
          </div>
        </Form>
      </body>
    </>
  );
}

export default App;
