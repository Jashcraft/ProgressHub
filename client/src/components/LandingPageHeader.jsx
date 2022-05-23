import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonGroup } from '@mui/material';

const navButtons = [{text: "Our Mission", link: "#our-mission"},{text: "Featured Leaders", link: "#featured-leaders"}, {text: "Testimonials", link: "#testimonials"}, {text: "Contact Us", link: "#contact-us"}]

const LandingPageHeader = () => {
  return (
    <Box sx={{ flexGrow: 1, height:'10vh'}}>
      <AppBar position="static" sx={{backgroundColor: "#024e76"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ProgressHub
          </Typography>
          <ButtonGroup>
            {navButtons.map(button => (
              <Button key={button.link} href={button.link} variant="contained" color="secondary">{button.text}</Button>
            ))}
          </ButtonGroup>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default LandingPageHeader