import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import expenseData from './expenseData'

function App() {
  const [expenses, setExpenses] = useState(expenseData)
  //  vite hume force krta hai ki hum apne file mai .jsx ka hi use kre .js ka use krenge to error dega
  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
      <ExpenseForm setExpenses={setExpenses}/>
      <ExpenseTable expenses={expenses}/>
      </div>
    </main>
    </>
  )
}

export default App
