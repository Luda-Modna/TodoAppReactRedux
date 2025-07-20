import { connect } from 'react-redux';
import React from 'react';
import { deleteTodo, updateTask } from '../../store/slices/tasksSlice';

function TodoList ({ tasks, deleteTodoTask, updateTodoTask }) {
  const isChangeDone = (id, checked) => {
    updateTodoTask(id, { isDone: checked });
  };
  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}>
          <label>
            <input
              type='checkbox'
              checked={t.isDone}
              onChange={({ target: { checked } }) => {
                isChangeDone(t.id, checked);
              }}
            />
          </label>
          <p>{t.text} </p>
          <p>Deadline: {t.deadline}</p>
          <button onClick={() => deleteTodoTask(t.id)}>Delete todo</button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ tasksList }) => tasksList;

const mapDispatchToProps = dispath => ({
  deleteTodoTask: id => dispath(deleteTodo(id)),
  updateTodoTask: (id, data) => dispath(updateTask({ id, data })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
