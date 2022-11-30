import React from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import "../scss/pages/login.scss"
import { Link } from 'react-router-dom';

const Login = () => {

    return(
        <Grid className='loginGrid'>
            <Paper elevation={10} className='loginPaper'>
                <Grid className='loginInnerGrid' align='center'>
                     <Avatar><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon className='loginIcon'/>
                    <TextField className='txtfld' label='Username' placeholder='Enter username' fullWidth required/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <VpnLockIcon className='loginIcon'/>
                    <TextField className='txtfld' label='Password' placeholder='Enter password' type='password' fullWidth required/>
                </Box>
                <Button component={Link} to="/" type='submit' color='primary' variant="contained" className='btnstyle' fullWidth>
                    Conitnue
                </Button>
                <Typography className='loginTypo' >
                     <Link to="/" >
                        Forgot password ? 
                </Link>
                </Typography>
                <Typography className='loginTypo'> {`New User ? `}
                     <Link to="/signup" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login