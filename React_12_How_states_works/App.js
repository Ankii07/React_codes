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
import Counter from './components/Counter';

const App = ({root}) => {
  // <h1 onClick={()=>{
  //   console.log('hii')
  // }}>Hello</h1>

  // ek element node ho skta hai pr ek simple node element nhi ho skta 

  <input type="text" onChange={(e)=>{
    console.log("hello");
  }} />

    return  (
     <div>
     {/* <Counter/> */}
     {/* control click krne pe component pe wh jis file mai wha pe le jayegi vs code */}
       <AppleCounter root = {root}
       />

    </div>
    )
}

export default App