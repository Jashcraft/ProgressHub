import { useMutation } from '@apollo/client';
import { Button, FormControlLabel, FormGroup, Paper, TextField, Typography, Switch } from '@mui/material';
import React, {useState} from 'react';
import Auth from '../../utils/auth';
import { REGISTER } from '../../utils/mutations';

const formComponents = [{value: "First Name", name: 'firstName'}, {value: "Last Name", name: 'lastName'}, {value: "Email", name: 'email'},{value: "Password", name: 'password'}, {value: "City", name: 'city'}]


const Form = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    city: "",
  })
  const [register, {error: registerError}] = useMutation(REGISTER)

  const [isCoachFlag, setIsCoachFlag] = useState(false)
  const handleCoachToggle = (event) => {
    setIsCoachFlag(event.target.checked)
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target 
    setSignupData({...signupData, [name]: value})
  }

  const handleSubmit = async (event) => {
    const {data} = await register({
      variables: {
        ...signupData, 
        isCoach: isCoachFlag
      }
    })
    Auth.login(data.addUser.token)
  }
// DO NOT TOUCH THIS
  return (
    <>
      <Paper elevation={6} sx={{ width: "80%", display: "flex", flexDirection: 'column', backgroundColor: "#024e76", color: "#fff", borderRadius: "50px", borderColor: "#fce138", borderStyle: "solid" }}>
        <Typography variant='h4' sx={{width: "100%", textAlign: "center", margin: "15px 0px", color: "#fce138", fontWeight: "bold"}}>Join Us Today!</Typography>
        {formComponents.map(component => (
          <TextField 
          id={component.name} 
          label={component.name} 
          variant="outlined" 
          sx={{ width: "80%", height: "80%", ml: "62px", mb: "10px", backgroundColor: "#fff", borderRadius: "50px" }} 
          key={component.name} 
          onChange={handleInputChange}
          name={component.name}
          type= {component.value === "Password" ? 'password' : 'text'}
          />
        ))}
        <FormGroup>
{/* This switch will determine whether a new user is a trainer or a client */}
          <FormControlLabel control={<Switch onChange={handleCoachToggle} name="isCoach"/>} label="Are you a Workout Leader?" sx={{ml: "150px", mb: "10px"}}></FormControlLabel>
        </FormGroup>
        {registerError && (<Typography>{registerError}</Typography>)}
        <Button 
        sx={{color: "#00A36C", fontWeight: "bolder"}}
        onClick={handleSubmit}
        >Register</Button>
      </Paper>
    </>
  )
}

export default Form;