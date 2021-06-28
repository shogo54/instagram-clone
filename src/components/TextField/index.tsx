import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { inputStyles, rootStyles } from './style';

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  error,
  ...props
}) => {
  const rootClasses = rootStyles();
  const inputClasses = inputStyles({ value: value as boolean });

  const adornment = error ? (
    <InputAdornment position='end'>
      <CancelOutlinedIcon color='error' />
    </InputAdornment>
  ) : null;

  return (
    <MuiTextField
      id={id}
      label={label}
      variant='filled'
      placeholder={label?.toString()}
      classes={rootClasses}
      InputProps={{
        classes: inputClasses,
        disableUnderline: true,
        endAdornment: adornment,
      }}
      InputLabelProps={{ shrink: value ? true : false, style: {color: 'rgb(142, 142, 142)'} }}
      size='small'
      {...props}
    />
  );
};

export default TextField;
