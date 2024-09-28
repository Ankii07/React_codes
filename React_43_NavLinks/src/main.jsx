import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'

// vite mai main.js hi naam rakh skte hai main js file ka 
// parcel mai khuch bhi naam rakh skte hai jaise ki naam tha index.js..

// router dom ko install krna padata hai before use direct use nhi kr skte hai..
// react router dom ko install krne ka command hai npm i react-router-dom

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

// outlet bnane tak alg alg tab pe jayenge to pura ka pura page reload hoga pr react mai
// to single page reload bnate hai iske liye navlink import krna hoga..

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About/>,
      },
    ],
  },
])

 // router provider ko use krna hoga aur isko bhi import krna pdega..
createRoot(document.getElementById('root')).render(
  <>
  {/* <Header/> */}
  <RouterProvider router={router} />
  </>
)