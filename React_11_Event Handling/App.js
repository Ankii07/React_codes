// import React from 'react'
// //hume exort default krna hota hai
// export default function App() {
//   return (
//     <div>App</div>
//   )
// }


// export default function App() {
//     return <div>Hello app</div>
// }

//hum component ko arrow function ka use krke bhi bna skte hai

// const App = () => {
//     return <div>hello app</div>
// }

// export default App

import leftArrow from './assets/images/left_arrow.png'
import AppleCounter from './components/AppleCounter'

const App = () => {
  // <h1 onClick={()=>{
  //   console.log('hii')
  // }}>Hello</h1>

  <input type="text" onChange={(e)=>{
    console.log("hello");
  }} />

    return  (
     <div>
     {/* control click krne pe component pe wh jis file mai wha pe le jayegi vs code */}
       <AppleCounter onClick = {(e)=>{
        console.log("HII");
       }}
       />

    </div>
    )
}

export default App