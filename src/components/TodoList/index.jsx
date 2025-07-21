import { connect } from 'react-redux';
import React from 'react';
import { deleteTodo, updateTask } from '../../store/slices/tasksSlice';

function TodoList ({ tasks, status, overdue, deleteTodoTask, updateTodoTask }) {
  const now = new Date();

  const isChangeDone = (id, checked) => {
    updateTodoTask(id, { isDone: checked });
  };

  const filteredTasks = tasks.filter(task => {
    const isCompleted = task.isDone;
    const isOverdue = new Date(task.deadline) < now;

    if (status === 'completed' && !isCompleted) return false;
    if (status === 'incomplete' && isCompleted) return false;

    if (overdue === 'overdue' && !isOverdue) return false;
    if (overdue === 'notOverdue' && isOverdue) return false;

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

const mapStateToProps = ({ tasksList, filter: { status, overdue } }) => ({
  ...tasksList,
  status,
  overdue,
});

const mapDispatchToProps = dispatch => ({
  deleteTodoTask: id => dispatch(deleteTodo(id)),
  updateTodoTask: (id, data) => dispatch(updateTask({ id, data })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
