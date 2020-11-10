import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '1.5vw',
  },
  outer: {
    position: 'relative',
    paddingTop: '147%',
    background: '#000',
    border: '5px solid #f49275',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
    },
    [theme.breakpoints.down('xs')]: {
      border: '2px solid',
    },
  },
  innerBorder: {
    position: 'absolute',
    border: '5px solid #F4DFC0',
    color: '#F4DFC0',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  inner: {
    height: '15%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    fontSize: '4vw',
    fontFamily: 'Market Deco',

    WebkitTextStroke: '2px black',
    '&:hover': {
      textShadow: '-3px 3px 1px #f49275',
      transform: 'translate(3%,-3%)',
    },
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
}));

const SkillsCategory = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.outer}>
        <Box className={classes.innerBorder}>
          <Box className={classes.inner}>FRONTEND</Box>
          <Box className={classes.inner}>BACKEND</Box>
          <Box className={classes.inner}>DEV-OPS</Box>
          <Box className={classes.inner}>OTHERS</Box>
        </Box>
      </Box>
    </div>
  );
};

export default SkillsCategory;
