import * as types from "./actionTypes";


export const formSubmit = () => ({
      type: types.FORM_SUBMIT
});

export const formSend = (data) => ({
      type: types.FORM_SEND,
      data
});

export const formPending = () => ({
      type: types.FORM_PENDING
})

export const formSuccess = (data) => ({
      type: types.FORM_SUCCESS, 
      data
});

export const formClear = () => ({
      type: types.FORM_CLEAR
});

export const formFailed = (errors) => ({
      type: types.FORM_FAILED,
      errors
});
