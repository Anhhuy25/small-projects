import React from 'react';
import { useGlobalContext } from './context';

function IncomeExpenses() {
  const { transactions } = useGlobalContext();

  const income = transactions
    .map(item => item.amount)
    .filter(item => item >= 0)
    .reduce((initialValue, totalIncome) => {
      return initialValue += totalIncome;
    }, 0)
    .toFixed(2)

  const expense = transactions
    .map(item => item.amount)
    .filter(item => item < 0)
    .reduce((initialValue, totalExpense) => {
      return initialValue += totalExpense;
    }, 0)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;