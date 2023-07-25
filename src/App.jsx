import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';

const App = () => {
  return (
    <Router>
      <nav className='navbar'>
        <ul className="link-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expenses" element={<ExpensePage />} />
      </Routes>
    </Router>
  );
};

export default App;