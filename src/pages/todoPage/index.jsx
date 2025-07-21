import React from 'react';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import Filters from '../../components/Filters';

function TodoPage () {
  return (
    <>
      <TodoForm />
      <Filters />
      <TodoList />
    </>
  );
}

export default TodoPage;
