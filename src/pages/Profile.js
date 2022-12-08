import React from 'react';
import Main from '../components/Main';
import { Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';
import { Typography, Button, FormControl, InputLabel, OutlinedInput } from '@mui/material/';
import '../scss/pages/profile.scss'

const Profile = (props) => {
    const [user, setUser] = React.useState({
        id: props.id || 0,
        firstName: props.user.firstName || 'Ross',
        lastName: props.user.lastName || 'Geller',
        email: props.user.email || 'gellerross@avionics.edu',
        pwd: props.user.pwd,
        confPwd: props.user.confPwd,
        dob: props.user.dob || '12/12/1994',
        gender: props.user.gender || 'M',
        addr: props.user.addr || '',
        education: props.user.education || 'Masters in Engineering',
        phoneNumber: props.user.phoneNumber || '',
        facts: props.user.facts || "Some fun facts about me....",
        userType: props.user.userType,
        course_ids: props.user.course_ids
    });

    const [gend, setGend] = React.useState(props.user.gender === 'M' ? 'Male' : props.user.gender === 'F' ? 'Female' : 'Other');

    const [disabled, setDisabled] = React.useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        let temp = {};
        if (name === 'name') {
            const fullname = value.split(' ');
            temp = Object.assign({}, user, { 'firstName': fullname[0], 'lastName': fullname[1] });
        }
        else if (name === 'gend') {
            setGend(value);
            const gender = (value === 'Male' || value === 'male' || value === 'MALE') ? 'M' :
                (value === 'Female' || value === 'female' || value === 'FEMALE') ? 'F' : 'O';
            temp = Object.assign({}, user, { gender: gender });
        }
        else {
            temp = Object.assign({}, user, { [name]: value });
        }
        setUser(temp);

    }

    const handleSave = (e) => {
        e.preventDefault();
        props.handleUser(user.userType, user);
        setDisabled(true);
    }

    return (
        <Main
            title="Profile"
            description="User profile page"
            userType={props.userType}
            userReg={props.userReg}
            setUserType={props.setUserType}
        >
            <Grid container direction='row'>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={user.gender !== 'F' ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" : "/female.jpeg"}
                            alt="green iguana"
                        />
                        <CardContent className='profpic'>
                            <Typography gutterBottom variant="h4" component="div" className='typo'>
                                Profile Picture
                            </Typography>
                        </CardContent>
                        <CardActions className='editprof'>
                            <Button size="large" endIcon={<EditIcon />} onClick={() => setDisabled(false)}>
                                Edit Profile
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Card>
                        <CardContent className='profpic'>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Full Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={user.firstName.concat(' ', user.lastName)}
                                    label="Full Name"
                                    name='name'
                                    onChange={(e) => handleChange(e)}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={user.email}
                                    label="Email"
                                    name='email'
                                    onChange={(e) => handleChange(e)}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Date Of Birth</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={user.dob}
                                    label="DOB"
                                    name='dob'
                                    onChange={(e) => handleChange(e)}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Gender</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={gend}
                                    label="Gender"
                                    name='gend'
                                    onChange={(e) => handleChange(e)}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }} >
                                <InputLabel htmlFor="outlined-adornment-amount">Education</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={user.education}
                                    label="Education"
                                    name='education'
                                    onChange={(e) => handleChange(e)}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Phone Number</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={user.phoneNumber}
                                    label="Phone"
                                    name='phoneNumber'
                                    onChange={(e) => handleChange(e)}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">About me</InputLabel>
                                <OutlinedInput
                                    id="outlined-multiline-static"
                                    label="About Myself"
                                    name='facts'
                                    onChange={(e) => handleChange(e)}
                                    multiline={false}
                                    //rows={4}
                                    value={user.facts}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                    fullWidth
                                />
                            </FormControl>
                            {!disabled && (
                                <div style={{ alignItems: 'center' }}>
                                    <Button variant='contained' onClick={(e) => handleSave(e)}>Save</Button>
                                    <Button onClick={() => setDisabled(true)}>Cancel</Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Main>
    );
}

export default Profile;
