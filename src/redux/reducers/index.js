import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import * as types from "../actionTypes";

const formHandler = (state = {}, action) => {
      switch (action.type) {
            case types.FORM_SUBMIT:
                  return state;
            case types.FORM_SEND:
                  return {
                        ...state,
                        data: action.data,
                        status: "loading"
                  };
            case types.FORM_PENDING:
                  return {
                        ...state,
                        status: "loading"
                  };
            case types.FORM_SUCCESS: 
                  return {
                        ...state,
                        data: action.data,
                        status: "idle"
                  }
            case types.FORM_FAILED:
                  return {
                        ...state,
                        errors: action.errors,
                        status: "error"
                  }
            default: 
                  return state;
      }

}

export default combineReducers({formHandler, form: formReducer });
