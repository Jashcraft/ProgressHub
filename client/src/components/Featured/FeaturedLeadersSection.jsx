import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import trainerPhoto from '../../MockUserInfo/trainer-1.jpg';

const FeaturedLeaders = () => {
  return (
    <>
      <Grid container spacing={2} className='featured' id="featured-leaders" sx={{ height: '45vh', width: '100%', marginLeft: 0, mb: "40px" }} >
        <Typography variant='h4' sx={{ width: "100%", textAlign: "center", color: "#fce138", fontWeight: "bold" }}> Featured Trainers</Typography>
          <Grid item display='flex' justifyContent='space-between' xs={12}>

{/* Left grid for showing a trainers avatar. Pulled from DB */}
            <Grid id="left-grid" justifyContent="center" sx={{ width: '100%', textAlign: "center", justifyContent: "center" }} xs={4}>
              <img src={trainerPhoto} alt="trainer /userName/"></img>
            </Grid>

{/* Right grid for showing profile info. Pulled From DB */}
            <Grid display='flex' id="right-grid" sx={{ width: '100%', alignItems: "center"}} xs={8}>
              <Typography variant='h5' textAlign='left'>
                {/* Pull these fields from user Doc */}
                <Grid sx={{ borderColor: '#fce138', borderRadius: '50px', borderStyle: 'solid'}}>
                  <Grid sx={{margin: "10px", padding: "10px", color: "#fff"}}>
                    <Typography><span style={{fontWeight: "bolder"}}>Name: </span>Trainer 1 "steve"</Typography>
                    <Typography><span style={{fontWeight: "bolder"}}>Specialty: </span>Competitive Athletics</Typography>
                    <Typography><span style={{fontWeight: "bolder"}}>Cities: </span>Phoenix, Tuscon, Santa Fe</Typography>
                    <Typography><span style={{fontWeight: "bolder"}}>About me: </span>I grew up in Boston and won a medal. Now I drink Tang and juggle Geese! </Typography>
                  </Grid>
                </Grid>
              </Typography>
            </Grid>

          </Grid>
      </Grid>
    </>
  )
}

export default FeaturedLeaders