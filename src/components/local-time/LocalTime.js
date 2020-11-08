import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import Moment from 'react-moment';
import Orange from '../../assets/images/fruit.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  local_time: {
    fontFamily: 'Bungler',
    fontSize: '3.5vw',
    paddingLeft: '0vw',
    paddingRight: '0vw',
    [theme.breakpoints.down('xs')]: {
      fontSize: '3vh;',
      paddingLeft: '0',
      paddingRight: '0',
    },
  },
  time: {
    fontFamily: 'Bungler Light',
    fontSize: '8vw',
    marginTop: '-1.5%',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    [theme.breakpoints.down('xs')]: {
      fontSize: '6vh;',
      paddingLeft: '0.5vh',
      paddingRight: '0.5vh',
    },
  },
  image: {
    paddingLeft: '0vw',
    justifyContent: 'flex-end',
    width: '8vw',
    [theme.breakpoints.down('xs')]: {
      width: '6vh',
      paddingLeft: '0',
      paddingRight: '0',
    },
  },
  social: {
    display: 'block',
    color: '#f4dfc0',
    marginLeft: '1vw',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0vw',
    },
  },
  social_buttons: {
    backgroundColor: 'black',
    color: 'inherit',
    display: 'flex',
    borderRadius: 0,
    margin: '.1vw 0  .1vw 0',
    fontSize: '.7vw',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      minWidth: '0vh',
      margin: '0',
      padding: '.3vh .1vh .3vh .1vh',
      fontSize: '.1vw',
      display: 'none',
    },
  },
}));

const LocalTime = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.local_time}>
          LOCAL <br /> TIME
        </Box>
        <Box className={classes.time}>
          <Moment format='hh:mm A' interval={1000} />
        </Box>
        <Box className={classes.image}>
          <img className={classes.orange} src={Orange} width='100%' />
        </Box>
        <Box className={classes.social}>
          <Button
            className={classes.social_buttons}
            href='https://github.com/eunicocornelius/'
            target='_blank'
          >
            Github
          </Button>
          <Button
            className={classes.social_buttons}
            href='https://www.linkedin.com/in/eunico-cornelius/'
            target='_blank'
          >
            LinkedIn
          </Button>
          <Button
            className={classes.social_buttons}
            href='https://www.codewars.com/users/eunico.cs'
            target='_blank'
          >
            Codewars
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default LocalTime;
