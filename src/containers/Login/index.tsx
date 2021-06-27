import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { Formik, Form, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';
import AuthSwitch from '../../components/AuthSwitch';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { auth } from '../../data/firebase';
import { loginErrorMessages as errorMessages } from '../../data/error-message';
import { loginValidationSchema } from '../../data/validation';
import { ILoginFormValues as IFormValues } from '../../modules/form-values';

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const history = useHistory();

  // objects needed for Formik
  const initialValues: IFormValues = {
    userId: '',
    password: '',
  };

  const loginUser = async (data: IFormValues, resetForm: Function) => {
    try {
      if (data) {
        console.log(data);
        await auth.signInWithEmailAndPassword(data.userId, data.password);
        resetForm({});
        history.push('/');
      }
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case 'auth/user-not-found':
          setErrorMessage(errorMessages.userNotFound);
          break;
        case 'auth/wrong-password':
          setErrorMessage(errorMessages.wrongPassword);
          break;
        default:
          setErrorMessage(errorMessages.general);
      }
    }
  };

  const onSubmit = (values: IFormValues, actions: any) => {
    loginUser(values, actions.resetForm);
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 500);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={loginValidationSchema}
      >
        {(props: FormikProps<IFormValues>) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isValid,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props;
          return (
            <Form>
              <TextField
                name='userId'
                id='form-user-id'
                label='Mobile Number or Email'
                value={values.userId}
                error={errors.userId && touched.userId ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                name='password'
                id='form-password'
                label='Password'
                value={values.password}
                error={errors.password && touched.password ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button type='submit' disabled={!(dirty && isValid) || isSubmitting}>
                Log in
              </Button>
            </Form>
          );
        }}
      </Formik>
      <div>Or</div>
      <div>
        <Button>Log in with Facebook</Button>
        {errorMessage && <Typography>{errorMessage}</Typography>}
        <Typography>Forgot your password?</Typography>
      </div>
      <AuthSwitch dest='signup' />
    </Container>
  );
};

export default Login;
