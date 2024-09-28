import React, { useState } from 'react'

// yha pe by default hume props ka acess milta hai using props keyword aur props.name ka use krke acess kr skte hai phir
// props ko pass lete waqt curly-braces ka use nhi lete..
export default function CounterNew(props) {
   const [count, setCount] = useState(0);
   const [count2, setCount2] = useState(0);
   console.log(props.name);
   console.log(props.age);
  return (
    <>
     <h1>{props.name}</h1>
    <div className='flex justify-center gap-4'>
    <div className=' text-2xl flex justify-center'>
    <button onClick={()=>{setCount(count-1)}} className='bg-green-500 rounded w-10'>-</button>
    </div>
    <div className='flex justify-center'>
    <div className='flex justify-center items-center bg-red-300 w-10 h-10 rounded-md'>{count}</div>
    </div>
    <div className=' text-2xl flex justify-center'>
    <button onClick={()=>{setCount(count+1)}} className='bg-blue-500 rounded w-10'>+</button>
    </div>
    </div>
    <div className='flex justify-center gap-4 mt-9'>
    <div className=' text-2xl flex justify-center'>
    <button onClick={()=>{setCount2(count2-1)}} className='bg-green-500 rounded w-10'>-</button>
    </div>
    <div className='flex justify-center'>
    <div className='flex justify-center items-center bg-red-300 w-10 h-10 rounded-md'>{count2}</div>
    </div>
    <div className=' text-2xl flex justify-center'>
    <button onClick={()=>{setCount2(count2+1)}} className='bg-blue-500 rounded w-10'>+</button>
    </div>
    </div>
    </>
  )
}
