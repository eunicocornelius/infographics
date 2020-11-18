import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  item: {
    height: '100%',
  },
  itemContainer: {
    height: '100%',
    margin: '.5vw',
  },
  itemContent: {
    height: '50%',
    margin: '.5vw',
    backgroundColor: 'red',
  },
}));

// TODO #2: FIX LAYOUR FOR ITEM CARD
// TODO #3: ADD INFO USING ARRAY NOT MANUALY
const SkillItem = ({ skills }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.item}>
        <Grid container className={classes.itemContainer}>
          <Grid item xs={4}>
            <Box className={classes.itemContent}>{skills[0].name}</Box>
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.itemContent}>{skills[0].name}</Box>
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.itemContent}>{skills[0].name}</Box>
          </Grid>
        </Grid>
        <Grid container className={classes.itemContainer}>
          <Grid item xs={4}>
            <Box className={classes.itemContent}>{skills[0].name}</Box>
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.itemContent}>{skills[0].name}</Box>
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.itemContent}>{skills[0].name}</Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SkillItem;
