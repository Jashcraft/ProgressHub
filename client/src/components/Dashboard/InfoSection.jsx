import { useQuery } from '@apollo/client';
import { Grid, Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import * as React from 'react';
import { ME } from '../../utils/queries';

const InfoSection = (props) => {
  const {loading, data: userData} = useQuery(ME)
  
  return (
    <Grid container display='flex' flexGrow={1} >
      <Typography variant="h4">About Me</Typography>
      {!loading && <Grid container display='flex' flexGrow={1} flexDirection='column'>
        <Typography>
          <span style={{fontWeight: 'bold', fontSize: '20px'}}>My Motto:</span> {userData.me.motto}
        </Typography>
        <Typography>
        <span style={{fontWeight: 'bold', fontSize: '20px'}}>Workout Types:</span> {userData.me.groupSpecialty}
        </Typography>
        <Typography>
        <span style={{fontWeight: 'bold', fontSize: '20px'}}>City:</span> {userData.me.city}
        </Typography>
        <Typography>
        <span style={{fontWeight: 'bold', fontSize: '20px'}}>State:</span> {userData.me.state}
        </Typography>
        <Typography variant="h6">Why am I here ?</Typography>
        <Typography>{userData.me.why}</Typography>
      </Grid>}
    </Grid>
  )
}

export default InfoSection;