import { connect } from "react-redux";
import FormikForm from "./FormikForm";
import { formSubmit, formSend, formPending, formSuccess } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => {
      return {
            formSubmit: (data) => {
                  dispatch(formSubmit());
                  dispatch(formSend(data));
                  dispatch(formPending());
                  dispatch(formSuccess(data));
            },
      }

};


const FormikFormContainer = connect(null, mapDispatchToProps)(FormikForm);

export default FormikFormContainer;