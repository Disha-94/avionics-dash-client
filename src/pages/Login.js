import React from 'react';
import { loginUser, getUser } from '../data/api';
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import "../scss/pages/login.scss"
import { Link } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const styles = {
    gridContainer: {
        backgroundImage: `url(${'/background1.jpeg'})`
    },
    dialogTitle: {
        fontWeight: '700',
        backgroundColor: '#1976d2',
        color: 'white'
    },
    dialogExp: {
        color: "black",
        marginTop: "10px"
    }
};

const Login = (props) => {
    const navigate = useNavigate();
    const [login, setLogin] = React.useState({
        email: '',
        pwd: ''
    })
    const [error, setError] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [forgot, setForgot] = React.useState({
        email: '',
        phoneNumber: ''
    })

    React.useEffect(() => {
        if (props.token !== '') {
            getUser(login.email, props.token).then(usr => {
                if (usr.data) {
                    props.handleUser(usr.data['role'], usr.data);
                    navigate("/programs");
                }
            });
        }
        // eslint-disable-next-line
    }, [props.token])

    const handleTextChange = (event) => {
        error && setError(false);
        const { name, value } = event.target;
        const temp = Object.assign({}, login, { [name]: value });
        setLogin(temp);
    }

    const handleForgotChange = (event) => {
        error && setError(false);
        const { name, value } = event.target;
        const temp = Object.assign({}, forgot, { [name]: value });
        setForgot(temp);
    }

    const handleLogin = () => {
        loginUser(login).then(value => {
            if (value.token) {
                props.setToken(value.token);
            }
            else if((value.status+'').includes('4') || value.data.error_message){
                setError(true);
            }
        });
    }

    const handleDone = () => {
        if (forgot.email === props.user.email && forgot.phoneNumber === props.user.phoneNumber) {
            setOpen(false);
            error && setError(false);
            navigate("/");
        } else setError(true);
    };

    const handleCancel = () => {
        error && setError(false);
        setOpen(false);
        setForgot({
            email: '',
            phoneNumber: ''
        });
    }

    return (
        <Grid style={styles.gridContainer}>
            <Paper elevation={10} className='loginPaper'>
                <Grid className='loginInnerGrid' align='center'>
                    <Avatar><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon className='loginIcon' />
                    <TextField
                        error={error}
                        className='txtfld'
                        label='Email'
                        placeholder='Enter Email'
                        onChange={handleTextChange}
                        name='email'
                        helperText={error && "Incorrect Email/Password"}
                        fullWidth
                        required />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <VpnLockIcon className='loginIcon' />
                    <TextField
                        error={error}
                        className='txtfld'
                        label='Password'
                        placeholder='Enter Password'
                        type='password'
                        name='pwd'
                        helperText={error && "Incorrect Email/Password"}
                        onChange={handleTextChange}
                        fullWidth
                        required />
                </Box>
                <Button onClick={handleLogin} type='submit' color='primary' variant="contained" className='btnstyle' fullWidth>
                    Continue
                </Button>
                <Button variant="outlined" component={Link} to='/' fullWidth>Home</Button>
                <Typography component={'div'} className='loginTypo' >
                    <Link onClick={() => {
                        setOpen(true);
                        error && setError(false);
                    }}>
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
                        error={error}
                        autoFocus
                        margin="dense"
                        label="Email Address"
                        onChange={handleForgotChange}
                        helperText={error && "Incorrect Email/Phone Number"}
                        name='email'
                        fullWidth
                        required
                        variant="standard"
                    />
                    <TextField
                        error={error}
                        autoFocus
                        margin="dense"
                        label="Phone Number"
                        name='phoneNumber'
                        onChange={handleForgotChange}
                        helperText={error && "Incorrect Email/Phone Number"}
                        fullWidth
                        required
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