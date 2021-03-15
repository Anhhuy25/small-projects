import React from 'react';
import { useGlobalContext } from './context';

function Balance() {
  const { transactions } = useGlobalContext();

  const total = transactions
    .map(item => item.amount)
    .reduce((initialValue, item) => {
      return initialValue += item;
    }, 0)
    .toFixed(2)

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}

export default Balance;