import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Eye from '../eye/Eye';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  outer: {
    position: 'relative',
    paddingTop: '70%',
    background: '#E9D7B0',
    marginRight: { md: 2.5 },
    border: '2px dotted ',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.5vw',
      border: '2px solid',
      marginBottom: '2.5vw',
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
    color: '#f49275',
    fontFamily: 'The Wanters',
    fontSize: '4vw',
    WebkitTextStroke: '2px black',
    textShadow: '3px 3px 1px #000',
    height: '20%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15vw',
      WebkitTextStroke: '3px black',
      textShadow: '1vw 1vw 1px #000',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15vw',
      WebkitTextStroke: '2px black',
    },
  },
  eye: {
    height: '45%',
    width: '100%',
  },
  edu_subtitle: {
    fontFamily: 'Bungler',
    fontSize: '2.5vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '9vw',
    },
  },
  edu_info: {
    fontFamily: 'Old Newspaper',
    fontSize: '1vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3vw',
      marginBottom: '2.5vw',
    },
  },
}));

const Education = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.outer}>
        <Box className={classes.inner}>
          <Box className={classes.title}>Education</Box>
          <Box className={classes.eye}>
            <Eye />
          </Box>
        </Box>
      </Box>
      <Box>
        <div className={classes.edu_subtitle}>B.S. INFORMATION TECHNOLOGY</div>
        <div className={classes.edu_info}>
          Swiss German University, Indonesia Some Subjects: Database, OOP, AI
          Software Engineering,Web Systems and Technology. GPA: 3.5/4.0
        </div>
      </Box>
      <Box>
        <div className={classes.edu_subtitle}>
          B.ENG. ENGINEERING MANAGEMENT
        </div>
        <div className={classes.edu_info}>
          Fachochschule Sudwestfalen, Iserlohn, Germany.
        </div>
      </Box>
    </div>
  );
};

export default Education;
