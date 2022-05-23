import { Button, Paper, TextField, Typography } from '@mui/material';
import * as React from 'react';

const Form = () => {
  return (
    <>
    <Paper elevation={6} variant="outlined"  sx={{width: "80%"}}>
      <Typography variant='h4'>Join Us Today!</Typography>
      <TextField id="name" label="Name" variant="outlined" sx={{width: "80%"}} />
      <TextField id="email" label="Email" variant="outlined" sx={{width: "80%"}} />
      <TextField id="password" label="Password" variant="outlined" sx={{width: "80%"}} />
      <Button>Register</Button>
    </Paper>
    </>
  )
}

export default Form;