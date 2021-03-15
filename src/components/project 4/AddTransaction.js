import React from 'react';
import { useGlobalContext } from './context';

function AddTransaction() {
  const { text, setText, amount, setAmount, addTransaction } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '' || amount === '') {
      return '';
    }
    setText('')
    setAmount('')
    addTransaction()
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;