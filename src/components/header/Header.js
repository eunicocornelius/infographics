import React from 'react';
import { Grid } from '@material-ui/core';
import FadeCarousel from '../fade-carousel/FadeCarousel';
import LocalTime from '../local-time/LocalTime';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <div className='line'>
            <hr />
            <p className='hr_the'></p>
            <hr />
          </div>
          <div className='title'>
            <p className='header_title'>CORNELIUS CHRONICLES</p>
          </div>
          <div className='line'>
            <hr />
            <hr />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <FadeCarousel
            dataArray={[
              'eunico.cornelius@gmail.com',
              'https://github.com/eunicocornelius/',
              'https://www.linkedin.com/in/eunico-cornelius/',
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalTime />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
