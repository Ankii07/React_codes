import React, { useState } from 'react'
import { useFilter } from '../hooks/useFilter'
import ContextMenu from './ContextMenu'

export default function ExpenseTable({
  expenses,
  setExpense,
  setExpenses,
  setEditingRowId,
}) {
  const [filteredData, setQuery] = useFilter(expenses, (data) => data.category)
  const [menuPosition, setMenuPosition] = useState({})
  const [rowId, setRowId] = useState('')
  // jis trah se hum do trike se setstate krke kr skte hai phla to direct value dekr aur dusra ek function define krke jisme jadatr hum 
  // hum previous state ke bare mai kaam krte hai..
  // usi trah hum useState ko initialize bhi kr skte hai..
  // agr hum usestate ko ek callback function se define kre to to wh usestate uske call back function ke return value se initialize ho jayega..
  // isiliye niche hum jb ek call back function se initialize kr diye hai uska return value to undefine hai isiliye hum jb console kr rhe hai call back ko to undefine de rha..
  // is cheez ko solve krne ke liye hume aisa krna hoga ki call back bhi ek function hi define kre isiliye function ko thora modify krna hoga..

  // const [sortCallback, setSortCallback] = useState(()=>{})
    // yha pe define kre console nhi kra skte yha hoisting nhi ho rhi..
    // console.log(sortCallback); //undefined output
 
    const [sortCallback, setSortCallback] = useState(() => () => {})
 
  const total = filteredData.reduce(
    (accumulator, current) => accumulator + parseInt(current.amount),
    0
  )
   
  // [3,3,5,3,2,5,3,4].sort() //The default sorting order is based on converting the elements into strings 
                               //and comparing their sequences of UTF-16 code unit values.

  //  [3,3,5,3,2,5,3,4].sort((a-b)=> a-b )  //sorts on ascending order

  // [3,3,5,3,2,5,3,4].sort((a-b)=> b-a ) //sorts on descendign order
  // yh actual array ko hi sort krke return krta hai

  console.log('rendering');

  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setExpense={setExpense}
        setMenuPosition={setMenuPosition}
        expenses={expenses}
        setExpenses={setExpenses}
        rowId={rowId}
        setEditingRowId={setEditingRowId}
      />
      <table className="expense-table" onClick={() =>{ 
        // bina matlab ke rendering ko rokne ke liye....
        if(menuPosition.left)
        setMenuPosition({})
        }}>
        <thead>
          <tr>
          <th className="amount-column">
              <div>
                <span>Title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={(e)=>{
                    // yha jo set ho rha hai purani jo value thi whi set ho rhi hai kyuki .sort to actual array ko hi sort krta hai..
                    // phir bhi yha update hua dikh rha hai
                    // kyuki jb hum arrow pe click krte hai to table pe bhi click hota hai
                    // aur table pe onclick pe humne ek event lga rha hai set hone ka jha hum set kr rhe hai menuposition jiske karan pura ka
                    // pura component render ho ja rha hai aur updated array bhi jo ki sort ke karan hua tha wh dikh rha tha..
                    // pr agr wh onclick event hta de to wh component render nhi hoga aur updated values nhi dikhengi kyuki actual array update hua hai change nhi hua hai
                    // aur kyuki usestate value change hone pe hi render krta hai isiliye nhi dikhta screen pe sort hone ke wabjood

                    // yha jo click kr rhe hai bahar na jaye..bahr click nhi jayega yani table pe click nhi hoga aur uska onclick event trigger nhi hoga aur component render nhi
                    // hoga uske wah se..
                    // e.stopPropagation();

                    // shi se kaam krwane ke liye ek nya array pass krwana hoga..
                    // ek nya array bnane ke liye spread operator ka use kr skte hai..
                    // setExpenses((prevState) => [...prevState.sort((a,b) => a.amount - b.amount)])
                    
                    // yha pe ek dikkat yh aayegi kyuki setcallback function ki return value se set hogi yha to return value to ek actual value hogi puri function hogi nhi 
                    // is cheez se bachne ke liye ek aise function bnayega jo yh callback ko return kre..
                    // setSortCallback((a,b) => a.amount - b.amount)
                    setSortCallback(() => (a,b)=> a.title.localeCompare(b.title))


                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={(e)=>{
                    // e.stopPropagation();
                    // ek nya array bnane ke liye spread operator ka use kr skte hai..
                    // yha pe aise krne se dikkat kya hai ki aise krne se humara actual expense modify ho ja rha hai aur agr previous expense pe jana chahe to nhi ja skte isiliye khuch krna pdega iska.
                    //jb hum is trah se krte hai to bhut hi humare pass freedom hota hai chahe to jaise phle tha waise kr skte hai..
                    // kyuki yha pe hum actual state change nhi kr rhe hai yha pe hum bas ek function change kr rhe hai jo yha pe sort kr rha hai..
                    // aur agr hum function mai khuch bhi return nhi krwate hai to wh as it is return ho jata hai pura..
                    // setExpenses((prevState) => [...prevState.sort((a,b) => b.amount - a.amount)])
                    
                    setSortCallback(() =>(a,b) => b.title.localeCompare(a.title))

                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
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
                  onClick={(e)=>{
                    // yha jo set ho rha hai purani jo value thi whi set ho rhi hai kyuki .sort to actual array ko hi sort krta hai..
                    // phir bhi yha update hua dikh rha hai
                    // kyuki jb hum arrow pe click krte hai to table pe bhi click hota hai
                    // aur table pe onclick pe humne ek event lga rha hai set hone ka jha hum set kr rhe hai menuposition jiske karan pura ka
                    // pura component render ho ja rha hai aur updated array bhi jo ki sort ke karan hua tha wh dikh rha tha..
                    // pr agr wh onclick event hta de to wh component render nhi hoga aur updated values nhi dikhengi kyuki actual array update hua hai change nhi hua hai
                    // aur kyuki usestate value change hone pe hi render krta hai isiliye nhi dikhta screen pe sort hone ke wabjood

                    // yha jo click kr rhe hai bahar na jaye..bahr click nhi jayega yani table pe click nhi hoga aur uska onclick event trigger nhi hoga aur component render nhi
                    // hoga uske wah se..
                    // e.stopPropagation();

                    // shi se kaam krwane ke liye ek nya array pass krwana hoga..
                    // ek nya array bnane ke liye spread operator ka use kr skte hai..
                    // setExpenses((prevState) => [...prevState.sort((a,b) => a.amount - b.amount)])
                    
                    // yha pe ek dikkat yh aayegi kyuki setcallback function ki return value se set hogi yha to return value to ek actual value hogi puri function hogi nhi 
                    // is cheez se bachne ke liye ek aise function bnayega jo yh callback ko return kre..
                    // setSortCallback((a,b) => a.amount - b.amount)
                    setSortCallback(() => (a,b) => a.amount - b.amount)


                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={(e)=>{
                    // e.stopPropagation();
                    // ek nya array bnane ke liye spread operator ka use kr skte hai..
                    // yha pe aise krne se dikkat kya hai ki aise krne se humara actual expense modify ho ja rha hai aur agr previous expense pe jana chahe to nhi ja skte isiliye khuch krna pdega iska.
                    //jb hum is trah se krte hai to bhut hi humare pass freedom hota hai chahe to jaise phle tha waise kr skte hai..
                    // kyuki yha pe hum actual state change nhi kr rhe hai yha pe hum bas ek function change kr rhe hai jo yha pe sort kr rha hai..
                    // aur agr hum function mai khuch bhi return nhi krwate hai to wh as it is return ho jata hai pura..
                    // setExpenses((prevState) => [...prevState.sort((a,b) => b.amount - a.amount)])
                    
                    setSortCallback(() => (a,b) => b.amount - a.amount)

                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
        {/* kyuki humne arrow ke click krne pe different function dalana tha to humne call back ko thori dynamic banayi hai using callback use state
          yha pe expense value ko nhi balki ki filtered data ko sort kr rhe hai dynamically expense data ko to chhu bhi nhi rhe.. */}
          {filteredData.sort(sortCallback).map(({ id, title, category, amount }) => (
            <tr
              key={id}
              onContextMenu={(e) => {
                e.preventDefault()
                setMenuPosition({ left: e.clientX + 4, top: e.clientY + 4 })
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
            <th className='clear-short' onClick={()=>{
              // aur agr hum function mai khuch bhi return nhi krwate hai to wh as it is return ho jata hai pura..
              setSortCallback(() => () => {})
            }}>Clear Sort</th>
            <th>₹{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  )
}
