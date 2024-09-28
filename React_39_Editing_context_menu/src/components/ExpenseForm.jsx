import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function ExpenseForm({expense, setExpense, setExpenses,editingRowId,setEditingRowId}) {
  // ab hume krna hai editing uskeliye expense ki values ko set krwana hoga expensetable wale file mai
  // aur kyuki expense wala usestate defined hai expense form mai to uske directly pass nhi kr skte isk bhai ko yani expenseTable wale file mai
  // isiliey is state ko indono ke baap yani inke parents mai(App.jsx) define krna hoga jisse ki yh dono use kr paye..
  // isi cheez ko bolte hai state uplifting..
  // const [expense, setExpense] = useState({
  //   title: '',
  //   category: '',
  //   amount: '',
  // })

  const [errors, setErrors] = useState({})

  const validationConfig = {
    title: [
      { required: true, message: 'Please enter title' },
      { minLength: 5, message: 'Title should be at least 5 characters long' },
    ],
    category: [{ required: true, message: 'Please select a category' }],
    amount: [{ required: true, message: 'Please enter an amount' ,
    },
    {pattern: /^[-+]?(\d+(\.\d*)?|\.\d+)$/, message: 'Please Enter a valid amount'}
  ],
  }
   
  // 6+ parseInt('lkdf) => NaN
  //parseInt('lkdf) =>NAN
  // parseInt('100') => 100
  // parseInt('dfg100sed') => NAN
  // parseInt('100sdfdf') => 100
  const validate = (formData) => {
    const errorsData = {}

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message
          return true
        }

        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message
          return true
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message
          return true
        }
      })
    })

    setErrors(errorsData)
    return errorsData
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validateResult = validate(expense)

    if (Object.keys(validateResult).length) return

    if(editingRowId){
      setExpenses((prevState)=>{
        // yha bina return ke run kiya to error aayega kyuki jb array pass hi nhi hoga error aayega prevstate is not iteratable..
        return prevState.map((prevExpense)=>{
          if(prevExpense.id === editingRowId){
            return {...expense, id: editingRowId}
          }
          return prevExpense
        })
      })
      setEditingRowId('')
      setExpense({
        title: '',
        category: '',
        amount: '',
      })
      // aage badhne ki jurrort nhi yhi se laut jao..
      return
    }

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

  // array pe jb hum map krte hai to wh sirf wh modified element deta hai as pre condintion defined

  const handleChange = (e) => {
    const { name, value } = e.target
    // if(name === 'amount'){
      // yh number ke alawa khuch type krne bhi nhi dega.
  //     if(/^[-+]?(\d+(\.\d*)?|\.\d+)$/.test(value)){
  //   setExpense((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }))
  // }
  //   return
  // }
  setExpense((prevState) => ({
    ...prevState,
    [name]: value,
  }))
    setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
        defaultOption="Select Category"
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      {/* kyuki initialy editing rowId ('')empty string se set hai to jo ki falsy value hai is add rhega aur jaise hi truthy value se set 
      ho jayega wh true set ho jayega save se set ho jayega.*/}
      <button className="add-btn">{editingRowId ? 'Save': 'Add'}</button>
    </form>
  )
}
