import React from 'react';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';
import './style.css';

const TextField: React.FC<TextFieldProps> = ({ id, label, ...props }) => {
  return (
    <div className='btn'>
      <MuiTextField
        id={id}
        label={label}
        variant='outlined'
        placeholder={label?.toString()}
        {...props}
      />
    </div>
  );
};

export default TextField;
