import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import appleStore from '../../assets/apple-store-download.png';
import googlePlay from '../../assets/google-play-download.png';
import { useStyles } from './style';

const GetApp: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Typography variant='body2' className={classes.text}>Get the app.</Typography>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.box}
      >
        <Grid item>
          <a
            href='https://apps.apple.com/app/instagram/id389801252?vt=lo'
            rel='noreferrer'
            target='_blank'
            className={classes.link}
          >
            <img
              src={appleStore}
              alt='Available on the App Store'
              className={classes.img}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            href='https://play.google.com/store/apps/details?id=com.instagram.android'
            rel='noreferrer'
            target='_blank'
            className={classes.link}
          >
            <img
              src={googlePlay}
              alt='Available on Google Play'
              className={classes.img}
            />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetApp;
