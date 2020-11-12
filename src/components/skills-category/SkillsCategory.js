import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fish from '../../assets/images/fish.png';
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
    height: '13%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    fontSize: '3vw',
    fontFamily: 'Market Deco',

    WebkitTextStroke: '2px black',
    '&:hover': {
      textShadow: '-3px 3px 1px #f49275',
      transform: 'translate(3%,-3%)',
    },
  },
  title: {
    height: '15%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    fontSize: '5vw',
    fontFamily: 'Sherlock Vintage',
    marginTop: '1vw',
  },
  fishContainer: {
    height: '20%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginTop: '.5vw',
  },
  fish: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const SkillsCategory = ({ skills }) => {
  const classes = useStyles();
  var categories = [];

  const clickCategory = (e) => {
    // TODO: Fix this part so that button can be pressed and activated
    e.preventDefault();
    e.target.style.textShadow = '0px 0px 0px black';
    e.target.style.transform = 'translate(0%,0%)';
  };

  // Loop through skills category
  skills.map((skill) => categories.push(skill.category));
  categories = categories.filter(
    (item, index) => categories.indexOf(item) === index
  );
  categories = categories.map((skill) => skill.toUpperCase());

  // Make each skills button
  var skillButtons = categories.map((skill, index) => {
    return (
      <Box key={index} className={classes.inner} onClick={clickCategory}>
        {skill}
      </Box>
    );
  });

  return (
    <div className={classes.root}>
      <Box className={classes.outer}>
        <Box className={classes.innerBorder}>
          <Box className={classes.title}>Categories</Box>
          <hr className='category_divider' />
          {skillButtons}
          <Box className={classes.fishContainer}>
            <img className={classes.fish} src={Fish} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SkillsCategory;
