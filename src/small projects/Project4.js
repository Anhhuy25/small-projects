import React from 'react';
import AddTransaction from './components/project 4/AddTransaction';
import Balance from './components/project 4/Balance';
import Header from './components/project 4/Header';
import History from './components/project 4/History';
import IncomeExpenses from './components/project 4/IncomeExpenses';

function Project4() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <History />
        <AddTransaction />
      </div>
    </div>
  );
}

export default Project4;