import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  outer: {
    position: 'relative',
    paddingTop: '90%',
    background: '#E9D7B0',
    margin: '0 0 5% 1.5vw',
    marginRight: { md: 2.5 },
    border: '3px solid ',
    [theme.breakpoints.down('md')]: {
      marginBottom: '3%',
    },
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
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  subDesc: {
    height: '1.5vw',
    marginLeft: '1.5vw',
    background: 'black',
    textAlign: 'center',
    color: '#F4DFC0',
    [theme.breakpoints.down('md')]: {
      fontSize: '1vw',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5vw',
      height: '5vw',
    },
  },
}));

const LoopedVideo = ({ video }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.outer}>
        <div className={classes.inner}>
          <video className={classes.video} autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </div>
      <div className={classes.subDesc}></div>
    </div>
  );
};

export default LoopedVideo;
