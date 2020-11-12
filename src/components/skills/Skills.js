import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SkillsCollection from '../skills-collection/SkillsCollection';
import SkillsCategory from '../skills-category/SkillsCategory';
import personalData from '../../personal_data.json';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    paddingTop: 0,
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: 5,
      paddingTop: 0,
    },
  },
}));

const Skills = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root} container>
        <Grid item xs={12} md={8}>
          <SkillsCollection skills={personalData.skills} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SkillsCategory skills={personalData.skills} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
