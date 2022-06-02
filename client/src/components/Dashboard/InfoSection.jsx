import { useQuery } from '@apollo/client';
import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import { ME } from '../../utils/queries';

const InfoSection = (props) => {
  const {loading, data: userData} = useQuery(ME)
  
  return (
    <Grid container display='flex' flexGrow={1}>
      <Typography variant="h4">About Me</Typography>
      {!loading && <Grid container display='flex' flexGrow={1} flexDirection='column'>
        <Typography>
          My Motto: {userData.me.motto}
        </Typography>
        <Typography>
          Workout Types: {userData.me.groupSpecialty}
        </Typography>
        <Typography>
          City: {userData.me.city}
        </Typography>
        <Typography>
          State: {userData.me.state}
        </Typography>
        <Typography variant="h6">Why am I here ?</Typography>
        <Typography>{userData.me.why}</Typography>
      </Grid>}
    </Grid>
  )
}

export default InfoSection;