import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Link from '../Link';
import { useStyles } from './style';

interface AuthSwitchProps {
  dest: 'login' | 'signup';
}

const AuthSwitch: React.FC<AuthSwitchProps> = ({ dest = 'signup' }) => {
  const classes = useStyles();

  let text = "Don't have an account?";
  let buttonText = 'Sign up';

  if (dest === 'login') {
    text = 'Have an account?';
    buttonText = 'Log in';
  }

  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='center'
      classes={classes}
    >
      <Grid item>
        <Typography variant='body2' align='center' style={{ width: '100%' }}>
          {text} <Link to={`/accounts/${dest}`} color='primary'>{buttonText}</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AuthSwitch;
