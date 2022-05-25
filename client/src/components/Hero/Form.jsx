import { Button, FormControlLabel, FormGroup, Paper, TextField, Typography, Switch } from '@mui/material';
import { color } from '@mui/system';
import * as React from 'react';

const formComponents = ["Name", "Email", "Password", "City"]


const Form = () => {
  return (
    <>
      <Paper elevation={6} sx={{ width: "80%", display: "flex", flexDirection: 'column', backgroundColor: "#024e76", color: "#fff", borderRadius: "50px", borderColor: "#fce138", borderStyle: "solid" }}>
        <Typography variant='h4' sx={{margin: "auto", width: "100%", textAlign: "center", margin: "15px 0px", color: "#fce138", fontWeight: "bold"}}>Join Us Today!</Typography>
        {formComponents.map(component => (
          <TextField id={component.toLowerCase()} label={component} variant="outlined" sx={{ width: "80%", ml: "10px", mb: "10px", backgroundColor: "#fff" }} key={component} />
        ))}
        <FormGroup>
          <FormControlLabel control={<Switch />} label="Are you a Workout Leader?" sx={{ml: "10px", mb: "10px"}}></FormControlLabel>
        </FormGroup>
        <Button sx={{color: "#00A36C", fontWeight: "bolder"}}>Register</Button>
      </Paper>
    </>
  )
}

export default Form;