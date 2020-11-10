import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  outer: {
    position: 'relative',
    paddingTop: '70%',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
    },
    [theme.breakpoints.down('xs')]: {
      border: '2px solid',
    },
  },
  inner: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    color: '#f49275',
    fontFamily: 'Market Deco',
    fontSize: '5vw',
    textShadow: '-3px 3px 1px #000',
    height: '20%',
    WebkitTextStroke: '1px black',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw',
      WebkitTextStroke: '3px black',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '5vw',
      WebkitTextStroke: '2px black',
    },
  },
  flag: {
    fontFamily: 'The Black Box',
    fontSize: '3vw',
  },
  skills: {
    border: '2px solid #000',
    height: '80%',
  },
}));

const SkillsCollection = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.outer}>
        <Box className={classes.inner}>
          <Box className={classes.title}>A COLLECTION OF SKILLS</Box>
          {/* <Box className={classes.flag}></Box> */}
          <Box className={classes.skills}>
            <Box className={classes.skill}>REACT NATIVE</Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SkillsCollection;
