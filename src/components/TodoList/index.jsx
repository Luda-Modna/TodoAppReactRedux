import { connect } from 'react-redux';
import React from 'react';
import { deleteTodo, updateTask } from '../../store/slices/tasksSlice';
import classNames from 'classnames';
import styles from './../../pages/projectPage/ProjectPageStyle.module.sass';

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
    <ul className={styles.tasksList}>
      {filteredTasks.map(t => {
        const isOverdue = new Date(t.deadline) < now;

        const styleName = classNames(styles.task, {
          [styles.done]: t.isDone,
          [styles.overdue]: t.isDone && isOverdue,
          [styles.notDone]: !t.isDone && !isOverdue,
          [styles.notOverdue]: !t.isDone && isOverdue,
        });

        return (
          <li key={t.id} className={styleName}>
            <div className={styles.taskRow}>
              <label>
                <input
                  type='checkbox'
                  checked={t.isDone}
                  onChange={({ target: { checked } }) => {
                    isChangeDone(t.id, checked);
                  }}
                />
              </label>
              <p className={styles.taskInfo}>{t.text} </p>
            </div>
            <p className={styles.taskInfo}>Deadline: {t.deadline}</p>
            <button className={styles.deleteButton} onClick={() => deleteTodoTask(t.id)}>Delete todo</button>
          </li>
        );
      })}
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
