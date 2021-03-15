import React, { useContext, useState } from 'react';
import { useEffect } from 'react';


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterStatus, setFilterStatus] = useState([]);

  const removeTodo = (id) => {
    const removeItem = todos.filter(todo => todo.id !== id);
    setTodos(removeItem)
  }

  const checkTodo = (id) => {
    const checkItem = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    });
    setTodos(checkItem)
  }

  useEffect(() => {
    switch (status) {
      case 'completed':
        setFilterStatus(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterStatus(todos.filter(todo => todo.completed === false))
        break;
      case 'all':
        setFilterStatus(todos)
        break;
    }

  }, [status, todos])

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        todos,
        setTodos,
        removeTodo,
        checkTodo,
        setStatus,
        filterStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }

