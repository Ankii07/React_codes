import React, { useState } from 'react'
import { useFilter } from '../../hooks/useFilter'
// hr ek string ke andr ek empty string rhta hai
export default function ExpenseTable({ expenses }) {
  
  // yha pe yh sbhi elements ka array de dega jo ki true return krega  
  // kyukii yha pe sare mai true hi return krwa rhe hai to sare elements aa jayenge
  // yhi agr true ke jgh false return krwa denge to koi bhi element nhi aayega
  // const filteredData = expenses.filter((expenses) => true)
  // console.log(filteredData);
   
  // const filteredData = expenses.filter((expenses) =>{
  //             // jo jo element true return krega aur return kb krega jb object ki category wali value
  //             // include kregi bill
  //   return (expenses.category.toLowerCase().includes('bill'))
  // })
  
  // console.log(filteredData); //yha pe ek object aa jayega jiski category bills se set hai bills hai pr pura ka pura bill include kr rha hai

  // ab ek category useState ka use krke category set krke selected category se aur usko map krwa denge niches jisse ki sirf whi dikhega

  const [category, setCategory] = useState('')
   
  // const filteredData = expenses.filter((expenses)=>{
  //   // kyuki initialy category empty string state mai hai aur kyuki sare string hi empty string include krte hi hai isiliye 
  //   // filtereddata sare string ko contain krega..
  //   return expenses.category.toLowerCase().includes(category)
  // })
   
  // yha pe to too yh hai ki hume ek hi jgh pe filter krna pr rha hai to category pe hardcode krke filter kr paa rhe hai
  //pr aisa bhut jgh ho skta hai ke filter krna pr skta hai pr alag values ke saath, phir se wha pe same hi logic likhni pdegi
  // is cheez se bachne ke liye react ek custom hook ka trika deta hai jha hum ek similar sa logic likh skte hai aur uske parameters ko dynamic bna skte hai 

  // kyuki usefilter ek array pass kr rha hai
  // const result = useFilter(expenses)
  const [filteredData, setQuery] = useFilter(expenses, (data)=>data.category)
  
  // reduce ka use krte hai jb antath ek value mai lana ho accmulator ke mamda se
  const total = filteredData.reduce((accumulator,current) => accumulator + current.amount, 0)
  console.log(total);
 
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>
          {/* yha pe category jb bhi set hogi to pura ka pura ek bar render hoga hi yhi to krti hai setCategory */}
          {/* jo humne query usestate usefilter.js mai define kr rakha hai usko usko update expandablse js mai kr rhe hai setquery ka use krke
          aur use jo result ho rha hai usko map krwa de rhe hai  */}
            <select onChange={(e)=> setQuery(e.target.value.toLowerCase())}>
              <option value="">All</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
          </th>
          <th className="amount-column">
            <div>
              <span>Amount</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                viewBox="0 0 384 512"
                className="arrow up-arrow"
              >
                <title>Ascending</title>
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                viewBox="0 0 384 512"
                className="arrow down-arrow"
              >
                <title>Descending</title>
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
      {/* yha pe jo data filtered hokr aaya hai usse map kregnge */}
        {filteredData.map(({id, title, category, amount}) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{category}</td>
            <td>₹{amount}</td>
          </tr>
        ))}
        <tr>
          <th>Total</th>
          <th></th>
          <th>₹{total}</th>
        </tr>
      </tbody>
    </table>
  )
}
