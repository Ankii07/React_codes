import React, { useState } from 'react'
import { useFilter } from '../hooks/useFilter'
// The error you're encountering is due to a mismatch between the way you're importing the ContextMenu component 
// and the way it is being exported in the ContextMenu.jsx file.
// Issue:
// You're trying to import ContextMenu as a named export in ExpenseTable.jsx, but in ContextMenu.jsx, you're exporting it as a default export.
// import {ContextMenu} from '../components/ContextMenu'
import ContextMenu from '../components/ContextMenu'

// contextmenu ek event hai jaise ki hai click,onchange,mousenter, mouseLeave, resize, e.t.c
// context menu trigger hota hai jb hum right click krte hai screen pe..

// kyuki hum table ke row ko delete krna chah rhe hai to table ke row pe laga denge..

// ctrl+ shift+ p search panel se reload kr skte hai
export default function ExpenseTable({ expenses, setExpenses}) {
  const [filteredData, setQuery] = useFilter(expenses, (data) => data.category)
  // yha pe chahe to {} empty object na pass krke usme initially left aur right ko 0 set krke pass kr skte hai
  const [MenuPosition, setMenuPosition] = useState({})
  // ek rowid ka usesate bna lenge jo change in the row id ka dekh bhal krega
  const [rowId, setRowId] = useState('')
  const total = filteredData.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  )

  return (
    <>
    {/* name of prop should be same in the files  */}
    {/* kyuki hume context menu se pta chlega kon sa row delete krwana hai with the help  of its id us id jo milegi usko
    use krke filter krke expenses ko set kr denge.. */}
    <ContextMenu menuPosition={MenuPosition} setMenuPosition={setMenuPosition} setExpenses = {setExpenses} rowId={rowId}/>
    <table className="expense-table"  
    // onContextMenu={(e) =>{
    //   // isse reload nhi hoga page.
    //   // e.preventDefault();
    //   console.log(e)
    // }}
    // table pe khi pe click krne se jo context menu khuli hui hai wh bnd ho jayegi kyuki setmenu position empty set ho jayegi 
    // kyuki hume uspe return phle lgaya hua hai isiliye wha se return ho jayega..
    onClick={()=> setMenuPosition({})}
    >
      <thead>
        <tr>
          <th>Title</th>
          <th>
            <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
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
        {filteredData.map(({ id, title, category, amount }) => (
          <tr key={id}
            onContextMenu={(e) =>{
            // isse reload nhi hoga page.
            // by default jo context menu set hai wh nhi krana hai..
            e.preventDefault();
            // isse se hume yh pta chalega ki right click kis jgh pe kiya hai
            // yha se jo values milegi usko pass kr denge context menu ke css file mai aur position 
            // absolute krke aur left right krwa ke usko wha pe move krwa denge..
            // console.log(e.clientX, e.clientY)
                                    //+4px
            setMenuPosition({left: e.clientX+4, top: e.clientY+4})
            //  console.log(e)
            setRowId(id)
           }}
           
          >
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
    </>
  )
}
