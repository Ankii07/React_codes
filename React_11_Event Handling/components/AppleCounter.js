import Button from "./Button"
// ./ se usi folder mai search krega us folder se bahar jakr dekhna hoga to ../ krke krna hoga
import leftArrow from "../assets/images/left_arrow.png"
import RightArrow from "../assets/images/right_arrow.png"
import AppleBasket from "./AppleBasket"

import './AppleCounter.css'
// hum ek event ek component ke upr nhi laga skte hai
// component ke upr lagayenge to as a prop pass ho jayega
// component ek simple function hai jo jsx return krta hai

// to import createRoot code from react-dom via client
import {createRoot} from 'react-dom/client'
// to import App component from app.js file
// import App from './App'

const root = createRoot(document.getElementById('root'))
// app simply ek string bhi render krwa kra skte ho
// root.render('radfad')



const totalAppleCount = 10
  
let rightAppleCount = 0
let leftAppleCount = totalAppleCount - rightAppleCount

const AppleCounter = ({onClick}) => {
  
  const leftClickHandler = ()=>{
    // console.log("left");
    if(rightAppleCount>0){
    leftAppleCount++
    rightAppleCount--
    console.log(leftAppleCount);
    console.log(rightAppleCount);
    root.render(<AppleCounter/>)
    }
  }
  
  const rightClickHandler = ()=>{
    // console.log("right");
    if(leftAppleCount>0){
    leftAppleCount--
    rightAppleCount++
    console.log(leftAppleCount);
    console.log(rightAppleCount);
    root.render(<AppleCounter/>)
    }
  }

  return (
    <>
    <section onClick={onClick}>
    <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
    {/* <Button imageUrl={leftArrow} title="left_Arrow"  clickHandler = {(e)=>{
        console.log("LeftArrow");
       }}
    /> */}
     <Button imageUrl={leftArrow} title="left_Arrow"  clickHandler = {leftClickHandler}
    />
    {/* <Button imageUrl={RightArrow} title="Right_Arrow" clickHandler = {(e)=>{
        console.log("RightArrow");
       }}/> */}
       <Button imageUrl={RightArrow} title="Right_Arrow" clickHandler = {rightClickHandler}/>
    <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />

    </section>
    {/* we cant retur two siblings all together simple way to do it wrap themm in a div aur use react fragment */}
    <p style={{
      textAlign: "center",
      marginTop: "32px"
    }}>
      <button onClick={()=>{
        root.render(<AppleCounter/>)
      }}
      >Re- Render</button>
    </p>
    </>
  )
}

export default AppleCounter

// hum react mai do do alg alg sibling return nhi kr skte hai achaa hai ek div mai wrap krke do
// ya to react fragment use kr skte hai <>