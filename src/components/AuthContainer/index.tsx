import React from 'react';
import { Grid } from '@material-ui/core';

const AuthContainer: React.FC = ({ children }) => {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      style={{ width: 350, height: 786 }}
    >
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default AuthContainer;
