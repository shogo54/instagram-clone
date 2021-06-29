import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
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
import { signupErrorMessages as errorMessages } from '../../data/error-message';
import { auth, database } from '../../data/firebase';
import { signupValidationSchema } from '../../data/validation';
import { ISignupFormValues as IFormValues } from '../../modules/form-values';
import { IUserProfile } from '../../modules/user';

const SignupForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [focused, setFocused] = useState<string>('');
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
        // create and sign in as a new user
        await auth.createUserWithEmailAndPassword(data.userId, data.password);

        // if logged in successfully
        const user = auth.currentUser;
        if (user) {
          // create user profile data
          const userData: IUserProfile = {
            userId: user.email || '',
            fullName: data.fullName,
            userName: data.userName,
            password: data.password,
            uid: user.uid,
          };
          // store the additional user data to database
          await database.ref('users/' + user.uid).set(userData);
        }

        // reset the form and go to domain root
        resetForm({});
        history.push('/');
      }
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case 'auth/invalid-email':
          setErrorMessage(errorMessages.invalidEmail);
          break;
        case 'auth/email-already-in-use':
          setErrorMessage(errorMessages.emailAlreadyInUse);
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
    <AuthContainer>
      <FormContainer>
        <Grid style={{ marginBottom: 10 }}>
          <Typography variant='body1' color='textSecondary' align='center'>
            Sign up to see photos and videos from your friends.
          </Typography>
        </Grid>
        <FacebookButton currPage={'signup'} />
        <OrBox />
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
              <Form style={{ marginTop: 8 }}>
                <TextField
                  name='userId'
                  id='form-user-id'
                  label='Mobile Number or Email'
                  signup
                  value={values.userId}
                  error={
                    focused !== 'userId' && errors.userId && touched.userId
                      ? true
                      : false
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={() => setFocused('userId')}
                />
                <TextField
                  name='fullName'
                  id='form-full-name'
                  label='Full Name'
                  signup
                  value={values.fullName}
                  error={
                    focused !== 'fullName' &&
                    errors.fullName &&
                    touched.fullName
                      ? true
                      : false
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={() => setFocused('fullName')}
                />
                <TextField
                  name='userName'
                  id='form-user-name'
                  label='Username'
                  signup
                  value={values.userName}
                  error={
                    focused !== 'userName' &&
                    errors.userName &&
                    touched.userName
                      ? true
                      : false
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={() => setFocused('userName')}
                />
                <TextField
                  name='password'
                  id='form-password'
                  label='Password'
                  signup
                  pass
                  value={values.password}
                  error={
                    focused !== 'password' &&
                    errors.password &&
                    touched.password
                      ? true
                      : false
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={() => setFocused('password')}
                />
                <Button
                  type='submit'
                  disabled={!(dirty && isValid) || isSubmitting}
                >
                  Sign up
                </Button>
                {errorMessage && <Typography>{errorMessage}</Typography>}
                <Typography
                  variant='subtitle2'
                  color='textSecondary'
                  align='center'
                >
                  By signing up, you agree to our{' '}
                  <Link to='/' style={{ fontWeight: 600 }}>
                    Terms
                  </Link>{' '}
                  ,{' '}
                  <Link to='/' style={{ fontWeight: 600 }}>
                    Data Policy
                  </Link>{' '}
                  and
                  <Link to='/' style={{ fontWeight: 600 }}>
                    Cookies Policy
                  </Link>{' '}
                  .
                </Typography>
              </Form>
            );
          }}
        </Formik>
      </FormContainer>
      <AuthSwitch dest='login' />
      <GetApp />
    </AuthContainer>
  );
};

export default SignupForm;
