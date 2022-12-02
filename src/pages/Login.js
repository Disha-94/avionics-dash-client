import React from 'react';
import { useNavigate } from "react-router-dom";
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import "../scss/pages/login.scss"
import { Link } from 'react-router-dom';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

const styles = {
    gridContainer: {
        backgroundImage: `url(${'/background1.jpeg'})`
    },
    dialogtitle: {
        fontWeight: '700'
    },
    dialogExp: {
        color: "black"
    }
};

const Login = (props) => {
    const navigate = useNavigate();
    const [user] = React.useState({
        fname: 'Rachel',
        lname: 'Green',
        email: 'greenrachel@avionics.edu',
        pwd: 'enpm613',
        confPwd: 'enpm613',
        dob: '11/08/1996',
        gend: 'Female',
        addr: '1234 Campus Drive',
        phone: '123456789'
    }); 
    const [login, setLogin] = React.useState({
        email: '',
        pwd: ''
    })
    const [open, setOpen] = React.useState(false);
    const [forgot, setForgot] = React.useState({
        email: '',
        phone: ''
    })

    const handleTextChange = (event) => {
        const { name, value } = event.target;
        const temp = Object.assign({}, login, { [name]: value });
        setLogin(temp);
    }
    const handleForgotChange = (event) => {
        const { name, value } = event.target;
        const temp = Object.assign({}, forgot, { [name]: value });
        setForgot(temp);
    }

    const handleLogin = () => {
        if(login.email === user.email && login.pwd === user.pwd){
            props.handleUser('s', user);
            props.setUserReg(true);
            navigate("/programs");
        } //else is pendign
    }

    const handleDone = () => {
        if(forgot.email === user.email && forgot.phone === user.phone){
        setOpen(false);
        navigate("/");
        } //else is pending
      };
    
    const handleCancel = () => {
       setOpen(false);
       setForgot({
        email: '',
        phone: ''
    });
    }

    return(
        <Grid style={styles.gridContainer}>
            <Paper elevation={10} className='loginPaper'>
                <Grid className='loginInnerGrid' align='center'>
                     <Avatar><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon className='loginIcon'/>
                    <TextField 
                        className='txtfld' 
                        label='Email' 
                        placeholder='Enter Email' 
                        onChange={handleTextChange} 
                        name='email'
                        fullWidth required/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <VpnLockIcon className='loginIcon'/>
                    <TextField 
                        className='txtfld' 
                        label='Password' 
                        placeholder='Enter Password' 
                        type='password' 
                        name='pwd'
                        onChange={handleTextChange} 
                        fullWidth required/>
                </Box>
                <Button onClick={handleLogin}type='submit' color='primary' variant="contained" className='btnstyle' fullWidth>
                    Conitnue
                </Button>
                <Typography component={'div'} className='loginTypo' >
                     <Link onClick={() => setOpen(true)}>
                        Forgot password ? 
                </Link>
                </Typography>
                <Typography component={'div'} className='loginTypo'> {`New User ? `}
                     <Link to="/signup" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
            <Dialog open={open} onClose={() => setOpen(true)}>
        <DialogTitle style={styles.dialogTitle}>Password Recovery</DialogTitle>
        <DialogContent>
          <DialogContentText style={styles.dialogExp}>
            Please enter your email address to recieve a password-reset link and phone number to recieve a one-time-password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            onChange={handleForgotChange}
            name='email'
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email Phone Number"
            name='phone'
            onChange={handleForgotChange}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button variant='contained' onClick={handleDone}>Done</Button>
        </DialogActions>
      </Dialog>
        </Grid>
    )
}

export default Login