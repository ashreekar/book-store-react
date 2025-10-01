import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AddBook, BookDetails, BrowseBooks, LandingPage,ErrorElement } from "./Components/export.components.js"

// creating the routing configuration
// Array of Object Route 
// Outlet is inside App.jsx
// Route looks like LandigPage,AddPage --> Direct routing
//                  BrowseBooks,BookDetails-->Dynamic Routing
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      errorElement:<ErrorElement/>,
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
    {/* Added Router provider with the creted routes which are also with its nested childres */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
