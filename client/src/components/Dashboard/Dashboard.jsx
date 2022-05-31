import * as React from 'react';
import CoachDashboard from './Coach/CoachDashboard';
import ClientDashboard from './Client/ClientDashboard';
import Auth from '../../utils/auth'


const Dashboard = () => {
  if(!Auth.loggedIn()){
    window.location.replace('/');
  }
  return (
    <>
    {Auth.getProfile().data.isCoach ? (<CoachDashboard/>) : (<ClientDashboard/>)}
    </>
  )
}

export default Dashboard;