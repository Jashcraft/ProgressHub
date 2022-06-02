import React from 'react';
import Auth from '../../utils/auth';
import ClientHeader from '../Dashboard/Client/ClientHeader';
import CoachHeader from '../Dashboard/Coach/CoachHeader';
import AllEvents from './AllEvents';

const AllEventsWithHeader = () => {
  if(!Auth.loggedIn()){
    window.location.replace('/');
  }
  return (
    <>
      {Auth.getProfile().data.isCoach ? <CoachHeader><AllEvents/></CoachHeader> : <ClientHeader><AllEvents/></ClientHeader>}
    </>
  )
}

export default AllEventsWithHeader