import { useMutation, useQuery } from '@apollo/client';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, {useState} from 'react';
import {ME} from '../../../utils/queries'
import {EDITUSER} from '../../../utils/mutations'


const EditOptions = () => {
  const {loading, data: userData} = useQuery(ME)
  const [userUpdate, {err: userUpdateError}] = useMutation(EDITUSER)

  const formComponents = [
    { value: "Group Specialty", name: "groupSpecialty" },
    { value: "City", name: "city" },
    { value: "State", name: "state" },
    { value: "Motto", name: "motto" },
    { value: "Why Am I Here?", name: "why" }
  ]

  const [profileData, setProfileData] = useState({
    groupSpecialty: "",
    motto: "",
    why: "",
    state: "",
    city: "",
  })

  const handleSubmit = async (event) => {
    const { data } = await userUpdate({
      variables: {
        userUpdateInput: {...profileData}
      }
    })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setProfileData({ ...profileData, [name]: value })
    console.log('stuff', name, value)
  }



  return (
    <Grid container justifyContent='center' height='55%'>
      <Paper elevation={6} sx={{ justifyContent: 'space-between', width: "80%", display: "flex", flexDirection: 'column', backgroundColor: "#024e76", color: "#fff", borderRadius: "50px", borderColor: "#fce138", borderStyle: "solid", alignItems: 'center' }}>
        <Typography variant='h4' sx={{width: "100%", textAlign: "center", margin: "15px 0px", color: "#fce138", fontWeight: "bold"}}>Edit your information</Typography>
        {!loading && formComponents.map(component => (
          <TextField 
          id={component.name} 
          label={component.name} 
          variant="outlined" 
          sx={{ width: "80%", ml: "10px", mb: "10px", backgroundColor: "#fff", marginLeft: "65px" }} 
          key={component.name} 
          onChange={handleInputChange}
          name={component.name}
          defaultValue={userData.me[component.name] ? userData.me[component.name] : ""}
          />
        ))}
        {userUpdateError && (<Typography>{userUpdateError}</Typography>)}
        <Button 
        sx={{color: "#00A36C", fontWeight: "bolder"}}
        onClick={handleSubmit}
        >Update</Button>
      </Paper>
    </Grid>
  )
}


export default EditOptions;