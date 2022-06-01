import { Grid, TextareaAutosize, Typography } from '@mui/material';
import * as React from 'react';


const InfoSection = (props) => {
  return (
    <Grid container display='flex' flexGrow={1}>
      <Typography variant="h4">About Me</Typography>
      <Grid container display='flex' flexGrow={1} flexDirection='column'>
        <Typography>
          My Motto: <span>"Eat Chips"</span>
        </Typography>
        <Typography>
          Workout Types: <span>"Water Combat"</span>
        </Typography>
        <Typography>
          City: <span>Denver</span>
        </Typography>
        <Typography>
          State: <span>CO</span>
        </Typography>
        <Typography variant="h6">Why am I here ?</Typography>
        {props.editing ? <TextareaAutosize>
          "Hi, I am here to train the peeps in extreme water combat sports!"
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, debitis. Eos reiciendis nostrum veritatis et, est delectus sequi nobis labore voluptas similique cupiditate, consequuntur quaerat. Omnis explicabo aut dolorum sunt!
        </TextareaAutosize> : <Typography>"Hi, I am here to train the peeps in extreme water combat sports!"
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, debitis. Eos reiciendis nostrum veritatis et, est delectus sequi nobis labore voluptas similique cupiditate, consequuntur quaerat. Omnis explicabo aut dolorum sunt!
        </Typography>}
      </Grid>
    </Grid>
  )
}

export default InfoSection;