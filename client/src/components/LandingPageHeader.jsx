import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonGroup } from '@mui/material';
import './Hero/style.css'
import Auth from '../utils/auth';

const navButtons = [{ text: "Our Mission", link: "#our-mission" }, { text: "Featured Leaders", link: "#featured-leaders" }, { text: "Testimonials", link: "#testimonials" }, { text: "Contact Us", link: "#contact-us" }]

const LandingPageHeader = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '10vh' }}>
      <AppBar position="static" sx={{ borderColor: '#fce138', borderStyle: 'solid', borderRadius: '50px', backgroundColor: "#024e76" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#00A36C' }}>
            <span style={{ color: '#fce138' }}>Progress</span>Hub
          </Typography>
          <ButtonGroup>
            {navButtons.map(button => (
              <Button key={button.link} href={button.link} variant="contained" sx={{ borderRadius: '20px', mr: '5px', backgroundColor: '#fce138', color: '#024e76' }}>{button.text}</Button>
            ))}
          </ButtonGroup>

          {Auth.loggedIn() ? (
            <Button onClick={Auth.logout} sx={{ borderRadius: '20px', backgroundColor: '#00A36C', color: '#fff' }} href='/'>Log Out</Button>
          ) : (
            <Button sx={{ borderRadius: '20px', backgroundColor: '#00A36C', color: '#fff' }} href='/login'>Login</Button>
          )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default LandingPageHeader