import React, { useContext, useReducer } from 'react';
import { useState } from 'react';
import reducer from './reducer'


const initialState = {
  transactions: []
}
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE',
      payload: id
    })
  }

  const addTransaction = () => {
    dispatch({
      type: 'ADD',
      payload: {
        id: new Date().getTime().toString(),
        text,
        amount: +amount
      }
    })
  }

  return (
    <AppContext.Provider
      value={{
        text,
        setText,
        amount,
        setAmount,
        state,
        deleteTransaction,
        addTransaction,
        transactions: state.transactions
      }}
    >
      {children}
    </AppContext.Provider>
  );
}


const useGlobalContext = () => {
  return useContext(AppContext);
}


export { AppContext, AppProvider, useGlobalContext };