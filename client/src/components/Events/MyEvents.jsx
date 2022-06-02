import * as React from 'react';
import CoachHeader from '../Dashboard/Coach/CoachHeader';
import EventSelection from './EventSelection';
import Auth from '../../utils/auth'
import ClientHeader from '../Dashboard/Client/ClientHeader';

const MyEvents = () => {
  if(!Auth.loggedIn()){
    window.location.replace('/login')
  }
  return(
    <>
      {Auth.getProfile().data.isCoach ? (
        <CoachHeader>
          <EventSelection/>
        </CoachHeader>
      ) : (
        <ClientHeader>
          <EventSelection/>
        </ClientHeader>
      )}
    </>

  )
}


export default MyEvents;