import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { Formik, Form, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';
import AuthSwitch from '../../components/AuthSwitch';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import { signupErrorMessages as errorMessages } from '../../data/error-message';
import { auth } from '../../data/firebase';
import { signupValidationSchema } from '../../data/validation';
import { ISignupFormValues as IFormValues } from '../../modules/form-values';

const Signup: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const history = useHistory();

  // objects needed for Formik
  const initialValues: IFormValues = {
    userId: '',
    fullName: '',
    userName: '',
    password: '',
  };

  const createUser = async (data: IFormValues, resetForm: Function) => {
    try {
      if (data) {
        console.log(data);
        await auth.createUserWithEmailAndPassword(data.userId, data.password);
        await auth.signInWithEmailAndPassword(data.userId, data.password);
        resetForm({});
        history.push('/');
      }
    } catch (error) {
      console.log(error);
      switch(error.code) {
        case 'auth/invalid-email': 
          setErrorMessage(errorMessages.invalidEmail);
          break;
        default: 
          setErrorMessage(errorMessages.general);
      }
    }
  };

  const onSubmit = (values: IFormValues, actions: any) => {
    createUser(values, actions.resetForm);
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 500);
  };

  return (
    <Container>
      <div>
        <Typography>Sign up to see photos and videos from your friends.</Typography>
        <Button>Log in with Facebook</Button>
      </div>
      <div>Or</div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signupValidationSchema}
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
                name="userId"
                id="form-user-id"
                label="Mobile Number or Email"
                value={values.userId}
                error={errors.userId && touched.userId ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                name="fullName"
                id="form-full-name"
                label="Full Name"
                value={values.fullName}
                error={errors.fullName && touched.fullName ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                name="userName"
                id="form-user-name"
                label="Username"
                value={values.userName}
                error={errors.userName && touched.userName ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                name="password"
                id="form-password"
                label="Password"
                value={values.password}
                error={errors.password && touched.password ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button type="submit" disabled={!(dirty && isValid) || isSubmitting}>
                Sign up
              </Button>
              {errorMessage && <Typography>{errorMessage}</Typography>}
              <Typography>
                By signing up, you agree to our Terms, Data Policy and Cookies Policy.
              </Typography>
            </Form>
          );
        }}
      </Formik>
      <AuthSwitch dest='login'/>
    </Container>
  );
};

export default Signup;
