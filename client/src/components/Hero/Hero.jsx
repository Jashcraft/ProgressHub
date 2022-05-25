import * as React from 'react';
import {Grid, Typography} from '@mui/material'
import Form from './Form';
import './style.css';

const Hero = () => {
  return (
    <Grid container spacing={2} className='hero' sx={{height: '70vh', width: '100%', marginLeft: 0}}>
      <Grid item xs={6}>
        <Grid display="flex" justifyContent="center">
          <Grid item>
            <Typography variant='h3' align='center'>
              Our Mission
            </Typography>
            <Typography align='center'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur aliquid veniam distinctio minus ipsa optio asperiores quia doloribus expedita dolor nesciunt porro, impedit voluptatibus recusandae maiores sunt nemo accusantium consequatur?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid display="flex" justifyContent="center">
          <Form></Form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Hero;