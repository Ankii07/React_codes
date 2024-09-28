
// import React from 'react'
// yha pe import krne ki jurrort nhi padti hai yhq file ke name se automatically uthha leta hai

import { useState } from "react"

// jis function ke aage use likha hai wh hook hoga 

export default function Counter() {
    // hook create krne ke liye hume useState keyword use krna hoga jo ki ek function hai jo do parameters leti hai
    // aur return ek array krti hai 
    // jo nhi hum first parameter pass krte hai wh function ke return ki first value ho jati hai
    // second value jo return hoti hai wh function hoti hai jisko hum updater function bhi bol skte hai jo values ko update 
    // krke screen pe dikhayega 
    // const myStateArray = useState(0) 
    // const count = myStateArray[0]
    // const setCount = myStateArray[1]
    // doing the same above thing using array destructuring
    // yh convention hota hai ki jo function ka naam de wh set krke de uske aage us variable ka naam
    // function jo return hoti hai wh yaad rkhti hai ki call hui thi phle aur kis value pe hui thi jo ki 
    // closure property ka use krke of the javascript
    
    // hum usestate ko apne component ke bahar use nhi kr skte 
    const [count, setCount] = useState(0) 
  return (
    <div style={{textAlign:'center'}}>
        {/* kyuki my state array hai isiliye uski index value se access krna hoga */}
        {/* aur yh automatic render ho jayega because use of state */}
        {/* <h1>{myStateArray[0]}</h1> */}
        {/* doing the same above thing using the variable */}
        <h1>{count}</h1>
        <button onClick={()=>{
            // reuturn value mai dusri wali index pe jo updater function thi usme ek parameter pass kr diya 1 ko increment krne ke liye..
            // myStateArray[1](myStateArray[0]+1)
            // age 3 baar set kr diye hai to aisa nhi ki 3 baar increment krke dikhega
            setCount(count+1)
            // setCount(count+1)
            // setCount(count+1)
            // increase krwana ho ek hi cheez ko 3 baar
            // react ke language mai bolte hai ki yh react ke update ke batch ko update kr deta hai
            // jb hum state ko update krte hai jb wh humare previous value pe dependent hota hai to hume callback function ka use krke update krna hota hai
            // yh sab khuch synchronous hi hota hai
            setCount((previousState)  => previousState+1)
            setCount((previousState)  => previousState+1)
            setCount((previousState)  => previousState+1)
            // use state khuch is trah kaam krta hai
            // behind the scene ek array maintain krke rakhta hai
            // array jo phli value hoti hai wh pahle wale passed parameter ko de deta hai
        }}
        >Increase Count</button>
    </div>
  )
}
