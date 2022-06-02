import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { useMutation } from '@apollo/client';
import { REGISTER_EVENT } from '../../utils/mutations';
import './style.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const EventCard= (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [register, {error: registerError}] = useMutation(REGISTER_EVENT);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const registerHandler = async (e) => {
    const eventId = e.target.dataset.eventid;
    await register({
      variables: {
        eventId: eventId
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 345, bgcolor: '#151515', color: 'whitesmoke' }}>
      <CardHeader
      sx={{color: 'whitesmoke'}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {props.title[0]}
          </Avatar>
        }
        title={props.title}
        subheader={props.timeSlot}
        
      />
      <CardContent>
        <Typography>{`${props.duration} minutes`}</Typography>
        <Typography>{props.location}</Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        {props.clientEvent && <Typography>Host: {props.hostName}</Typography>}
        {props.clientEvent && <Typography>{`${props.hostCity}, ${props.hostState}`}</Typography>}
        {props.clientEvent && <Button data-eventid={props.eventId} onClick={registerHandler}>Register</Button>}
      </CardContent>
      {!props.clientEvent && (
        <>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Clients"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <List>
              {props.participants.map(participant=>{
                return(
                  <ListItem key={participant._id}>
                    <ListItemText>{participant.fullName}</ListItemText>
                    <ListItemText>{participant.email}</ListItemText>
                  </ListItem>
                )
              })}
              </List>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
}


export default EventCard;