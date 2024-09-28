import React from 'react'


export default function ContextMenu({menuPosition,setMenuPosition, setExpenses,rowId}) {
  // initially nhi dikhane ke liye....
  if(!menuPosition.left) return
  return (
    <div className="context-menu" style={menuPosition}>
      <div
      onClick={()=>{
        console.log('Editing')
        // yha pe jo dusre files mai setMenuPosition set hai using useState usko prop ki
        // help se pass krwa ke yha pe empty set kr rhe hai jisse ki dubara rendering ke time wh phle hi return ho jaye 
        // due to emptiness..
        setMenuPosition({})
      }}
      >Edit</div>
      <div
      onClick={()=>{
        // console.log('Deleting')
        // prevstate ek pura state hai expenses
        setExpenses((prevState) => prevState.filter(expenses => expenses.id !== rowId))
        setMenuPosition({})
      }}
      >Delete</div>
    </div>
  )
}
