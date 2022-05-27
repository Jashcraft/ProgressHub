import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import clientAvatar from '../../MockUserInfo/Client-1.jpg'


const Testimonials = () => {
  return (
    <>
      <Grid container spacing={2} className='featured' id="featured-leaders" sx={{ height: '45vh', width: '100%', marginLeft: 0 }} >
        <Typography variant='h4' sx={{ width: "100%", textAlign: "center", color: "#fce138", fontWeight: "bold", marginTop: "35px", marginLeft: "230px" }}>Testimonials From REAL USERS!</Typography>
        <Grid item display='flex' justifyContent='space-between' xs={12}>
{/* This section is only to display clients avatar. Pulled from DB. */}
          <Grid id="left-grid" justifyContent="center" sx={{ width: '100%', textAlign: "center", justifyContent: "center", marginTop: "-95px" }} xs={4}>
            <img src={clientAvatar} alt="user /userName/"></img>
          </Grid>
{/* This section is to display some basic client info as well as custom Testimonial. Pull from DB. DO NOT INCLUDE LOCATION INFO! */}
          <Grid display='flex' id="right-grid" sx={{ width: '100%', alignItems: "center", marginTop: "-100px", marginLeft: "40px" }} xs={8}>
            <Typography variant='h5' textAlign='left'>
              {/* Pull these fields from user Doc */}
              <Grid sx={{ borderColor: '#fce138', borderRadius: '50px', borderStyle: 'solid' }}>
                <Grid sx={{ margin: "10px", padding: "10px", color: "#fff" }}>
                  <Typography><span style={{ fontWeight: "bolder" }}>Name: </span>Jane</Typography>
                  <Typography><span style={{ fontWeight: "bolder" }}>Specialty: </span>Competitive Athletics</Typography>
                  <Typography><span style={{ fontWeight: "bolder" }}>My Experience: </span>I grew up in Boston and won a medal. Now I drink Tang and juggle Geese! </Typography>
                </Grid>
              </Grid>
            </Typography>
          </Grid>

        </Grid>
      </Grid>
    </>
  )
}

export default Testimonials;