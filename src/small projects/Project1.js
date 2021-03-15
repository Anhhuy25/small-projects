import React from 'react';
import Form from '../components/project 1/Form';
import TodoList from '../components/project 1/TodoList';

function Project1() {
  return (
    <div className="App">
      <header>
        <h1>Huy's To do List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default Project1;
