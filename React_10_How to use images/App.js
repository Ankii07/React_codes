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
    return  (
     <div>
       <AppleCounter/>

    </div>
    )
}

export default App