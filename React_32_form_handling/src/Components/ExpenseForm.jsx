import React from 'react'
// ctrl+shift+l shortcut key for selecting all the select word
// jb bhi hum form mai create huae button pe click krte hai onsubmit event trigger hota hai
// e.prventDefault krne se humara page reload nhi hoga
export default function ExpenseForm({setExpenses}) {
  // bhut important hai
  // form mai input kiye huae value ko acess krna ka trika 
  const handleSubmit = (e) =>{
    e.preventDefault()
    // new FormData se hume ke object milega
    // const Formdata = new FormData(e.target)
    // const data = {}
    // console.log(Formdata)
    // aur phir data.values pe loop krke hum values ko acess kr skte hai
    // data.values mai values mai aane ke liye yh bhut jurrori hai form mai hr ek input ya select option mai
    // name input hona chahiye
    // for(const value of data.values()){
    //   console.log(value);
    // }
    // key aur value dono pair ke liye hume .values ke jgh .enteries krna hota hai
    // kyuki .enteries hume array de rhi hai to destructering kr skte hai
    // for(const [key,value] of Formdata.entries()){
    //   console.log(key,value);
    //   data[key] = value;
    // }
    // console.log(data)

     console.log(getFormData(e.target)); 
    //  yha pe expense ko update krenge aur kyuki hume previous data ko bhi rakhna hai to update krna pdega using previous state
    // previous hai jo utna plus something new
    // humne yha prevState ko update krke ek array mai convert kr diya hai aur jo data nyi id use hui use add krke update kr diya hai
    const expense = {...getFormData(e.target), id:crypto.randomUUID}
     setExpenses((prevState)=> [...prevState, expense])
    // add krne ke baad reset krne ke liye use krna hoga
    e.target.reset()
  }
  
  const getFormData = (form) =>{
    const formdata = new FormData(form)
    const data = {}
    for(const [key,value] of formdata.entries()){
      console.log(key,value);
      data[key] = value;
    }
    return data
  }

  return (
    <>
          <form  className="expense-form" onSubmit={handleSubmit}>
          <div  className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name='title'/>
          </div>
          <div  className="input-container">
            <label htmlFor="category">Category</label>
                <select id='category' name='category'>
                  <option value="" hidden>Select Category</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
                </select>
          </div>
          <div  className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name='amount' />
          </div>
          <button  className="add-btn">Add</button>
        </form>
    </>
  )
}
