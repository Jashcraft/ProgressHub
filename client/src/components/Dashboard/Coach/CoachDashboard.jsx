import * as React from 'react';
import AvatarSection from '../AvatarSection';
import Events from '../Events';
import InfoSection from '../InfoSection';
import Profile from '../Profile';
import CoachHeader from './CoachHeader';


const CoachDashboard = () => {
  return (
      <CoachHeader>
        <Profile infoSection={<InfoSection/>} avatarSection={<AvatarSection/>} eventSection={<Events/>}></Profile>
      </CoachHeader>
  )
}

export default CoachDashboard;