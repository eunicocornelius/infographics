import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import FadeCarousel from '../fade-carousel/FadeCarousel';
import LocalTime from '../local-time/LocalTime';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <div className='line'>
            <hr className='double' />
            <p className='hr_the'></p>
            <hr className='double' />
          </div>
          <div className='title'>
            <p className='header_title'>CORNELIUS CHRONICLES</p>
          </div>
          <div className='line'>
            <hr className='double' />
            <hr className='double' />
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
        <Hidden lgUp='hide'>
          <Grid
            container
            xs={12}
            style={{
              fontFamily: 'Old Newspaper',
              background: '#f49275',
              '&:hover': { background: 'black' },
              marginLeft: '4px',
              marginRight: '4px',
              marginBottom: '2vw',
            }}
          >
            <Grid
              item
              xs={4}
              style={{
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <a href='https://github.com/eunicocornelius/' target='_blank'>
                &diams; Github &diams;
              </a>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ justifyContent: 'center', display: 'flex' }}
            >
              <a
                href='https://www.linkedin.com/in/eunico-cornelius/'
                target='_blank'
              >
                &diams; LinkedIn &diams;
              </a>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ justifyContent: 'center', display: 'flex' }}
            >
              <a
                href='https://www.codewars.com/users/eunico.cs'
                target='_blank'
              >
                &diams; Codewars &diams;
              </a>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Header;
