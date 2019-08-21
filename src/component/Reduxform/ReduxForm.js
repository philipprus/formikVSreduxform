import React from 'react';
import { Field, reduxForm } from 'redux-form';



const validate = values => {
      const errors = {};
      if(!values.firstName) {
            errors.firstName = 'Required';
      } else if (values.firstName.length > 5) {
            errors.firstName = 'Must be 15 characters or less';
      }
      if (!values.email) {
            errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
      }
      if(!values.age) {
            errors.age = 'Required';
      } else if (isNaN(Number(values.age))) {
            errors.age = 'Mut be a number'
      } else if (Number(values.age)< 18) {
            errors.age = 'Sorry, you must be at least 18 years old'
      }
      return errors
}

const warn = values => {
      const warnings = {};
      if (values.age < 19 ) {
            warnings.age = 'You seem a bit young...'
      }
      return warnings;
}

export const renderField = ({
      input, label, type, meta: {touched, error, warning }
}) => (
      <div>
            <label>{label}</label>
            <div>
                  <input {...input} placeholder={label} type={type} />
                  {touched &&
                        ((error && <span>{error}</span>) ||
                              (warning && <span>{warning}</span>))}
            </div>
      </div>
)

const ReduxForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
      <>
            <h2>
                  Redux Form
            </h2>
            <form onSubmit={handleSubmit}>
                  <Field
                        name="firstName"
                        component={renderField}
                        type="text"
                        label="First Name"
                  />
                  <Field
                        name="lastName"
                        component={renderField}
                        type="text"
                        label="Last Name"
                  />
                  <Field
                        name="email"
                        component={renderField}
                        type="email"
                        label="Email"
                  />
                  <Field
                        name="age"
                        id="age"
                        component={renderField}
                        label="Age"
                        type="number"
                  />
                  <div> 
                  <button type="submit" disabled={pristine || submitting}>Submit</button>
                  <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                  </button>
                  </div>
            </form>
      </>
  );
};

export default reduxForm({
  form: 'reduxForm', 
  validate, 
  warn 
})(ReduxForm);
