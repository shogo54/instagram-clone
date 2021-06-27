import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '../Button';

const FacebookButton: React.FC = () => {
  return <Button startIcon={<FacebookIcon />}>Log in with Facebook</Button>;
};

export default FacebookButton;
