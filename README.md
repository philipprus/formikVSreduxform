# Redux-Form vs Formik

### Redux Form (https://redux-form.com/8.2.2/docs/gettingstarted.md/)

**Plus:**
- Use redux state
- Mixed and asynchronous verification is possible.
- For biggest form

**Minus**
- Size 27 kb
- The form state does not need to exist in the global store, after all, the form state is independent of other originals.
- You need to create a unique form of name (const) for redux state and remember about it. If the project is large, it may not be convenient

### Formik (https://jaredpalmer.com/formik/docs/overview)

** Plus **
- React official recommendation, it is said that the form can be created painlessly.
- Formik is a form library, Yup is a verification tool, and Fortik has a config "validationSchema" that can be used with Yup. When the validationSchema config is set, the error message returned by Yup can be automatically converted into an object. The key is The name of the field, and value is the error message.
- Size: 12 kb
- Not use redux for small form

** Minus **
- Not use redux for biggest form