import React, { useState } from 'react'
// import {todos} from './data'
// hum chahte hai ki data phle hi load hokr naa rhe jb us button pe click kre to load ho data
// isike liye hum import button ke click hone pe hi krawayege..
export default function About() {
  const [todosList, setTodoList]= useState([])
  return (
    <>
    <h1 className='text-xl'>We are ProCodrrs</h1>
    <button onClick={() => 
    // setTodoList(todos)
    // import('../data') krne pe ek module milega jo ki simple ek object rhega jisme property set rhegi jisme data store rhegi..
    // yha pe todos mai sare data stored hai isiliye module.todos krke sare data ko acess kr skte hai..

    // jis jis ko lazyloading se import krte hai uski alg file bn jati hai dist folder.

    // yh krne se data ki lazy loading hogi
    import('../data').then((module) =>{
      setTodoList(module.todos)
    })
    }>Load Data</button>
    <ul>
    {
     todosList.map((todo) => <li key={todo.id}>{todo.title}</li>)
    }
    </ul>
    </>
  )
}
