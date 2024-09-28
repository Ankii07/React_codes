import React, { useState } from 'react'
import CounterNew from './CounterNew'
import OldCounter from './OldCounter'

export default function Home() {
  return (
    <>
    <h1 className='text-xl'>Welcome to Our Home</h1>
    <CounterNew name="New Counter" age ="18"/>
    <hr className='my-4'/>
     <OldCounter name= "Old Counter"/>
    </>
  )
}
