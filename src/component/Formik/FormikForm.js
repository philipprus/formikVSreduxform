import React from 'react';
import { withFormik, Field } from "formik";

export const renderField = ({
      field,
      form: {touched, errors },
      type = "text",
      label,
      ...props
}) => (
      <div>
            <label>{label}</label>
            <div>
                  <input {...field} type={type} placeholder={label} />
                  {touched[field.name] &&
                        errors[field.name] && <span>{errors[field.name]}</span>}
            </div>
      </div>
)


const FormikForm = props => {
      const {
            handleSubmit,
            handleReset,
            isValid,
            dirty
      } = props;
      return (
      <>
            <h2>
                  Formik Form
            </h2>
                  <form onSubmit={handleSubmit} onReset={handleReset}>
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
                        {/* {errors.firstName && touched.firstName && <span>{errors.firstName}</span>} */}
                        <div>
                              <button type="submit" disabled={!isValid}>Submit</button>
                              <button type="reset" disabled={!dirty}>
                                    Clear Values
                              </button>
                        </div>
                  </form>
      </>
      );
};


export default withFormik({
      mapPropsToValues: () => ({ firstName: '', lastName: '', email: '', age: ''}),

      validate: values => {
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
            return errors;
            },
            
      handleSubmit: (values, {resetForm, props}, ) => {
            const {formSubmit} = props;
            setTimeout(()=> {
                  formSubmit(values);
                  resetForm();
            }, 1000);
      },

      handleReset: () => {
           console.log("Form reset");
      },
      
      displayName: 'FormikForm'
})(FormikForm);