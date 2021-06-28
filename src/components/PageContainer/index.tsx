import React from 'react';
import { Grid } from '@material-ui/core';

const PageContainer: React.FC = ({ children }) => {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      style={{ width: '100%', minHeight: '100vh', backgroundColor: '#fafafa' }}
    >
      <Grid item>{children}</Grid>
      <Grid item>footer</Grid>
    </Grid>
  );
};

export default PageContainer;
