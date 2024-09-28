import React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
//  tailwind by default hr ek element ko 16px de deta hai
  return (
    <>
    <Header/>
    <main className='py-4 px-4 md:px-8'>
    {/* yha pe outlet render krenge tabhi sare components ke sare elements dikhenge screen pe */}
    <Outlet/>
    </main>
    
     </>
  )
}

export default App
