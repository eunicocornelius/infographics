import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
  },
  paper: {
    margin: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#f4dfc0',
    padding: '1vw 0vw 1vw 0vw',
    fontFamily: 'Chenier',
    fontSize: '2vw',
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
      if (count == dataArray.length - 1) {
        count = 0;
      } else count++;
      setCarousel(dataArray[count]);
    }, fadeTime * 2);
  }, []);

  return (
    <div className={classes.root}>
      <Fade
        in={checked}
        timeout={{
          enter: fadeTime * 2,
          exit: fadeTime * 2,
        }}
      >
        <Paper elevation={4} className={classes.paper}>
          {carouselData}
        </Paper>
      </Fade>
    </div>
  );
};

export default FadeCarousel;
