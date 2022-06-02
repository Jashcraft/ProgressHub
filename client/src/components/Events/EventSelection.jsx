import { useQuery } from '@apollo/client';
import { Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { ME } from '../../utils/queries';
import EventCard from './EventCard';
import moment from 'moment'
import { Container } from '@mui/system';

const EventSelection = () => {
  const { loading, data: userData } = useQuery(ME);

  return (
    <Paper>
      <Typography variant='h3'>My Events</Typography>
      <Container>
        <Grid container display='flex' spacing={4}>
          {!loading && userData.me.events.map(event => (
            <Grid item xs={4}>
              <EventCard
                title={event.title}
                description={event.description}
                participants={event.participants}
                timeSlot={moment(Number(event.timeSlot)).format('MMMM do YYYY, h:mm:ss a')}
                duration={event.duration}
                location={event.location}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  )
}

export default EventSelection;