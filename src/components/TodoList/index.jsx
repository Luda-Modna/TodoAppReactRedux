import { connect } from 'react-redux';
import React from 'react';

function TodoList ({ tasks }) {
  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}>{JSON.stringify(t.text)}</li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ tasksList }) => tasksList;

export default connect(mapStateToProps)(TodoList);
