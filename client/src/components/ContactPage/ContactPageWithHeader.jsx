import * as React from 'react';
import Auth from '../../utils/auth'
import ClientHeader from '../Dashboard/Client/ClientHeader';
import CoachHeader from '../Dashboard/Coach/CoachHeader';
import LandingPageHeader from '../LandingPageHeader';
import ContactPage from './ContactPage';

const ContactPageWithHeader = () => {
  if(!Auth.loggedIn){
    return <><LandingPageHeader/><ContactPage/></>
  }

  return (
    <>
    {Auth.getProfile().data.isCoach ? <CoachHeader><ContactPage/></CoachHeader> : <ClientHeader><ContactPage/></ClientHeader>}
    </>
  )
}

export default ContactPageWithHeader;