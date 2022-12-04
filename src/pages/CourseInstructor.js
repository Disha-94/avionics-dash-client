import React from 'react';
import Main from '../components/Main';
import { Grid, List, ListItem, ListItemText, IconButton, Button, Typography, Tooltip } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Course from '../components/Course';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import PendingActionsTwoToneIcon from '@mui/icons-material/PendingActionsTwoTone';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const styles = {
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


const Deliverable = (props) => {
    const { course, setCourseList, courseList } = props || {};
    const [assign, setAssign] = React.useState([]);
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openGrade, setOpenGrade] = React.useState(false);
    const [newAssign, setNewAssign] = React.useState({
        id: '',
        name: '',
        desc: '',
        due: '',
        points: '',
        submitted: false,
        subDate: 'NA',
        grade: 'NA'
    })

    React.useEffect(() => {
        setAssign([...props.assign]);
    }, [props.assign]);

    const handleCancel = () => {
        setOpenGrade(false);
    }

    const handleGrade = () => {
        setOpenGrade(false);
    };

    const handlebutton = (assignment) => {
        if (assignment.submitted) {
            if (assignment.grade === 'PENDING')
                return (
                    <Tooltip title="Pending Grading">
                        <Button edge="end" variant='contained' onClick={() => setOpenGrade(true)}>
                            Grade Assignment
                        </Button>
                    </Tooltip>
                );
            else if (assignment.grade !== 'NA')
                return (
                    <Tooltip title="Grading Complete">
                        <IconButton edge="end" aria-label="delete">
                            <CheckCircleTwoToneIcon color="success" />
                        </IconButton>
                    </Tooltip>
                );
        } else return (
            <Tooltip title="Assignment In-Progress">
                <IconButton edge="end" aria-label="delete">
                    <PendingActionsTwoToneIcon color="action" />
                </IconButton>
            </Tooltip>
        );
    }

    const handleAssign = (event) => {
        const { name, value } = event.target;
        const temp = Object.assign({}, newAssign, { [name]: value });
        setNewAssign(temp);
    }

    const handleAdd = () => {
        course['assignments'].push(newAssign);
        let updatedCourse = courseList.map(el => {
            if(el.id === course.id)
            return {...el, assignments: course['assignments']};
            else return el;
         } )
         setCourseList([ ...updatedCourse]);
         setOpenAdd(false);
         setTimeout(() => {
            setNewAssign({
                id: '',
                name: '',
                desc: '',
                due: '',
                points: '',
                submitted: false,
                subDate: 'NA',
                grade: 'NA'
            },[3000]);
         })
    }

    const handleNoAdd = () => {
        setOpenAdd(false);
        setNewAssign({
            id: '',
            name: '',
            desc: '',
            due: '',
            points: '',
            submitted: false,
            subDate: 'NA',
            grade: 'NA'
        });
    }

    return (
        <Grid container direction='column'>
            <Grid item container xs={6} alignItems="flex-end" direction="column">
                <IconButton onClick={() => {
                    setOpenAdd(true);
                    //const temp = Object.assign({}, newAssign, { id: course['assignments'].length + 1 });
                    setNewAssign(prevState => ({ ...prevState, id:`a${course['assignments'].length + 1 }`}));
                }}>
                    <AddBoxTwoToneIcon color="primary" sx={{ fontSize: 40, float: 'right' }} />
                </IconButton>
            </Grid>
            {assign && assign.map(item =>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={item.id}>
                    <ListItem
                        alignItems="flex-start"
                        secondaryAction={handlebutton(item)}
                    >
                        <ListItemText
                            primary={`${item.name} - ${item.desc}`}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {item.submitted ? `Due: ${item.due} - Submitted on ${item.subDate} - You Scored ${item.grade} / ${item.points}` : `Due: ${item.due} - ${item.points} Possible Points`}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>)}
            <Dialog open={openAdd} onClose={() => setOpenAdd(false)}>
                <DialogTitle style={styles.dialogTitle}>New Assignment</DialogTitle>
                <DialogContent>
                    <DialogContentText style={styles.dialogExp}>
                        Add Assignment Details Below
                    </DialogContentText>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="standard"
                                label="Name"
                                name='name'
                                value={newAssign['name']}
                                variant="standard"
                                onChange={handleAssign}
                                helperText="Please Enter the Assignment Name"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                name='desc'
                                multiline
                                rows={4}
                                value={newAssign['desc']}
                                variant="standard"
                                onChange={handleAssign}
                                helperText="Please Describe this Assignment"
                                fullWidth
                            />
                        </div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Due Date"
                                    value={newAssign['due'] || null}
                                    onChange={(date) => {
                                        setNewAssign(prevState => ({ ...prevState, due: (date['$d'].getMonth() + 1) + '/' + date['$d'].getDate() + '/' + date['$d'].getFullYear() }));
                                    }}
                                    renderInput={(params) => <TextField {...params} helperText="Please Enter the Due Date for the Assignment" />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div>
                            <TextField
                                id="standard"
                                label="Points"
                                name='points'
                                value={newAssign['points']}
                                variant="standard"
                                onChange={handleAssign}
                                fullWidth
                                helperText="Please Enter the Total Points for this Assignment" />
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleNoAdd()}>Close</Button>
                    <Button variant='contained' onClick={() => handleAdd()}>Add</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openGrade} onClose={() => setOpenGrade(false)}>
                <DialogTitle style={styles.dialogTitle}>Grade Assignment</DialogTitle>
                <DialogContent>
                    <DialogContentText style={styles.dialogExp}>
                        Enter grades for each student's assignment below
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCancel()}>Cancel</Button>
                    <Button variant='contained' onClick={() => handleGrade()}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
};

const CourseInstructor = (props) => {
    const [assign, setAssign] = React.useState([]);
    const [course, setCourse] = React.useState({});
    const [myCourse, setMyCourse] = React.useState([]);

    React.useEffect(() => {
        setMyCourse([ ...props.courseList.filter(el => {
            return props.courseId.some(cid => {
                return cid === el.id
            });
        })]);
    },[props.courseList, props.courseId]);

    React.useEffect(() => {
        setCourse(myCourse[0]);
        myCourse[0] && setAssign(myCourse[0]['assignments'])
    }, [myCourse]);

    return (
        <Main
            title="CourseInstructor"
            description="This page displays list of courses you are teaching"
            userType={props.userType}
            setUserType={props.setUserType}
        >
            <Course
                myCourse={myCourse}
                userType={props.userType || ''}
                setCourse={setCourse}
                deliverable={
                    <Deliverable
                        setCourse={setCourse}
                        course={course}
                        assign={assign}
                        courseList={props.courseList}
                        setCourseList={props.setCourseList}
                    />
                }
                setAssign={setAssign}
            />
        </Main>
    )
}

export default CourseInstructor;