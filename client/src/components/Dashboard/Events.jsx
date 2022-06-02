import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import Event from './Event';
import {ME} from '../../utils/queries'
import { useQuery } from '@apollo/client';
import moment from 'moment';

const Events = () => {
  const {loading, data: userData} = useQuery(ME);
  return (
    <Grid display='flex' flexGrow={1} >
      <Typography variant='h5'>Events:</Typography>
      {!loading && <Grid display='flex' flexGrow={1} flexShrink={1}>
        {userData.me.events.map(event => (
          <Event
            title={event.title}
            description={event.description}
            location={event.location}
            timeSlot={moment(Number(event.timeSlot)).format('MMMM do YYYY, h:mm:ss a')}
            duration={event.duration}
            key={event._id}
          />
        ))}
      </Grid>}
    </Grid>
  )
}

export default Events;