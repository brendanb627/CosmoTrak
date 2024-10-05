import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import StormIcon from '@mui/icons-material/Storm';
import PublicIcon from '@mui/icons-material/Public';
import QuizIcon from '@mui/icons-material/Quiz';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

export const PageLayout = ({selectedPage}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      height: '1px',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const DirectToGames = () => {
    navigate('/trivia');
  };

  const DirectToHome = () => {
    navigate('/home');
  };

  const DirectToOrrery = () => {
    navigate('/orrery');
  };

  const DirectToAboutUs = () => {
    navigate('/about-us');
  };

  const DirectToSupport = () => {
    navigate('/support');
  };

  return (
    <div className='topsidebar'>
      <Drawer variant="permanent" open={open} sx={{ backgroundColor: 'primary', '& .MuiDrawer-paper': { borderRadius: '10px' } }} anchor="left 1vh">
        <DrawerHeader sx={{height: '80px'}}>
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen} sx={{marginRight: '8%'}}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
        {selectedPage === 'Home' ? (
            <ListItem key="Home" disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
                onClick={DirectToHome}
              >
                <ListItemIcon
                  sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}
                >
                  <HomeIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            ) : null}
          <ListItem key="Orrery" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
              onClick={DirectToOrrery}
            >
              <ListItemIcon
                sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}
              >
                <StormIcon sx={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Orrery" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key="Planet List" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
            >
              <ListItemIcon
                sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}
              >
                <PublicIcon sx={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Planet List" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="Planet Trivia" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
              onClick={DirectToGames}
            >
              <ListItemIcon
                sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}
              >
                <VideogameAssetIcon sx={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Space Games" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="About Us" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
              onClick={DirectToAboutUs}
            >
              <ListItemIcon
                sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}
              >
                <InfoIcon sx={{ color: '#ffffff' }}/>
              </ListItemIcon>
              <ListItemText primary="About Us" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key="Support" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
              onClick={DirectToSupport}
            >
              <ListItemIcon
                sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}
              >
                <HelpIcon sx={{color: '#ffffff'}}/>
              </ListItemIcon>
              <ListItemText primary="Support" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
