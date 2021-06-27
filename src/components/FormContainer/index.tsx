import React from 'react';
import { Grid } from '@material-ui/core';
import Logo from '../Logo';
import { useStyles } from './style';

const FormContainer: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='center'
      className={classes.root}
    >
      <Logo />
      {children}
    </Grid>
  );
};

export default FormContainer;
