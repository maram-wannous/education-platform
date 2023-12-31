import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider, 
        createBrowserRouter } from 'react-router-dom'
import { routes } from './Routes/Router';

const router = createBrowserRouter(routes,
  {
    basename: '/education-platform',
  }
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
