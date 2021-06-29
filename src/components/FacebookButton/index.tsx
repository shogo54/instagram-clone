import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '../Button';

interface IFacebookButtonProps {
  currPage: 'signup' | 'login';
}

const FacebookButton: React.FC<IFacebookButtonProps> = ({ currPage }) => {
  return (
    <Button
      color={currPage === 'login' ? 'secondary' : 'primary'}
      variant={currPage === 'login' ? 'text': 'contained'}
      startIcon={<FacebookIcon />}
    >
      Log in with Facebook
    </Button>
  );
};

export default FacebookButton;
