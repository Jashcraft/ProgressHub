import { useMutation } from '@apollo/client';
import { Button, FormControlLabel, FormGroup, Paper, TextField, Typography, Switch } from '@mui/material';
import React, {useState} from 'react';
import Auth from '../../utils/auth';
import { REGISTER } from '../../utils/mutations';

const formComponents = ["First Name", "Last Name", "Email", "Password", "City"]


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
    console.log(isCoachFlag);
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target 
    setSignupData({...signupData, [name]: value})
    console.log(name, value)
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
        <Typography variant='h4' sx={{margin: "auto", width: "100%", textAlign: "center", margin: "15px 0px", color: "#fce138", fontWeight: "bold"}}>Join Us Today!</Typography>
        {formComponents.map(component => (
          <TextField 
          id={component.split(' ').length > 1 ? component.split(' ').join('').split('').map((char, i) => i === 0 ? char.toLowerCase() : char).join('') : component.toLowerCase()} 
          label={component} 
          variant="outlined" 
          sx={{ width: "80%", ml: "10px", mb: "10px", backgroundColor: "#fff" }} 
          key={component.split(' ').length > 1 ? component.split(' ').join('').split('').map((char, i) => i === 0 ? char.toLowerCase() : char).join('') : component.toLowerCase()} 
          onChange={handleInputChange}
          name={component.split(' ').length > 1 ? component.split(' ').join('').split('').map((char, i) => i === 0 ? char.toLowerCase() : char).join('') : component.toLowerCase()}
          type= {component=== "Password" ? 'password' : 'text'}
          />
        ))}
        <FormGroup>
{/* This switch will determine whether a new user is a trainer or a client */}
          <FormControlLabel control={<Switch onChange={handleCoachToggle} name="isCoach"/>} label="Are you a Workout Leader?" sx={{ml: "10px", mb: "10px"}}></FormControlLabel>
        </FormGroup>
        <Button 
        sx={{color: "#00A36C", fontWeight: "bolder"}}
        onClick={handleSubmit}
        >Register</Button>
      </Paper>
    </>
  )
}

export default Form;