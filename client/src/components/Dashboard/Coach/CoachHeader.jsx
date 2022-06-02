import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import Auth from '../../../utils/auth'
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,

    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),

  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function CoachHeader(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: "#575757" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#024e76" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Grid display="flex" justifyContent="center" width="100%" textAlign="center" >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#00A36C' }}>
              <span style={{ color: '#fce138' }}>Progress</span>Hub
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: "#36454F",
            color: "whitesmoke"
          },

        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "whitesmoke" }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ backgroundColor: "whitesmoke" }} />
        <List>
          {[{value: 'Dashboard', href: "/Dashboard"}, { value: 'Create Event', href: "/create-event" }, { value: 'My Events', href: "/my-events" }, { value: 'Clients', href: "/clients" }].map((navButton, index) => (
            <ListItem key={navButton.value} disablePadding component={Link} to={navButton.href} sx={{color: "whitesmoke"}}>
              <ListItemButton>
                <ListItemIcon>
                  <FitnessCenterRoundedIcon sx={{ color: "whitesmoke" }} />
                </ListItemIcon>
                <ListItemText primary={navButton.value} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: "whitesmoke" }} />
        <List>
          <ListItem disablePadding component={Link} to="/contact-us" sx={{color: "whitesmoke"}}>
            <ListItemButton >
              <ListItemIcon>
                <ContactPageRoundedIcon sx={{ color: "whitesmoke" }} />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{ backgroundColor: "whitesmoke" }} />
        <Grid height="100%" display="flex" flexDirection="column-reverse">
          <List>
            <ListItem key="Log Out" disablePadding>
              <ListItemButton onClick={Auth.logout} href='/'>
                <ListItemIcon>
                  <LogoutRoundedIcon sx={{ color: "whitesmoke" }} />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {props.children}
      </Main>
    </Box>
  );
}
