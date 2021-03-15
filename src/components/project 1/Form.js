import React from 'react';
import { useGlobalContext } from './context'

function Form() {
  const { name, setName, todos, setTodos, setStatus } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: new Date().getTime().toString(),
        title: name,
        completed: false
      }
    ])
    setName('')
  }
  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="todo-button"
        type="submit"
        onClick={handleSubmit}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={(e) => setStatus(e.target.value)} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;