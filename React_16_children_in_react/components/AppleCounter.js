//Declarative Programming

import Button from './Button'

import LeftArrow from '../assets/images/left_arrow.png'
import RightArrow from '../assets/images/right_arrow.png'
import AppleBasket from './AppleBasket'

import './AppleCounter.css'
import { Fragment, useState } from 'react'
//fragment ka symbol type ka data-type hota hai

// console.log(Fragment);
// // same way to do the above thing
// console.log(symbol.for('react.fragment'));

// react.fragment hai wh ek wrapper create krke de deta hai

// children prop ka use krke hum data pass kr skte hai component mai 
const AppleCounter = () => {
  const totalAppleCount = 10
  const [rightAppleCount, setRightAppleCount] = useState(0)
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  )
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1)
      setLeftAppleCount(leftAppleCount + 1)
    }
  }
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1)
      setLeftAppleCount(leftAppleCount - 1)
    }
  }
  
  const a =   <Fragment>
  <section>
    <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
    <Button
      clickHandler={leftClickHandler}
      imageUrl={LeftArrow}
      // buttonName="Left Arrow"
    >
    {/* yha pe khuch bhi pass kr skte hai  function object khuch bhi */}
    {/* yha pe direct children pass krwa rhe hai isse yh fayda hai ki ek prop kam ho jata hai aur dekhne mai bhi simple
    html ki trah lgta hai */}
    {/* hum kai baar yh krte hai ek component ko as a children pass krwa deta hai aur us component ke andr 
    us children ko render krwa dete hai */}

      Left Arrow
    </Button>
    <Button
      clickHandler={rightClickHandler}
      imageUrl={RightArrow}
      // yha pe children prop ke trah pass krwa rhe hai
      // children="Right Arrow"
      // yha pe rigth arrow automatically pass ho jata hai children prop
      // hum jb tk kuch pass na kre as children ko wh undefined hi pass rhta hai
    >Right Arrow</Button>
    <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
  </section>
  <p>Hello</p>
</Fragment>
  // alternate way to do <fragment> </Fragment> just use <></>
  return (
    // fragment jb humare html element pe jata hai to wh koi bhi element create nhi krta hai
    // whi jb div se group kr rhe the to ek extra div element create ho ja rha tha 
    // behind the scenes fragment ek react.createelement krta hai
      a
  )
}

export default AppleCounter