import React from 'react'
import NewCounter from './NewCounter'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

// Higher order componet basically yh krta hai ki sare reusable code ek jgh rakh deta hai 
// aur hum use alg alg component mai use kr skte hai higher order component ka use krke..
// isi ki trah modern react mai use krte hai hooks

// higher order component simply ek function hota hai  jo ki dusre component as a function parameter accept krta hai..

// Higher ka naming convention hai ki with se start kre..
export default function Home() {
  return (
    <>
      <h1 className="text-xl">Welcome to Our Home</h1>
      {/* <NewCounter name="New Counter" />
      <hr className='my-4' /> */}
      <ClickCounter name="Click Counter" />
      <HoverCounter name="Hover Counter"/>
    </>
  )
}
