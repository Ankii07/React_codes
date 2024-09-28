import React from 'react'
import './CounteriesListShimmer.css'

export default function CounteriesListShimmer() {
    const array = new Array(10)
    // there is 10 element in that array but not iteratable 
    // newArray(10).fill(1);
    // an array containing 10 elements where all elements are 1
    // another way to do the thing

    // Array.from({length: 10}).map((el)=>{
    //     console.log(el);
    //     return 'ankit'
    // })

    // const mapped = Array.from({length: 10}).map((el,index)=>{
    //     return  <div key={index} className="country-card shimmer-card" ></div>
         
    // })

  return (
    <div className='countries-container'>{
       
        Array.from({length: 10}).map((el,index)=>{
            return  <div key={index} className="country-card shimmer-card" ></div>})
    }
    </div>
  )
}
