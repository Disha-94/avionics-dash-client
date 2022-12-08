import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FolderIcon from '@mui/icons-material/Folder';
import CampaignIcon from '@mui/icons-material/Campaign';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import routes from './routes';
import { Link } from 'react-router-dom';

const MainListItems = (props) => {
  const {userType, userReg} = props;
  return (
    <React.Fragment>
      {routes.filter((l) => l.index).map((l) => {
        return (
          <List key={l.label}>
            <ListItemButton component={Link} to="/" key={1}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            {userType === 'v' && <ListItemButton component={Link} to="/login" key={2}>
              <ListItemIcon>
                <LockOpenIcon />
              </ListItemIcon>
              <ListItemText primary="Login/SignUp" />
            </ListItemButton>}
            {userType !== 'v' && 
              <ListItemButton component={Link} to="/profile" key={7}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </ListItemButton>}
            <ListItemButton component={Link} to="/programs" key={3}>
              <ListItemIcon>
                <SubscriptionsIcon />
              </ListItemIcon>
              <ListItemText primary="Programs" />
              <div className="font-icon-wrapper" onClick={(e) => props.handleClick(e, 'p')}>
               {userType !== 'v' && userReg ? props.openProg ? <ExpandLess /> : <ExpandMore />: ''}
              </div>
            </ListItemButton>
            {userType !== 'v' && userReg &&<Collapse in={props.openProg} timeout="auto" unmountOnExit>
              <ListItemButton component={Link} to={userType === 's' ? "/courseStudent" : "/courseInstructor"}  key={4}>
                <ListItemIcon>
                  <ViewModuleIcon />
                </ListItemIcon>
                <ListItemText primary="My Course" />
              </ListItemButton>
            </Collapse>}
            <ListItemButton component={Link} to="/files" key={5}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Files" />
            </ListItemButton>
            <ListItemButton component={Link} to="/discussions" key={6}>
              <ListItemIcon>
                <CampaignIcon />
              </ListItemIcon>
              <ListItemText primary="Discussion" />
            </ListItemButton>
          
            </List>)
      })}
    </React.Fragment>
  );
}

export default MainListItems;