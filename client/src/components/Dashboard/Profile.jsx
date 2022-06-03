import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Profile = (props) => {
  return (

    <Container sx={{ mt: 4, mb: 4, bgcolor: '#36454F', width: "100%", height: "100vh"}}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              minHeight: 240,
              bgcolor: '#36454F'
            }}
            elevation={6}
          > 
          {props.infoSection}
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
              bgcolor: '#36454F'
            }}
            elevation={6}
          > 
          {props.avatarSection}
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper elevation={6} sx={{ p: 2, display: 'flex', flexDirection: 'column', bgcolor: '#36454F' }}>
            {props.eventSection}
          </Paper>
        </Grid>
      </Grid>
    </Container>

  )
}

export default Profile;