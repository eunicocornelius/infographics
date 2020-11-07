import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  outer: {
    position: 'relative',
    paddingTop: '80%',
    background: '#f49275',
    marginRight: { md: 2.5 },
    border: '3px solid',
    [theme.breakpoints.down('xs')]: {
      border: '2px solid',
    },
  },
  inner: {
    position: 'absolute',
    padding: '2%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    color: '#F4DFC0',
    fontFamily: 'Broadsheet Bubble',
    fontSize: '2vw',
    WebkitTextStroke: '2px black',
    height: '15%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw',
      WebkitTextStroke: '3px black',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '5vw',
      WebkitTextStroke: '2px black',
    },
  },
  name: {
    fontFamily: 'Vintage Party',
    fontSize: '4vw',
    marginTop: '-5%',
    marginBottom: '3%',
    height: '20%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10vw',
      marginTop: '-3%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10vw',
      marginTop: '-3%',
    },
  },
  container: {
    fontFamily: 'Vintage Avalanche Black',
    fontSize: '2vw',
    height: '55%',
  },
  gridContainer: {
    height: '100%',
    textAlign: 'left',
    paddingTop: '2vw',
    paddingLeft: '2vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vw',
      paddingTop: '5vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '4vw',
      paddingTop: '5vw',
    },
  },
  gridItem: {
    fontFamily: 'Vintage Avalanche',
    fontSize: '1.5vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3vw',
    },
  },
  diamonds: {
    height: '10%',
    paddingTop: '3%',
    fontSize: '2vw',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1%',
      fontSize: '4vw',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '1%',
      fontSize: '4vw',
    },
  },
}));

const diamond = '♦'.repeat(10);

const PersonalInfo = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.outer}>
        <Box className={classes.inner}>
          <Box className={classes.title}>FULLNAME</Box>
          <Box className={classes.name}>Eunico Cornelius</Box>
          <Box className={classes.container}>
            <Grid className={classes.gridContainer} container spacing={1}>
              {/* TODO: Add this as a loopable according to prop array */}
              <Grid item xs={6}>
                LANGUAGES
                <hr className='profile' />
                <Box className={classes.gridItem}>
                  INDONESIAN, ENGLISH, GERMAN
                </Box>
              </Grid>
              <Grid item xs={6}>
                DATE OF BIRTH
                <hr className='profile' />
                <Box className={classes.gridItem}>27 MEI 1997</Box>
              </Grid>
              <Grid item xs={6}>
                PLACE OF BIRTH
                <hr className='profile' />
                <Box className={classes.gridItem}>JAKARTA</Box>
              </Grid>
              <Grid item xs={6}>
                CURRENT STATUS
                <hr className='profile' />
                <Box className={classes.gridItem}>HIATUS</Box>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.diamonds}>{diamond}</Box>
        </Box>
      </Box>
    </div>
  );
};

export default PersonalInfo;
