import React from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import Box from '@mui/material/Box';
//import MenuItem from '@mui/material/MenuItem';
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
//import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const styles = {
    gridContainer: {
        backgroundImage: `url(${'/background2.jpeg'})`
    }
};

const Signup = (props) => {
    const { handleUser, setUserList } = props;
    const navigate = useNavigate();

    const [user, setUser] = React.useState({
        fname: '',
        lname: '',
        email: '',
        pwd: '',
        confPwd: '',
        dob: '',
        gend: 'NA',
        addr: '',
        phone: '',
        uid: props.userLength + 1,
        userType: 's',
        cid: [],
        edu: 'Masters in Engineering',
        facts: "Some fun facts about me...."

    });
    const [error] = React.useState({
        password: 'Password Mismatch',
        email: 'Incorrect Email Format',
        nullError: {
            fname: 'First Name is Required',
            lname: 'Last Name is Required',
            email: 'Email is Required',
            pwd: 'Please Enter the Password',
            confPwd: 'Please Re-Enter the Password',
            dob: 'Date of Birth is Required',
        }
    });

    const [alert, setAlert] = React.useState({
        email: false,
        password: false,
        nullError: {
            fname: false,
            lname: false,
            email: false,
            pwd: false,
            confPwd: false,
            dob: false,
        }
    });

    const handleTextChange = (event) => {
        const { name, value } = event.target;
        const temp = Object.assign({}, user, { [name]: value });
        setUser(temp);
        if (alert.nullError[name]) setAlert(curr => ({ ...curr, nullError: { ...curr.nullError, [name]: false } }));
        if (name === 'email' && alert['email']) setAlert(curr => ({ ...curr, email: false }));
        if ((name === 'pwd' || name === 'confPwd') && alert['password']) setAlert(curr => ({ ...curr, password: false }));
    }

    const handleSelectChange = (event) => {
        let newVal;
        if (event.target.value === 'F')
            newVal = 'Female';
        else if (event.target.value === 'M')
            newVal = 'Male';
        else newVal = 'Other';
        const temp = Object.assign({}, user, { gend: newVal });
        setUser(temp);
    }

    const handleSave = (e) => {
        const nullValue = checkForEmptyFields();
        const InvalidValue = validateInput();
        if (!nullValue && !InvalidValue) {
            setUserList([...props.userList, { ...user }]);
            handleUser('s', user);
            navigate("/profile");
        }
    }

    const checkForEmptyFields = () => {
        let nullValue = false;
        ['fname', 'lname', 'email', 'pwd', 'confPwd', 'dob'].forEach(el => {
            if (!user[el]) {
                let nullErr = alert.nullError;
                nullErr[el] = true;
                setAlert(curr => ({ ...curr, nullError: nullErr }));
                if (!nullValue) nullValue = true;
            }
        });
        return nullValue;
    }
    const validateInput = () => {
        let InvalidValue = false;
        if (user.pwd && user.confPwd && user.pwd !== user.confPwd) {
            setAlert(curr => ({ ...curr, password: true }));
            if (!InvalidValue) InvalidValue = true;
        }
        if (!alert['nullError']['email'] && !user['email'].match(/\S+@\S+\.\S+/)) {
            setAlert(curr => ({ ...curr, email: true }));
            if (!InvalidValue) InvalidValue = true;
        }
        return InvalidValue;
    }

    return (
        <Grid className='signGrid' style={styles.gridContainer}>
            <Paper elevation={10} className='signPaper'>
                <Grid align='center'>
                    <Avatar><PersonAddAltRoundedIcon /></Avatar>
                    <h2>New User</h2>
                </Grid>
                <FormControl fullWidth>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PersonIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            error={alert.nullError.fname}
                            label='First Name'
                            placeholder='Enter First Name'
                            name='fname'
                            value={user.fname}
                            onChange={(e) => handleTextChange(e)}
                            helperText={alert.nullError.fname && error.nullError.fname}
                            fullWidth
                            required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PersonIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            error={alert.nullError.lname}
                            label='Last Name'
                            placeholder='Enter Last Name'
                            name='lname'
                            value={user.lname}
                            onChange={(e) => handleTextChange(e)}
                            helperText={alert.nullError.lname && error.nullError.lname}
                            fullWidth
                            required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <EmailIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            error={alert.nullError.email || alert.email}
                            label='Email'
                            placeholder='Enter Email'
                            name='email'
                            value={user.email}
                            onChange={(e) => handleTextChange(e)}
                            helperText={(alert.nullError.email && error.nullError.email) || (alert.email && error.email)}
                            fullWidth
                            required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <VpnLockIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            error={alert.nullError.pwd || alert.password}
                            label='Password'
                            placeholder='Enter Password'
                            type='password'
                            name='pwd'
                            value={user.pwd}
                            onChange={(e) => handleTextChange(e)}
                            helperText={(alert.nullError.pwd && error.nullError.pwd) || (alert.password && error.password)}
                            fullWidth
                            required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <VpnLockIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            error={alert.nullError.confPwd || alert.password}
                            label='Confirm Password'
                            placeholder='Re-Enter Password'
                            type='password'
                            name='confPwd'
                            value={user.confPwd}
                            onChange={(e) => handleTextChange(e)}
                            helperText={(alert.nullError.confPwd && error.nullError.confPwd) || (alert.password && error.password)}
                            fullWidth required />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <CalendarMonthIcon className='signIcon' />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                className='signTxtfld'

                                label="Date Of Birth"
                                value={user.dob || null}
                                placeholder='MM-DD-YYYY'
                                onChange={(date) => {
                                    setUser(prevState => ({ ...prevState, dob: (date['$d'].getMonth() + 1) + '/' + date['$d'].getDate() + '/' + date['$d'].getFullYear() }));
                                    if (alert.nullError['dob']) setAlert(curr => ({ ...curr, nullError: { ...curr.nullError, dob: false } }));
                                }}
                                renderInput={(params) => <TextField {...params} error={alert.nullError.dob} helperText={alert.nullError.dob && error.nullError.dob} />}
                                required
                            />
                        </LocalizationProvider>
                        <WcIcon className='signIcon' />

                        <NativeSelect
                            className='signTxtfld'
                            placeholder='Enter Gender'
                            label="Gender"
                            onChange={(e) => handleSelectChange(e)}
                        >
                            <option value={'NA'}>Select</option>
                            <option value={'F'}>Female</option>
                            <option value={'M'}>Male</option>
                            <option value={'O'}>Other</option>
                        </NativeSelect>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <HomeIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            label='Address'
                            placeholder='Enter Address'
                            name='addr'
                            value={user.addr}
                            onChange={(e) => handleTextChange(e)}
                            fullWidth />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <ContactPhoneIcon className='signIcon' />
                        <TextField
                            className='signTxtfld'
                            label='Phone Number'
                            placeholder='XXX-XXX-XXXX'
                            name='phone'
                            value={user.phone}
                            onChange={(e) => handleTextChange(e)}
                            fullWidth />
                    </Box>
                    <Button
                        type='submit'
                        color='primary'
                        variant="contained"
                        className='btnstyle'
                        onClick={(e) => handleSave(e)}
                        fullWidth>
                        Continue
                    </Button>
                    <Button component={Link} to='/'>Home</Button>
                </FormControl>
            </Paper>
        </Grid>
    )
}

export default Signup