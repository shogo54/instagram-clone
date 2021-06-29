import React from 'react';
import { Grid, Typography } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import { footerLinks } from '../../data/footer-link';
import Link from '../Link';

const Footer: React.FC = () => {
  return (
    <div style={{marginTop: 20, marginBottom: 40}}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={2}
        style={{ position: 'relative', bottom: 0, left: 0, right: 0 }}
      >
        {footerLinks.map((link) => (
          <Grid item style={{ paddingTop: 0 }}>
            <Link to={link.to}>
              <Typography variant='caption' color='textSecondary'>
                {link.label}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item>
          <select style={{ border: 'none', color: 'rgba(0, 0, 0, 0.54)' }}>
            <option>English</option>
          </select>
        </Grid>
        <Grid item>
          <Typography variant='caption' color='textSecondary'>
            © 2021 Instagram from Facebook
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
