import React, { useState } from './react'
import { render } from './react-dom'

import './App.css'
//react mai jo onclick hota hai capital case mai hota hai
// but by default dom mai jo hota hai small case mai hota hai

export default function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(10)
  const [name, setName] = useState('Ankit')
  console.log(count +"count");
  return (
    <div>
        <h1 style={{textAlign:'center', userSelect:'none', cursor:'pointer'}} 
        onclick ={() => {
          console.log("clicked")
          setCount(count+1)}}
        >{count}</h1>

        <h1 style={{textAlign:'center', userSelect:'none', cursor:'pointer'}} 
        onclick ={() => {
          console.log("clicked")
          setCount2(count2+1)}} 
        >{count2}</h1>
        {/* react mai jo onchange wh hr ek keystroke pe trigger hota hai pr javascript mai jo onchanage hai us input ke bahr click krne pe trigger hota hai. */}
         <h1 style={{textAlign:'center'}} 
          >{name}</h1>
          <div style={{textAlign:'center'}} 
          //yha pe onchange small case mai hona chahiye kyuki yh react ka onchange nhi balki javascript ka onchange hai 
          // react ka onchange hr ek type hone pe trigger hota hai pr javascript mai jo onchange hai wh pure likhne ke baad jb bahar click krte hai tb trigger hota hai 

          // agr hum chahte hai ki hr ek typing pe dikhta rhe to hum oninput event ka use kr skte hai pr yha pe ek dikkat yh hai ki agr backspace kre to unselect ho jayega
          // aisa isiliye ho rha hai kyuki chhoti se chhoti change pe humara page pura ka pura render ho rha hai..
          ><input type="text" oninput={(e)=> setName(e.target.value)}/></div>
    </div>
  )
}

render (<App/>, document.getElementById('root'))

// react maintain rakhta hai ek virtual dom jb bhi koi change hota hai wh compare krta hai kya change hua hai purane virtual dom aur nye virtual dom
// mai jo change hua hota hai usko real dom mai change kr deta hai. ise hi khte hai reconsiliation
// know more about defing algorithm