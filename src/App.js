import React from 'react';
import './App.css';
// import personalData from './personal_data.json';
import Eye from './components/eye/Eye';
import { Grid } from '@material-ui/core';
import Header from './components/header/Header';

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Grid container>
        <Grid item xs={12} md={4} justify='center'>
          <div className='edu_title'>EDUCATION</div>
          <div className='eye_container'>
            <Eye />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
