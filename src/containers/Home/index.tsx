import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { Formik, Form, FormikProps } from 'formik';
import { Link, RouteComponentProps  } from 'react-router-dom';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { signupValidationSchema } from '../../data/validation';
import { auth } from '../../data/firebase';
import Signup from '../Signup';

const Home: React.FC = () => {
  
  return (
    <Signup />
  );
};

export default Home;
