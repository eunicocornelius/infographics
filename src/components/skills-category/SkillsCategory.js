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
    paddingTop: '148%',
    background: '#f49275',
    border: '3px solid',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
    },
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
}));

const SkillsCategory = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.outer}>
        <Box className={classes.inner}></Box>
      </Box>
    </div>
  );
};

export default SkillsCategory;
