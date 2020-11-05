import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Fade } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    height: '8vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10 0 10 0',
    [theme.breakpoints.down('xs')]: {
      height: '10vw',
    },
  },
  box: {
    margin: 'auto',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#f4dfc0',
    padding: '.5vw 0vw .5vw 0vw',
    fontFamily: 'Chenier',
    fontSize: '2.5vw',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5vh;',
    },
  },
}));

const FadeCarousel = ({ dataArray }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [carouselData, setCarousel] = React.useState(dataArray[0]);

  const fadeTime = 5000;

  useEffect(() => {
    var count = 0;
    // Interval Fade
    setInterval(() => {
      setChecked((prev) => !prev);
    }, fadeTime);
    // Interval Change Data
    setInterval(() => {
      if (count === dataArray.length - 1) {
        count = 0;
      } else count++;
      setCarousel(dataArray[count]);
    }, fadeTime * 2);
  }, [dataArray]);

  return (
    <div className={classes.root}>
      <Fade
        in={checked}
        timeout={{
          enter: fadeTime * 2,
          exit: fadeTime * 2,
        }}
      >
        <Box className={classes.box}>{carouselData}</Box>
      </Fade>
    </div>
  );
};

FadeCarousel.propTypes = {
  dataArray: PropTypes.array.isRequired,
};

export default FadeCarousel;
