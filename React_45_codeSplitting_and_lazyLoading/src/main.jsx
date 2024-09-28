import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'

// for lazy reloading hume lazy keyword ka use krke import krna hoga usme call back function pass krna hoga import ka
// aur yh phir return krega component..

// jb tak about page pe nhi jayenge tab tk load nhi hoga aur iska code split ho jayega..
const About = lazy(()=> wait(1000).then(()=>import('./components/About.jsx')))
// export default wale problem se deal krne ke liye yeh krna hoga..
const Home = lazy(()=> wait(1000).then(()=>import('./components/Home.jsx')))
// handling named export
const Contact = lazy(()=> wait(1000).then(()=>import('./components/Contact.jsx').then(module => {
  return {default: module.Contact}
})))

// lazyloading ki jurrort tab padti hai jab humare application  mai bhut sari pages ho jati hai
// aur wh sare pages bhut hi lengthy ho jate hai bhut hi size ke ho jate hai

// vite kya krta hai ki har ek file ko alg alg request dalta hai unhe kholta hai development mode mai 
// yh parcel aur create react app nhi hota hai agr vite mai build krke khole to ek hi file ko load krega..

// production mode mai run krne ka matlb hai ki jb hum apne application ko deploy kr dete hai uske baad kaise run krega..

// npm build krne ka command hota hai--> npm run build
// aur ek folder bnta hai dist jo sbhi file rakhta hai..

// agr hume production mode mai run krwana hai apne local host mai hi to uska command hai--> npm run preview

// lazy load ka mtlb hai jb user us page pe jayega tabhi us page ko load krenge prehand load krwa ke nhi rakhenge jaise
// ki bhutp krwa rakha hai..

//lazy reload krne component render directly nhi hoga wh element jha rha render ho rha hai usko suspense keyword
// mai wrap krna hoga aur kyuki yha about component outlet mai render ho rha hai outlet jo suspense mai wrap krna hoga.

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    // children mai jo element hai app ke outlet ke dwara render ho rha hai children render ho hi nhi rha hai
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

// A Promise in JavaScript represents a value that will be resolved in the future, 
// which can either be a success (resolved) or a failure (rejected).

// agr humne khuch change kiya hai to wh tab dikhega jb hum dubara build krke preview kre..
const wait = (time) =>{
  return new Promise(resolve => {
    setTimeout(()=>{
      setTimeout(()=>{
        resolve()
      },time)
    })
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
