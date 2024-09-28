import React from 'react'

export default function select({label,id,name,value,onChange,options, error,defaultOption}) {
  return (
    <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      {/* <option value="" hidden>
        
      </option> */}
      {/* jsx mai javascript { } braces mai likha jata hai */}
      {/* yha pe option ko bhi dynamic bna rhe hai */}
      
      {
        defaultOption && (
            <option value="" hidden>
               {defaultOption}
            </option>
        )
      }

       {
        options.map((option, i)=><option key={i} value={option}>{option}</option>)
      }
      
      {/* ab defaultoption bhi set krna chahte hai jaise ki agr defaultoption hai to wh dikhao aur agr nhi to
      phla option dikhao  */}

      {/* <option value="Grocery">Grocery</option>
      <option value="Clothes">Clothes</option>
      <option value="Bills">Bills</option>
      <option value="Education">Education</option>
      <option value="Medicine">Medicine</option> */}
    </select>
    <p className='error'>{error}</p>
  </div>
  )
}
