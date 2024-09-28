import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'
import { useLocalStorage } from '../hooks/useLocalStorage'

function App() {
  const [expense, setExpense] = useLocalStorage('expense',{
    title: '',
    category: '',
    amount: '',
  })
  const [expenses, setExpenses] = useLocalStorage('expenses',expenseData)
  const [editingRowId, setEditingRowId] = useLocalStorage('editingRowId','')
  
  // const [localData, setLocalData] = useLocalStorage('myNum', [1,2,3])
  // console.log(localData);
  // console.log(setLocalData);
  return (
    <main>
      <h1 
      // onClick={()=>{
      //   // yha pe state ko update kr de rhe hai iske wajh se localdata bhi update ho ja rha hai
      //   // isiliye h2 mai hume updated value mil rhi hai..
      //   // setLocalData([4,5,6])
      //   setLocalData((prevState)=>[...prevState,4,5,6])
      // }}
      >Track Your Expense</h1>
      {/* <h2>{localData.join(', ')}</h2> */}
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpense={setExpense}
          setExpenses={setExpenses}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  )
}

export default App
