import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '../../components/TextField';

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <Typography>
          Sign up to see photos and videos from your friends.
        </Typography>
        <Button variant="contained">Log in with Facebook</Button>
      </div>
      <div>
        Or
      </div>
      <form>
        <TextField id="form-user-id" label="Mobile Number or Email"/>
        <TextField id="form-full-name" label="Full Name"/>
        <TextField id="form-user-name" label="Username"/>
        <TextField id="form-password" label="Password"/>
        <Button variant="contained" disabled>Sign up</Button>
        <Typography>
          By signing up, you agree to our Terms, Data Policy and Cookies Policy.
        </Typography>
      </form>
    </Container>
  );
}

export default Home;