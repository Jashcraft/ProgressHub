import * as React from 'react';
import AvatarSection from '../AvatarSection';
import Events from '../Events';
import InfoSection from '../InfoSection';
import Profile from '../Profile';
import ClientHeader from './ClientHeader';


const ClientDashboard = () => {
  return (
      <ClientHeader>
        <Profile infoSection={<InfoSection/>} avatarSection={<AvatarSection/>} eventSection={<Events/>}></Profile>
      </ClientHeader>
  )
}

export default ClientDashboard;