import React from 'react'

const AppleBasket = ({ appleCount, basketName }) => {
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span> apples
      </h1>
      {/* hum yha pe javascript ke logic bhi likh skte hai using curly braces */}
      {/* <p>{basketName} {appleCount == 10?"(full)":"(not-full)"}</p> */}
      
      {/* same thing is done by another way */}
      {/* yha pe agr appleCount === 10 true aayi to second wali return ho jayegi aur
      agr appleCount === 10 false aaya to false return ho jayega aur jaisa ki hume pata hai ki
      false,true, null, undefined ko react screen pe show nhi krta to nhi dikhega*/}
      <p>{basketName} {appleCount === 10 && '(full)'} {appleCount === 0 && '(empty)'} {(appleCount >= 5  && appleCount!=10) && '(half)'}</p>
    </div>
  )
}

export default AppleBasket