import { useQuery } from '@apollo/client';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { ME } from '../../utils/queries';


const AvatarSection = () => {
  const {loading, data: userData} = useQuery(ME)
  
  return (
    <Grid container display='flex' flexDirection='column' flexGrow={1} justifyContent='center' alignItems='center' >
      <Typography variant='h6'>{!loading && userData.me.fullName}</Typography>
      <Avatar
        alt="Remy Sharp"
        src="https://via.placeholder.com/150"
        sx={{ width: 127, height: 127 }}
      />
      <Typography>
        Member Since: <span>Jan 1st, 1970</span>
      </Typography>
      <Button href='/edit-profile'>Edit Profile</Button>
    </Grid>
  )
}

export default AvatarSection;