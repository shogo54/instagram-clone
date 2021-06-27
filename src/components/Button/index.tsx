import React from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import { useStyles } from './style';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <MuiButton
      variant='contained'
      size='small'
      color='primary'
      fullWidth
      classes={classes}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
