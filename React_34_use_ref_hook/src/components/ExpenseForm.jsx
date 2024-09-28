import React, { useEffect, useRef, useState } from 'react'
// import { createLogger } from 'vite';

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })
  // jb bhi hum state ko update krta hai humara component rerender krta hai pr useref mai nhi krta

  // useref jo hai jb hum koi value usme pass krte hai to wh ek object deta hai us object
  // ki ek property hoti hai current jiski value wh passed string se set ho jati..

  // useref ka use hum tb krte hai jb hume khuch aise value chahiye hoti hai ki jb us value ko update kre to humara component render na ho aur value bhi update ho jaye
  // pr aisa to hum simple sa variable bnakr bhi kr skte hai 
  // variable bnakr aur usko update krenge pr agr jb bhi render hoga variable apne initial value pe ho jayega
  // pr use ref us value ko yaad rkhega render aur render krte waqt whi dikhaye

  // ek ref mai alag alag ref ko reference nhi kr skte hai

  const myRef = useRef(1)
  let myNum = 1;
  // agr hume acess krna hai aur hume koi state update nhi krna to hum useeffect use kr skte hai
  // console.log(myRef);
  // useffect sbse last mai chalega aur jb tak ref ki value button ke reference se update ho chuki hogi
  // useEffect(()=>{
  //   console.log(myRef.current)
  //   myRef.current.style.background = 'red'
  // },[]) 

  const titleref = useRef()
  const categoryref = useRef()
  const  amountref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    // setExpenses((prevState) => [
    //   ...prevState,
    //   { ...expense, id: crypto.randomUUID() },
    // ])
    // setExpense({
    //   title: '',
    //   category: '',
    //   amount: '',
    // })

    // yha pe ref ke wajh se type krte waqt render nhi krta rhega ek baar submit button pe click
    // krke hi render krega aur kyuki ref updated value ko yaad rakhta hai wha se acess krke set kr skte hai

   console.log({
      title: titleref.current.value,
      category: categoryref.current.value,
      amount: amountref.current.value,
    })
     setExpenses((prevState) => [
      ...prevState,
      {
      title: titleref.current.value,
      category: categoryref.current.value,
      amount: amountref.current.value,
      id: crypto.randomUUID() 
    },
    ])

  }

  return (
    <>
    {/* <button
      onClick={()=>{
        myRef.current = myRef.current+1
        myNum = myNum+1
        console.log(myRef.current)
        console.log(myNum)
      }}
      // yha pe kya hoga ki jb yha compiler phuchega to phle jo myref ki value initialized thi usko
      // update kr dega button ke full reference ke sath,aur button ka dom de dega
      ref={myRef}
    >click</button> */}
    {/* <h1>myRef = {myRef.current}, myNum = {myNum}</h1> */}
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // value={expense.title}
          // onChange={(e) =>
          //   setExpense((prevState) => ({ ...prevState, title: e.target.value }))
          // }
          ref={titleref}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          // value={expense.category}
          // onChange={(e) =>
          //   setExpense((prevState) => ({
          //     ...prevState,
          //     category: e.target.value,
          //   }))
            
          // }
          // yha pe hum ref prop ka use krke dom pass kr rhe ref ki value mai 
          ref={categoryref}
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
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          // value={expense.amount}
          // onChange={(e) =>
          //   setExpense((prevState) => ({
          //     ...prevState,
          //     amount: e.target.value,
          //   }))
          // }
          
          ref={amountref}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
    </>
  )
}
