import React from 'react';
import { Grid } from '@material-ui/core';
import logo from '../../assets/instagram-logo.png';
import { useStyles } from './style';

const Logo: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <img src={logo} alt='' />
    </Grid>
  );
};

export default Logo;
