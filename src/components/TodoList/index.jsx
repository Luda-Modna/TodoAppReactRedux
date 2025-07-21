import { connect } from 'react-redux';
import React from 'react';
import { deleteTodo, updateTask } from '../../store/slices/tasksSlice';

function TodoList ({ tasks, filter, deleteTodoTask, updateTodoTask }) {
  const isChangeDone = (id, checked) => {
    updateTodoTask(id, { isDone: checked });
  };
  console.log('Фільтр:', filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.isDone;
    if (filter === 'incomplete') return !task.isDone;
    return true;
  });

  return (
    <ul>
      {filteredTasks.map(t => (
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

const mapStateToProps = ({ tasksList, filter}) => ({
  ...tasksList,
  filter,
});

const mapDispatchToProps = dispatch => ({
  deleteTodoTask: id => dispatch(deleteTodo(id)),
  updateTodoTask: (id, data) => dispatch(updateTask({ id, data })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
