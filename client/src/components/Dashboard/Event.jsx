import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import moment from 'moment'


export default function Event(props) {
  return (
    <Card  sx={{ maxWidth: 345, bgcolor: '#151515', margin: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            EV
          </Avatar>
        }
        title={props.title}
        subheader={props.timeSlot}
      />
      <CardContent>
      <Typography variant="subtitle1">
          {`${props.duration} minutes`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="subtitle1">
          {props.location}
        </Typography>
      </CardContent>
    </Card>
  );
}
