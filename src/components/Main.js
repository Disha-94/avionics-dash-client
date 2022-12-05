import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
//import Container from '@mui/material/Container';
//import Grid from '@mui/material/Grid';
//import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import MainListItems from '../data/listItems';
import ScrollToTop from './ScrollToTop';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: '#c4d2d5',
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

const Main = (props) => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    openNot: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, openNot } = state;
  const [logout, setLogout] = React.useState(false);

React.useEffect(() => {
  if(logout) {
    props.setUserType('v');
    navigate('/');
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[logout]);

  const handleNotClick = (newState) => () => {
    setState({ openNot: true, ...newState });
  };

  const handleNotClose = () => {
    setState({ ...state, openNot: false });
  };
  const [open, setOpen] = React.useState(true);
  const [openProf, setOpenProf] = React.useState(false);
  const [openProg, setOpenProg] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClick = (e, val) => {
    e.preventDefault();
    val === 'd' ? setOpenProf(!openProf) : setOpenProg(!openProg);
  };


  return (
    <HelmetProvider>
         <ScrollToTop />
         <Helmet titleTemplate="%s | Avionics Dash" defaultTitle="Avionics Dash" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>

    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Avionics Dash
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={'0'} color="secondary">
                <NotificationsIcon  onClick={handleNotClick({
          vertical: 'top',
          horizontal: 'right',
        })}/>
              </Badge>
            </IconButton>
           {props.userType !== 'v' &&  <Tooltip title="Click to Logout"><IconButton color="inherit" onClick={() => setLogout(true)}>
                <LockTwoToneIcon />
              </IconButton></Tooltip>}
              <Snackbar open={logout} autoHideDuration={6000} onClose={() => setLogout(false)}>
        <Alert onClose={() => setLogout(false)} severity="success" sx={{ width: '100%' }}>
          You have successfully logged out!
        </Alert>
      </Snackbar>
            <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={6000}
        open={openNot}
        onClose={handleNotClose}
        message="You have 0 notifications"
        key={vertical + horizontal}
      />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
        <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '-190px',
                ...(!open && { visibility: 'hidden'}),
              }}
            >
             <ChevronLeftIcon />
            </IconButton>
          <Divider />
          <List component="nav">
            <MainListItems 
            userType = {props.userType}
            handleClick={handleClick}
            openProf={openProf}
            openProg={openProg} />
          </List>
        </Drawer>
        <Box
          component="main"
          mt={14}
          ml={2}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[20]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
              {props.children}
        </Box>
      </Box>
    </ThemeProvider>
    </HelmetProvider>
  );
 }

Main.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
  };
  
  Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: 'Avionics Dash Website.',
  };

export default Main;