import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonalInfo from '../personal-info/PersonalInfo';
import Education from '../education/Education';
import LoopedVideo from '../looped-video/LoopedVideo';
import VideoAsset from '../../assets/videos/video_profile.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: 5,
    },
  },
}));

const MainInfo = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root} container>
        <Grid item xs={12} md={5}>
          <PersonalInfo />
        </Grid>
        <Grid item xs={12} md={3}>
          <Education />
        </Grid>
        <Grid item xs={12} md={4}>
          <LoopedVideo video={VideoAsset} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainInfo;
