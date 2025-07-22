import React from 'react';
import TodoForm from './../TodoForm';
import TodoList from './../TodoList';
import styles from './../../pages/projectPage/ProjectPageStyle.module.sass'

function TodoComponent () {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoComponent;
