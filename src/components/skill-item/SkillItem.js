import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({}));

// TODO #2: ADD INFO USING ARRAY NOT MANUALY
const SkillItem = ({ skills }) => {
  const classes = useStyles();
  return <div>{skills[0].name}</div>;
};

export default SkillItem;
