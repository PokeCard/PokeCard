import { useState } from 'react'

import './App.css'
import Home1 from './Pages/Home1'
import Pagination1 from './Components/Pagination1'
import Detail from './Pages/Detail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Pagination1 />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  }

]);


const App = () => {
  return <RouterProvider router={router} />
};

export default App
