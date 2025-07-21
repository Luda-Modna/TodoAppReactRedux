import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import React from 'react';
import { createToDo } from '../../store/slices/tasksSlice';
import { TODO_VALIDATION_SCHEMA } from '../../utils/validationSchemas';

function TodoForm ({ createNewTodo }) {
  const initialValue = {
    text: '',
    deadline: new Date().toISOString().split('T')[0],
  };

  const submitHandler = (values, { resetForm }) => {
    createNewTodo(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={submitHandler}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          <Field
            name='text'
            type='text'
            placeholder='Create a new todo...'
            autoFocus
          />
          <ErrorMessage name='text' component='div' />
        </label>
        <label>
          Deadline:
          <Field name='deadline' type='date' />
          <ErrorMessage name='deadline' component='div' />
        </label>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewTodo: data => dispatch(createToDo(data)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
