import React from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
// import './index.css';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <div className='btn'>
      <MuiButton variant='contained' {...props}>
        {children}
      </MuiButton>
    </div>
  );
};

export default Button;
