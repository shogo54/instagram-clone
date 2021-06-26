import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface AuthSwitchProps {
  dest: 'login' | 'signup';
}

const AuthSwitch: React.FC<AuthSwitchProps> = ({ dest = 'signup' }) => {
  let text = "Don't have an account?";
  let buttonText = 'Sign up';

  if (dest === 'login') {
    text = 'Have an account?';
    buttonText = 'Log in';
  }

  return (
    <>
      <Typography>
        {text}
        <Link to={`/accounts/${dest}`}>{buttonText}</Link>
      </Typography>
    </>
  );
};

export default AuthSwitch;
