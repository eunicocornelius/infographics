import React from 'react';
import './Body.css';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MainInfo from '../main-info/MainInfo';
import Skills from '../skills/Skills';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  body: {
    border: '3px solid',
    [theme.breakpoints.down('xs')]: {
      border: '2px solid',
      marginTop: '2vw',
    },
  },
}));

const Body = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.body}>
        <MainInfo />
        <Skills />
        <hr className='body_divider' />
      </Box>
    </div>
  );
};

export default Body;
