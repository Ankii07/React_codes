import React, { useState } from 'react'
// agr object return krna ho arrow function ki dwara ek single line mai se to to () ka use krna hoga
export default function ExpenseForm({ setExpenses }) {
  // const [title, setTitle] = useState('')
  // const [category, setCategory] = useState('')
  const [expenses, setExpense] = useState(
    {
      id:'',
      title:'',
      category:'',
      amount:'',
    }
  )
  const handleSubmit = (e) => {
    e.preventDefault()
    // const expense = { ...getFormData(e.target), id: crypto.randomUUID() }
    // setExpenses((prevState) => [...prevState, expense])
    // e.target.reset()

    // jaise hi type kiya hai waise hi state updated hai direct state ka use krke data access kr skte hai form se
    // console.log({title, category, amount});
    
    // const expense={ ...{title, category, amount}, id: crypto.randomUUID() }
    // const expense={title, category, amount, id: crypto.randomUUID() }

    // // setExpenses([{title, category, amount}])
    //                   //jo previous state + expense ko render kre
    // setExpenses((prevState)=> [...prevState, expense])
    // reset se humara state change nhi hoga wh to sirf dom ko reset krega iska mtlb data exist 
    // kregi submit button pe click krne ke baad bhi
    // e.target.reset()

    // setExpenses((prevState)=>[...prevState, {...expenses, id:crypto.randomUUID()}])
    
    // yha pe sbhi state ko empty set krna hoga jisse ki wh reset ho jayenge
    // setTitle('')
    // setCategory('')
    // setAmount('')
    setExpenses((prevState) => [
      ...prevState,
      { ...expenses, id: crypto.randomUUID() },
    ])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }

  // const getFormData = (form) => {
  //   const formData = new FormData(form)
  //   const data = {}
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value
  //   }
  //   return data
  // }

  // jb hum react mai input value attribute mai khuch value by default set kr dete hai wh set
  // hokr dikhega usinput tag mai aur jb us tag mai hum type krenge to type nhi hoga
  // agr yhi same kaam agr javascript mai kiya hota to set hone ke bawjood hum type kr skte the..

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input 
        id="title" 
        name="title" 
        value={expenses.title} 
        // yha pe kya ho rha hai ki hr ek chane pe title input pe ek nyi value set hogi
        // aur hr bar set hogi to page render hogi isko khte hai oneway databinding aur isi ko khte hai unidirectional dataflow

        //oneway databinding ka yh concept hai ki jb jbhi data update hoga tbhi humari ui update hogi
        // ui humare data ko update nhi kr skte
        onChange={(e)=>setTitle((prevState)=>({...prevState , title: e.target.value}))}/>

      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={expenses.category} onChange={(e)=>setTitle((prevState)=>({...prevState , category: e.target.value}))}>
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" value={expenses.amount} onChange={(e)=>setTitle((prevState)=>({...prevState , amount: e.target.value}))}/>
      </div>
      <button className="add-btn">Add</button>
    </form>
  )
}
