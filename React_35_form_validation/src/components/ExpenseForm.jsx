import { classify } from 'i/lib/methods'
import React, { useEffect, useRef, useState } from 'react'

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })

  // const titleRef = useRef()
  // const categoryRef = useRef()
  // const amountRef = useRef()

  const [errors, setErros] = useState({})

  const validate = (formData) =>{
    const errorsData ={}
    if(!formData.title){
      errorsData.title = 'Title is required'
    }
    if(!formData.category){
      errorsData.category = 'Category is required'
    }
    if(!formData.amount){
      errorsData.amount = 'Amount is required'
    }
    setErros(errorsData)
    return errorsData
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // setExpenses((prevState) => [
    //   ...prevState,
    //   {
    //   title: titleRef.current.value,
    //   category: categoryRef.current.value,
    //   amount: amountRef.current.value,
    //   id: crypto.randomUUID() 
    // },
    // ])

    // validate krne ke liye hum ek validate function bna rhe hai jisme ki updated expense pass krenge 
    // aur validate check rkega kon kon si value hai jo empty hai uske hisab se jo local object bna rakha hai uesko update kr dega 
    // aur ek error ka usestate bna rakha hai jisko ki wh update kr dega aur uske baad just ek console log kr rhe hai jisme ki hum expect 
    // kr rhe hai ki update error ka object aayega kyuki humne seterrors(errors) to validate form mai kr diya uske baad console kr rhe hai 
    // pr react mai aise nhi hota hai jb tak ki pura ka pura handlesubmit execute na ho jaye jb tak koi bhi set function call nhi hoga
    // is cheez ko handle krne ke liye hum sath hi sath return bhi krwa denge same function se

    const validateResult=validate(expense)
    // ab validateResult value ko use krne ke liye hum yh kr skte hai ki kyuki yh ek object hai to directly iski value 
    // ka length to le nhi skte to use krenge object ki keys properties jo hume return krti hai ek array sari object ke sare keys ka 
    // kyuki yh array hai to iske length se hum pta lga skte hai ki kon kon si values empty hai use according hum apne css ko update kr skte hai
    // console.log(validateResult)
    
    if(Object.keys(validateResult).length) return 

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }
  
   
  // console.log(errors);
   
  // useEffect(() => {
  //   console.log('rendering')
  // })
   
  let handleChange = (e) =>{
    // <input id="title" name="title" value="a">
    // console.log(e.target);
    const {name, value} = e.target
    setExpense((prevState) => ({
      ...prevState,
      // as a variable treat krwane ke liye square bracket use krna hota hai
      [name]: value,
    }))
    // jb type krne lge to sare errors empty ho jaye 
    setErros({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={
            // yha pe hum call nhi krte hai balki reference pass krte hai agr call kiya to error aayega
            handleChange
          }
          // ref={titleRef}
        />
        {/* kuki handlesubmit run hone ke baad state update ho gya hoga isiliye hum ab use kr skte hai */}
        <p className='errors'>{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          // ref={categoryRef}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className='errors'>{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          // ref={amountRef}
        />
        <p className='errors'>{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  )
}
