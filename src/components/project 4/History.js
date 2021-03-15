import React from 'react';
import { useGlobalContext } from './context';

function History() {
  const { transactions, deleteTransaction } = useGlobalContext();

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(item => {
          const { id, text, amount } = item;
          const sign = `${amount < 0 ? '-' : '+'}`;

          return (
            < li className={`${amount < 0 ? 'minus' : 'plus'}`} key={id} >
              {text} < span > {sign}${Math.abs(amount)}</span>
              <button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
            </li>
          );
        })}
      </ul>
    </div >
  );
}

export default History;