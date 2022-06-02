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
        alt="User Avatar"
        sx={{ width: 127, height: 127, fontSize: "60px", bgcolor: "#024e76", color: "#fce138" }}
      >{!loading && `${userData.me.firstName[0]}${userData.me.lastName[0]}` }</Avatar>
      <Typography>
        Member Since: <span>Jan 1st, 1970</span>
      </Typography>
      <Button href='/edit-profile'>Edit Profile</Button>
    </Grid>
  )
}

export default AvatarSection;