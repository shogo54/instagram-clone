import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useStyles } from './style';

const OrBox: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Grid item className={classes.divider}></Grid>
      <Typography variant='subtitle1' color='textSecondary' className={classes.or}>
        OR
      </Typography>
      <Grid item className={classes.divider}></Grid>
    </Grid>
  );
};

export default OrBox;
