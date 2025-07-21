import classNames from 'classnames';
import { Field } from 'formik';
import React from 'react';

function InputFilters ({ name, value, label, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <label>
          <input
            type='radio'
            {...field}
            {...restProps}
            value={value}
            checked={field.value === value}
          />
          {label}
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </label>
      )}
    </Field>
  );
}

export default InputFilters;
