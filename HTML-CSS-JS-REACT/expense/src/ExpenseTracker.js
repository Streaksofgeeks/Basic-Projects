import React from "react";
import { useState } from "react";

const ExpenseTracker = () => {
  const [input, setInput] = useState('')
  const [amount, setAmount] = useState('')
  const [expense, setExpense] = useState([])
  const addExpense = () => {
    if (input || amount) return;
    const newExpense = {
      id: expense.length + 1,
      title: input,
      amount: amount
    };
    setExpense([...expense, newExpense])
    setInput('')
    setAmount('')
  }

  const deleteExpense = (id) => {
    setExpense(expense.filer((expense) => expense.id !== id))
  }
  return (
    <div>
      <h2>Expense Tracker</h2>
      <div>
        <input type="text" placeholder="Expense"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type='number' placeholder="Amount"
          value={amount}
          onChange={(e) => setInput(e.target.value)} />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul className='expense-list'>{
        expense.map((expense) => (
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
            <button onClick={() =>
              deleteExpense(expense.id)
            }>Delete</button></li>

        ))



      }
      </ul>
    </div>
  )
}
export default ExpenseTracker;