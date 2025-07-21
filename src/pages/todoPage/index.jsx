import React from 'react';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import Filters from '../../components/Filters';
import Weather from '../../components/Weather';

function TodoPage () {
  return (
    <>
      <TodoForm />
      <Filters />
      <TodoList />
      <Weather />
    </>
  );
}

export default TodoPage;
