import React from 'react';
import { Grid } from '@material-ui/core';
import Footer from '../Footer';

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
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default PageContainer;
