import React from 'react';
import { useGlobalContext } from './context';

function TodoList() {
  const { removeTodo, checkTodo, filterStatus } = useGlobalContext();

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterStatus.map(todo => {
          const { id, title, completed } = todo;
          return (
            <div key={id} className="todo">
              <li className={`todo-item ${completed ? 'completed' : ''}`}>{title}</li>
              <button className="complete-btn" onClick={() => checkTodo(id)}>
                <i className="fas fa-check"></i>
              </button>
              <button className="trash-btn" onClick={() => removeTodo(id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default TodoList;