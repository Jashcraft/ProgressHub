import React from 'react';
import { useQuery } from '@apollo/client';
import { Button, Grid, Paper, Typography } from '@mui/material';
import EventCard from './EventCard';
import moment from 'moment'
import { Container } from '@mui/system';
import { ALL_EVENTS_QUERY } from '../../utils/queries';

const AllEvents = () => {
  const { loading, data: eventData } = useQuery(ALL_EVENTS_QUERY);

  return (
    <Grid container justifyContent='center'>
      <Paper sx={{ height: '100vh', width: '85%', bgcolor: '#36454F' }}>
        <Grid container flexDirection='column' alignItems='center' >
          <Typography sx={{mb: '15px', color: '#fce138', }} variant='h3'>All Events</Typography>
          <Container >
            <Grid container display='flex' spacing={4}>
              {!loading && eventData.events.map(event => (
                <Grid item xs={4} key={event._id}>
                  <EventCard
                    clientEvent
                    title={event.title}
                    description={event.description}
                    participants={event.participants}
                    timeSlot={moment(Number(event.timeSlot)).format('MMMM do YYYY, h:mm:ss a')}
                    duration={event.duration}
                    location={event.location}
                    hostName={event.ownerID.fullName}
                    hostCity={event.ownerID.city}
                    hostState={event.ownerID.state}
                    eventId={event._id}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default AllEvents;