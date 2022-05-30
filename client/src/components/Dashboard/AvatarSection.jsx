import { Avatar, Button, Grid, Typography } from '@mui/material';
import * as React from 'react';


const AvatarSection = () => {
  return (
    <Grid container display='flex' flexDirection='column' flexGrow={1} justifyContent='center' alignItems='center' >
      <Typography variant='h6'><span>Admin, Admin</span></Typography>
      <Avatar
        alt="Remy Sharp"
        src="https://via.placeholder.com/150"
        sx={{ width: 127, height: 127 }}
      />
      <Typography>
        Memeber Since: <span>Jan 1st, 1970</span>
      </Typography>
      <Button>Edit Profile</Button>
    </Grid>
  )
}

export default AvatarSection;