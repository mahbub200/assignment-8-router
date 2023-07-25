import React, { useState } from 'react';
import Button from '../components/Button';
import '../index.css'

const IncomePage = () => {
  const [income, setIncome] = useState('');
  const [description, setDescription] = useState('');
  const [incomeData, setIncomeData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle income form submission here
    console.log('Income:', income);
    console.log('Description:', description);

    // Add the income data to the incomeData state
    setIncomeData((prevIncomeData) => [
      ...prevIncomeData,
      { income: parseFloat(income), description },
    ]);

    // Reset the form after submission
    setIncome('');
    setDescription('');
  };

  return (
    <div className="container income-container">
      <h1>Income Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="income">Income:</label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
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
        <Button type="submit">Add Income</Button>
      </form>

      <h2>Income Data:</h2>
      <ul className="income-data">
        {incomeData.map((item, index) => (
          <li key={index}>
            Income: ${item.income} | Description: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomePage;