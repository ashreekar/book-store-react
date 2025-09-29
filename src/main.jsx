import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AddBook, BookDetails, BrowseBooks, LandingPage } from "./Components/export.components.js"

// creating the routing configuration
// Array of Object Route 
// Outlet is inside App.jsx
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:"",
          element:<LandingPage/>
        },
        {
          path:"/books/:category",
          element:<BrowseBooks/>
        },
        {
          path:"/book/:id",
          element:<BookDetails/>
        },
        {
          path:"/addbook",
          element:<AddBook/>
        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
