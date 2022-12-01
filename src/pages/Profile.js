import React from 'react';
import Main from '../components/Main';
import { Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';
import { Typography, Button, FormControl, InputLabel, OutlinedInput } from '@mui/material/';
import '../scss/pages/profile.scss'

const Profile = () => {
    const [user, setUser] = React.useState({
        fname: 'Ross',
        lname: 'Geller',
        email: 'gellerross@avionics.edu',
        dob: '10/05/1999',
        gend: 'Male',
        edu: 'Masters in Engineering',
        phone: '909-789-9876',
        facts: "Some fun facts about me...."
    });

    const [disabled, setDisabled] = React.useState(true); 

    const handleChange = (event) => {
        const {name, value} = event.target;
        let temp = {};
        if (name === 'name'){
            const fullname= value.split(' ');
            temp = Object.assign({}, user, { 'fname': fullname[0], 'lname': fullname[1] });
        }
        else {
            temp = Object.assign({}, user, { [name]: value });
        }
        setUser(temp);
        
    }
    
    return (
        <Main
            title="Profile"
            description="User profile page"
        >
            <Grid container direction='row'>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="100%"
                            image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
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
                                    value={user.fname.concat(' ', user.lname)}
                                    label="Full Name"
                                    name='name'
                                    onChange={handleChange}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={user.email}
                                    label="Email"
                                    name='email'
                                    onChange={handleChange}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Date Of Birth</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={user.dob}
                                    label="DOB"
                                    name='dob'
                                    onChange={handleChange}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Gender</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={user.gend}
                                    label="Gender"
                                    name='gend'
                                    onChange={handleChange}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }} >
                                <InputLabel htmlFor="outlined-adornment-amount">Education</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={user.edu}
                                    label="Education"
                                    name='edu'
                                    onChange={handleChange}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Phone Number</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={user.phone}
                                    label="Phone"
                                    name='phone'
                                    onChange={handleChange}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">About me</InputLabel>
                                <OutlinedInput
                                    id="outlined-multiline-static"
                                    label="About Myself"
                                    maxRows={4}
                                    name='facts'
                                    onChange={handleChange}
                                    multiline={true}
                                    defaultValue="Default Value"
                                    value={user.facts}
                                    disabled={disabled}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "black",
                                            padding: "25px"
                                        },
                                    }}
                                />
                            </FormControl>
                            {!disabled && (
                                <div style={{alignItems:'center'}}>
                                <Button variant='contained' onClick={() => setDisabled(true)}>Save</Button>
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
