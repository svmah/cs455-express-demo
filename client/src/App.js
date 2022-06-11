import React from 'react';
import './App.css';
import Lottie from 'lottie-react';
import helloAnimation from './animations/hello.json';
import { Grid } from '@mui/material';
import { NameInput, UserList, ErrorAlert } from './components';

function App () {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} className='sidebar'>
          <Lottie animationData={helloAnimation} loop />
          <NameInput />
          <ErrorAlert />
        </Grid>
        <Grid item xs={12} sm={8}>
          <UserList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
