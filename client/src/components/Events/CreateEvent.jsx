import * as React from 'react';
import CoachHeader from '../Dashboard/Coach/CoachHeader';
import Auth from '../../utils/auth'
import EventForm from './EventForm';


const CreateEvent = () => {
  if (!Auth.loggedIn()) {
    window.location.replace('/');
  }

  return (
    <>
    {
      Auth.getProfile().data.isCoach && (
        <CoachHeader>
          <EventForm/>
        </CoachHeader>
      )
    }
    </>
  )
}

export default CreateEvent;