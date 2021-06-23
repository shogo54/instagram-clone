import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import TextField from '../../components/TextField';

interface FomrValues {
  userId: string;
  fullName: string;
  userName: string;
  password: string;
}

const errorMessages = {
  duplicate: 'Another account is using ',
  error: 'Something went wrong. Please try again.',
};

const Home: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  // objects needed for Formik
  const initialValues: FomrValues = {
    userId: '',
    fullName: '',
    userName: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    userId: Yup.string().email().required(),
    fullName: Yup.string().required(),
    userName: Yup.string().required(),
    password: Yup.string().required(),
  });

  const createUser = async (data: FomrValues, resetForm: Function) => {
    try {
      // API call integration will be here. Handle success / error response accordingly.
      if (data) {
        console.log(data);
        resetForm({});
      }
    } catch (error) {
      const response = error.response;
      if (response.data === 'user already exist' && response.status === 400) {
        setErrorMessage(errorMessages.duplicate);
      } else {
        setErrorMessage(errorMessages.error);
      }
    }
  };

  const onSubmit = (values: FomrValues, actions: any) => {
    createUser(values, actions.resetForm);
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 500);
  };

  return (
    <Container>
      <div>
        <Typography>Sign up to see photos and videos from your friends.</Typography>
        <Button variant="contained">Log in with Facebook</Button>
      </div>
      <div>Or</div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(props: FormikProps<FomrValues>) => {
          const { values, touched, errors, dirty, isValid, handleBlur, handleChange, isSubmitting } = props;
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
              <Button type="submit" variant="contained" disabled={!(dirty && isValid) || isSubmitting}>
                Sign up
              </Button>
              {errorMessage && (<Typography>{errorMessage}</Typography>)}
              <Typography>
                By signing up, you agree to our Terms, Data Policy and Cookies Policy.
              </Typography>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Home;
