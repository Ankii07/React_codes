import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
    email:'',
  })

  const [errors, setErrors] = useState({})

  const validationConfig = {
    title: 
    [
    {required:true,
      message:'please enter title'
    },
    {minLength: 5,
     message: 'Title should at least of 5 characters'
    },
    
  ],
  category: 
    [
    {required:true,
      message:'please enter category'
    }
  ],
  amount:
  [
    {
      required: true,
      message: 'Please enter an amount'
    }
  ],
  email:
  [
    {
      required: true,
      message: 'Please enter an email'
    },
    {
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Please enter a valid email',
    }
  ],
  // regex ek object hai usko upr bhut si property hoti hai usme se ek property hai test
  // .test mai jo string dalenge wh batayega wh defined regex se match krta hai ki nhi
 
  }

  // const validate = (formData) =>{
  //   const errorsData = {}
  //   //object.enteries se hume ek array mil jata hai key value pair ka
  //   Object.entries(formData).forEach(([key, value])=>{
  //     // console.log(key,value)
  //     // console.log(validationConfig[key]);
  //     validationConfig[key].forEach((rule)=>{
  //       console.log(rule)
  //       // required mai && lgakr likha hua hai asli rule to
  //       if(rule.required && !value){
  //         errorsData[key]= rule.message
        
  //       }
  //       if(rule.minLength && value.length < 5){
  //         errorsData[key]= rule.message
        
  //       }

  //       if(rule.pattern && !rule.pattern.test(value)){
  //         errorsData[key]= rule.message
  //       }
  //     })
  //   })
  //   setErrors(errorsData)
  //   return errorsData
  // }
  // some returns true if at least one element passes the test, while every returns true only if all elements pass the test.
  // If some finds an element that passes the test, it stops and returns true immediately. Similarly, if every finds an element that fails the test, it stops and returns false immediately.
  const validate = (formData) =>{
    const errorsData = {}
    //object.enteries se hume ek array mil jata hai key value pair ka
    Object.entries(formData).some(([key, value])=>{
      // console.log(key,value)
      // console.log(validationConfig[key]);
      validationConfig[key].forEach((rule)=>{
        console.log(rule)
        // required mai && lgakr likha hua hai asli rule to
        if(rule.required && !value){
          errorsData[key]= rule.message
          return true
        
        }
        if(rule.minLength && value.length < 5){
          errorsData[key]= rule.message
          return true
        }

        if(rule.pattern && !rule.pattern.test(value)){
          errorsData[key]= rule.message
          return true
        }
      })
    })
    setErrors(errorsData)
    return errorsData
  }

  // const validate = (formData) => {
  //   const errorsData = {}

  //   if (!formData.title) {
  //     errorsData.title = 'Title is required'
  //   }

  //   if (!formData.category) {
  //     errorsData.category = 'Please Select a Category'
  //   }

  //   if (!formData.amount) {
  //     errorsData.amount = 'Amount is required'
  //   }

  //   setErrors(errorsData)
  //   return errorsData
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validateResult = validate(expense)

    if (Object.keys(validateResult).length) return

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ])
    setExpense({
      title: '',
      category: '',
      amount: '',
      email:''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      {/* <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange}
        />
        <p className='error'>{errors.title}</p>
      </div> */}
      <Input
         label="Title"
         id= "title"
         name="title"
         value ={expense.title}
         onChange={handleChange}
         error={errors.title}
      />
      {/* <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
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
        <p className='error'>{errors.category}</p>
      </div> */}
    
       <Select
         label="Category"
         id= "category"
         name="category"
         value ={expense.category}
         onChange={handleChange}
         options ={['Grocery','Clothes','Bills','Education','Medicine']}
         defaultOption = 'Select Category'
         error={errors.category}
      />
      {/* <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
        <p className='error'>{errors.amount}</p>
      </div> */}
      {/* using the customizable input tag just changing the parameters just like function
      helping in reusability. */}
      <Input
          label="Amount"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          error= {errors.amount}
        />
        <Input
         label="Email"
         id= "email"
         name="email"
         value ={expense.email}
         onChange={handleChange}
         error={errors.email}
      /> 
      <button className="add-btn">Add</button>
    </form>
  )
}
