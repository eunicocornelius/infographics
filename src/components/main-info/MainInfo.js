import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonalInfo from '../personal-info/PersonalInfo';

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
          B
        </Grid>
        <Grid item xs={12} md={4}>
          C
        </Grid>
      </Grid>
    </div>
  );
};

export default MainInfo;
