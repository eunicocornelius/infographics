import React from 'react';
import { Grid } from '@material-ui/core';
import FadeCarousel from '../fade-carousel/FadeCarousel';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div class='line'>
            <hr />
            <p class='hr_the'></p>
            <hr />
          </div>
          <div className='title'>
            <p className='header_title'>CORNELIUS CHRONICLES</p>
          </div>
          <div class='line'>
            <hr />
            <hr />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <FadeCarousel
            dataArray={[
              'eunico.cornelius@gmail.com',
              'https://github.com/eunicocornelius/',
              'https://www.linkedin.com/in/eunico-cornelius-0a262b151/',
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          LOCAL TIME 08:95 PM
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
