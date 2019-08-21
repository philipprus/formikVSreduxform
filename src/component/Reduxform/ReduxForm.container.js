import { connect } from "react-redux";
import ReduxForm from "./ReduxForm";
import React from 'react';
import { formSubmit, formSend, formSuccess, formPending } from "../../redux/actions";
import {reset} from 'redux-form';

const mapDispatchToProps = (dispatch) => {
      return {
            formSubmit: (data) => {
                  dispatch(formSubmit());
                  dispatch(formSend(data));
                  dispatch(formPending());
                  dispatch(formSuccess(data));
                  dispatch(reset('reduxForm'));
            },
      }

};


const ReduxformContainer = ({values, formSubmit}) => <ReduxForm onSubmit={ values => formSubmit(values) }/>


export default connect(null, mapDispatchToProps)(ReduxformContainer);