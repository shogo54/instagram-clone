import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Formik, Form, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';
import AuthContainer from '../../components/AuthContainer';
import AuthSwitch from '../../components/AuthSwitch';
import Button from '../../components/Button';
import FacebookButton from '../../components/FacebookButton';
import FormContainer from '../../components/FormContainer';
import GetApp from '../../components/GetApp';
import Link from '../../components/Link';
import OrBox from '../../components/OrBox';
import TextField from '../../components/TextField';
import { auth } from '../../data/firebase';
import { loginErrorMessages as errorMessages } from '../../data/error-message';
import { loginValidationSchema } from '../../data/validation';
import { ILoginFormValues as IFormValues } from '../../modules/form-values';

const LoginForm: React.FC = () => {
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
    <AuthContainer>
      <FormContainer>
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
              <Form style={{ width: '100%' }}>
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
                <Button
                  type='submit'
                  disabled={!(dirty && isValid) || isSubmitting}
                >
                  Log in
                </Button>
              </Form>
            );
          }}
        </Formik>
        <OrBox />
        <FacebookButton currPage='login' />
        {errorMessage && <Typography>{errorMessage}</Typography>}
        <Link to='/' style={{ marginTop: 12 }}>
          <Typography variant='subtitle2' color='secondary'>
            Forgot your password?
          </Typography>
        </Link>
      </FormContainer>
      <AuthSwitch dest='signup' />
      <GetApp />
    </AuthContainer>
  );
};

export default LoginForm;
