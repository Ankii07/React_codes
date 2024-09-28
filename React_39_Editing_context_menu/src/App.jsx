import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  // kyuki hume expenseform aur expenseTable dono mai use krna hai useState ko dono ke parent yani
  // app component mai define krna hoga..
  const [editingRowId, setEditingRowId] = useState('')

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId = {editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable expenses={expenses} 
          setExpenses={setExpenses} 
          expense={expense}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;
