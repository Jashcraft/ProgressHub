import { Paper, TextField, Typography, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { ADDEVENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {DateTimePicker} from '@mui/x-date-pickers-pro'

const formComponents = [{ value: "Title", name: "title" }, { value: "Description", name: "description" }, { value: "Location", name: "location" }]


const EventForm = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    location: ""
    })
  const [duration, setDuration] = useState(60)
  const [time, setTime] = useState(new Date())

  const [addEvent, { error: addEventError }] = useMutation(ADDEVENT)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEventData({ ...eventData, [name]: value })
  }

  const handleTimeChange = (e) => {
    setTime(e.$d)
  }

  const handleSubmit = async (event) => {
    await addEvent({
      variables: {
        eventInput: { ...eventData, duration: parseInt(duration), timeSlot: time }
      }
    });

    window.location.assign('/dashboard');
  }
  // DO NOT TOUCH THIS
  return (
    <Grid container display='flex' flexGrow={1} flexShrink={1} justifyContent='center'>
      <Paper elevation={6} sx={{ minWidth: "61%", textAlign: "center" }} >
        <Typography variant='h4' >Create An Event</Typography>
        <Grid display='flex' flexDirection='column' width='100%' alignItems='center'>
          {formComponents.map(component => (
            <TextField
              id={component.name}
              label={component.value}
              variant="outlined"
              key={component.name}
              onChange={handleInputChange}
              name={component.name}
              type="text"
              sx={{ width: "85%", mb: 3 }}
            />
          ))}
          <DateTimePicker 
            onChange={handleTimeChange}
            value={time}
            renderInput={(params) => <TextField {...params} />}
          />
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="duration">
              Duration
            </InputLabel>
            <NativeSelect
              defaultValue={60}
              inputProps={{
                name: 'duration',
                id: 'duration',
              }}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value={15}>15</option>
              <option value={30}>30</option>
              <option value={45}>45</option>
              <option value={60}>60</option>
              <option value={75}>75</option>
              <option value={90}>90</option>
              <option value={105}>105</option>
              <option value={120}>120</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        {addEventError && (<Typography>{addEventError}</Typography>)}
        <Button
          onClick={handleSubmit}
        >Create</Button>
      </Paper>
    </Grid>
  )
}


export default EventForm;