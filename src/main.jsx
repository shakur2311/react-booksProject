import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import {router} from './routes';
import IndexContext from './Context/IndexContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <IndexContext>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </IndexContext>   
    
    
)
