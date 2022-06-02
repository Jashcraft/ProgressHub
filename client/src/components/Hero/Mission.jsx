import * as React from 'react';
import { Grid, Typography } from '@mui/material'
import Form from './Form';
import './style.css';

const Mission = () => {
  return (
    <Grid container item xs={12} sm={6} md={4} mb={5} spacing={2} className='hero' sx={{ width: '100%', marginLeft: 0, marginTop: "10px" }}>
      <Grid item xs={12} sm={6}>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography
              variant='h3'
              // className='mission' 
              align='center'
              sx={{ color: "#fce138", fontWeight: "bolder", marginTop: "140px" }}

            >
              Our Mission
            </Typography>
            {/* This section is the company's 'What Do we Do' statement. */}
            <Typography align='center' sx={{ color: "#fce138", fontWeight: "bold", marginTop: "70px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur aliquid veniam distinctio minus ipsa optio asperiores quia doloribus expedita dolor nesciunt porro, impedit voluptatibus recusandae maiores sunt nemo accusantium consequatur?
            </Typography>
            <Grid item xs={12} sm={6} display="flex" justifyContent="center" sx={{ paddingTop: 10, paddingBottom: 10 }}>
              <Form />
            </Grid>
          </Grid>
        </Grid>
      </Grid>


    </Grid>
  );
}

export default Mission;