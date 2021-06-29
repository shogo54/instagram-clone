import React from 'react';
import { Button, InputAdornment } from '@material-ui/core';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { inputStyles, rootStyles } from './style';
import { useState } from 'react';

type TextFieldProps = MuiTextFieldProps & { signup?: boolean; pass?: boolean };

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  error,
  signup = false,
  pass = false,
  ...props
}) => {
  const rootClasses = rootStyles();
  const inputClasses = inputStyles({ value: value as boolean });

  const [showValue, setShowValue] = useState(!pass);

  let toggleShow = undefined;
  if (pass && value !== '') {
    toggleShow = (
      <Button
        style={{
          minWidth: 'unset',
          textTransform: 'none',
          backgroundColor: 'inherit',
          paddingRight: 0,
        }}
        disableRipple
        onClick={() => setShowValue(!showValue)}
      >
        {showValue ? 'Hide' : 'Show'}
      </Button>
    );
  }

  const errorIndicator =
    error && signup ? <CancelOutlinedIcon color='error' /> : null;

  const adornment = (
    <InputAdornment position='end'>
      {errorIndicator}
      {toggleShow}
    </InputAdornment>
  );

  return (
    <MuiTextField
      id={id}
      label={label}
      variant='filled'
      placeholder={label?.toString()}
      type={showValue ? 'text' : 'password'}
      classes={rootClasses}
      InputProps={{
        classes: inputClasses,
        disableUnderline: true,
        endAdornment: adornment,
      }}
      InputLabelProps={{
        shrink: value ? true : false,
        style: { color: 'rgb(142, 142, 142)' },
      }}
      size='small'
      {...props}
    />
  );
};

export default TextField;
