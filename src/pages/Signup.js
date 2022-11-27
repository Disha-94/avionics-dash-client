import React from 'react';
import { useNavigate } from "react-router-dom";
import moment from 'moment'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import WcIcon from '@mui/icons-material/Wc';
import "../scss/pages/signup.scss"
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = React.useState({
        fname: '',
        lname: '',
        email: '',
        pwd: '',
        confPwd: '',
        dob: '',
        gend: '',
        addr: '',
        phone: ''
    })
    const [error, setError] = React.useState({
        password: '',
        email: '',
        date: '',
        phone: ''
    });
    const [alert, setAlert] = React.useState({
        set: false,
        password: false,
        email: false,
        date: false,
        phone: false
    });

    const handleTextChange = (event, field) => {
        const { name, value } = event.target;
        const temp = Object.assign({}, user, { [name]: value });
        setUser(temp);
    }

    const handleSelectChange = (val) => {
        let newVal;
        if (val === 'F')
            newVal = 'Female';
        else if (val === 'M')
            newVal = 'Male';
        else newVal = 'Other';
        const temp = Object.assign({}, user, { gend: newVal });
        setUser(temp);
    }

    const handleSave = (e) => {
        e.preventDefault();
        validateInput('confPwd', user.confPwd);
        validateInput('email', user.email);
        validateInput('dob', user.dob);
        validateInput('phone', user.phone);
        if (!alert.set) {
            console.log('alert', alert);
            navigate("/");
        }
    }

    const handleAlertClose = (e, val) => {
        setAlert({ ...alert, [val]: false, set: false })
    }

    const validateInput = (name, value) => {
        console.log('name', name);
        console.log('value', value);
        setError(error => {
            const stateObj = { ...error, [name]: "" };

            switch (name) {
                case "confPwd":
                    if (!value) {
                        stateObj["password"] = "Please Re-Enter the Password.";
                        const temp = Object.assign({}, alert, { set: true, password: true });
                        setAlert(temp);
                    } else if (user.pwd && value !== user.pwd) {
                        stateObj["password"] = "Password and Confirm Password does not match.";
                        const temp = Object.assign({}, alert, { set: true, password: true });
                        setAlert(temp);
                        console.log('camepass', stateObj, "\n", alert);
                    }
                    break;

                case "email":
                    if (!value) {
                        stateObj["email"] = "Email ID is required";
                        const temp = Object.assign({}, alert, { set: true, email: true });
                        setAlert(temp);
                    } else if (moment(value, 'Dd-MM-YYYY').isValid()) {
                        console.log('cameemail', name);
                        stateObj["email"] = "Invalid Email ID";
                        const temp = Object.assign({}, alert, { set: true, email: true });
                        setAlert(temp);
                    }
                    break;

                case "dob":
                    if (!value) {
                        stateObj["dob"] = "Date of Birth is required";
                        const temp = Object.assign({}, alert, { set: true, dob: true });
                        setAlert(temp);
                    } else if (!(/\S+@\S+\.\S+/.test(value))) {
                        console.log('camedob', name);
                        stateObj["dob"] = "Date must follow format: DD-MM-YYYY.";
                        const temp = Object.assign({}, alert, { set: true, dob: true });
                        setAlert(temp);
                    }
                    break;

                case "phone":
                    if (!value) {
                        stateObj["phone"] = "Phone Number is required";
                        const temp = Object.assign({}, alert, { set: true, phone: true });
                        setAlert(temp);
                    } else if (!(/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/).test(value)) {
                        console.log('phone', name);
                        stateObj["phone"] = "Phone Number must follow format: XXX-XXX-XXXX";
                        const temp = Object.assign({}, alert, { set: true, phone: true });
                        setAlert(temp);
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }

    return (
        <Grid className='signGrid'>
            <Paper elevation={10} className='signPaper'>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    {alert.password && <Alert onClose={e => handleAlertClose(e, 'password')} severity="error">{error.password}</Alert>}
                    {alert.email && <Alert onClose={e => handleAlertClose(e, 'email')} severity="error">{error.email}</Alert>}
                    {alert.dob && <Alert onClose={e => handleAlertClose(e, 'dob')} severity="error">{error.dob}</Alert>}
                    {alert.phone && <Alert onClose={e => handleAlertClose(e, 'phone')} severity="error">{error.phone}</Alert>}
                </Stack>
                <Grid align='center'>
                    <Avatar><PersonAddAltRoundedIcon /></Avatar>
                    <h2>New User</h2>
                </Grid>
                <FormControl fullWidth>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PersonIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            label='First Name'
                            placeholder='Enter First Name'
                            name='fname'
                            value={user.fname}
                            onChange={handleTextChange}
                            fullWidth required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PersonIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            label='Last Name'
                            placeholder='Enter Last Name'
                            name='lname'
                            value={user.lname}
                            onChange={handleTextChange}
                            fullWidth required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <EmailIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            label='Email'
                            placeholder='Enter Email'
                            name='email'
                            value={user.email}
                            onChange={handleTextChange}
                            fullWidth required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <VpnLockIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            label='Password'
                            placeholder='Enter Password'
                            type='password'
                            name='pwd'
                            value={user.pwd}
                            onChange={handleTextChange}
                            fullWidth required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <VpnLockIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            label='Confirm Password'
                            placeholder='Re-Enter Password'
                            type='password'
                            name='confPwd'
                            value={user.confPwd}
                            onChange={handleTextChange}
                            fullWidth required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <CalendarMonthIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            label='Date Of Birth'
                            placeholder='MM-DD-YYYY'
                            name='dob'
                            value={user.dob}
                            onChange={handleTextChange}
                            fullWidth required />
                        <WcIcon className='signIcon' />
                        <Select
                            placeholder='Enter Gender'
                            defaultValue={user.gend}
                            label="Gender"
                            onChange={e => handleSelectChange(e.target)}
                        >
                            <MenuItem key={0} value={''}>Select Gender</MenuItem>
                            <MenuItem key={1} value={'F'}>Female</MenuItem>
                            <MenuItem key={2} value={'M'}>Male</MenuItem>
                            <MenuItem key={3} value={'O'}>Other</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <HomeIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            label='Address'
                            placeholder='Enter Address'
                            name='addr'
                            value={user.addr}
                            onChange={handleTextChange}
                            fullWidth required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <ContactPhoneIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            label='Phone Number'
                            placeholder='XXX-XXX-XXXX'
                            name='phone'
                            value={user.phone}
                            onChange={handleTextChange}
                            fullWidth required />
                    </Box>
                    <Button
                        component={Link} to="/"
                        type='submit'
                        color='primary'
                        variant="contained"
                        className='btnstyle'
                        onClick={handleSave}
                        fullWidth>
                        Continue
                    </Button>
                </FormControl>
            </Paper>
        </Grid>
    )
}

export default Signup