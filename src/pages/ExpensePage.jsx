import React, { useState } from 'react';
import Button from '../components/Button';
import '../index.css'

const ExpensePage = () => {
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');
  const [expenseData, setExpenseData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle expense form submission here
    console.log('Expense:', expense);
    console.log('Description:', description);

    // Add the expense data to the expenseData state
    setExpenseData((prevExpenseData) => [
      ...prevExpenseData,
      { expense: parseFloat(expense), description },
    ]);

    // Reset the form after submission
    setExpense('');
    setDescription('');
  };

  return (
    <div className='container expense-container'>
      <h1>Expense Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="expense">Expense:</label>
          <input
            type="number"
            id="expense"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Add Expense</Button>
      </form>

      <h2>Expense Data:</h2>
      <ul className='expense-data'>
        {expenseData.map((item, index) => (
          <li key={index}>
            Expense: ${item.expense} | Description: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensePage;