import React from 'react';
import { Grid } from '@material-ui/core';
import PreviewImage from '../../components/PreviewImage';
import PageContainer from '../../components/PageContainer';
import SignupForm from '../../containers/SignupForm';

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Grid container direction='row' justify='center' alignItems='center'>
        <PreviewImage />
        <SignupForm />
      </Grid>
    </PageContainer>
  );
};

export default Home;
