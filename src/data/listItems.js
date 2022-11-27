import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChatIcon from '@mui/icons-material/Chat';
import FolderIcon from '@mui/icons-material/Folder';
import AssignmentIcon from '@mui/icons-material/Assignment';
import routes from './routes';
import { Link } from 'react-router-dom';

let openDis = false;
let openProg = false;

  const handleClick = (val) => {
    val === 'p' ? openDis = !openDis : openProg = !openProg;
  };


export const mainListItems = (
  <React.Fragment>
    {routes.filter((l) => l.index).map((l) => {
      return(
        <>
    <ListItemButton component={Link} to="/" key={1}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton component={Link} to="/login" key={2}>
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
      <ListItemText primary="Login/SignUp" />
    </ListItemButton>
    <ListItemButton component={Link} to="/programs" onClick={() => handleClick('p')} key={3}>
      <ListItemIcon>
        <SubscriptionsIcon />
      </ListItemIcon>
      <ListItemText primary="Programs"/>
      {openProg ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={openDis} timeout="auto" unmountOnExit>
      <ListItemButton component={Link} to="/courses" key={4}>
        <ListItemIcon>
          <ChatIcon />
        </ListItemIcon>
        <ListItemText primary="My Course" />
      </ListItemButton>
    </Collapse>
    <ListItemButton component={Link} to="/files" key={5}>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="Files" />
    </ListItemButton>
    <ListItemButton component={Link} to="/discussions" onClick={() => handleClick('d')} key={6}>
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
      <ListItemText primary="Discussion" />
      {openDis ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton> 
    <Collapse in={openDis} timeout="auto" unmountOnExit>
      <ListItemButton component={Link} to="/inbox" key={7}>
        <ListItemIcon>
          <ChatIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>
    </Collapse>
    </>)})}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
