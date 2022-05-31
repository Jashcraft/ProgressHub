import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import Event from './Event';

const events = [
  {
    title: "Water Krav Maga",
    description: "Fight to the death with grannie at the Boulder Rec Center",
    location: "Boulder Rec Center",
    timeSlot: "Tues: 8:00-9:00",
    _id: 0
  },
  {
    title: "Water Krav Maga",
    description: "Fight to the death with grannie at the Boulder Rec Center",
    location: "Boulder Rec Center",
    timeSlot: "Weds: 8:00-9:00",
    _id: 1
  },
  {
    title: "Water Krav Maga",
    description: "Fight to the death with grannie at the Boulder Rec Center",
    location: "Boulder Rec Center",
    timeSlot: "Thurs: 8:00-9:00",
    _id: 2
  }
];

const Events = () => {
  return (
    <Grid display='flex' flexGrow={1} >
      <Typography variant='h5'>Events:</Typography>
      <Grid display='flex' flexGrow={1} flexShrink={1}>
        {events.map(event => (
          <Event
            title={event.title}
            description={event.description}
            location={event.location}
            timeSlot={event.timeSlot}
            key={event._id}
          />
        ))}
      </Grid>
    </Grid>
  )
}

export default Events;