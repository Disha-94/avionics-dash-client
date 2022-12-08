import React from 'react';
import Main from '../components/Main';
import { Grid, List, ListItem, ListItemText, IconButton, Button, Typography, Tooltip } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Course from '../components/Course';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import PendingTwoToneIcon from '@mui/icons-material/PendingTwoTone';
import { orange } from '@mui/material/colors';

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
    const [assign, setAssign] = React.useState([]);
    const [selectedItem, setSelectedItem] = React.useState({});
    const [selectedFile, setSelectedFile] = React.useState();
    const [isSelected, setIsSelected] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const current = new Date();

    React.useEffect(() => {
        setAssign(props.assign);
    }, [props.assign]);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };

    const handleUpload = (assignment) => {
        setOpen(true);
        setSelectedItem(assignment);
    }

    const handleCancel = () => {
        setOpen(false);
        setSelectedItem({});
    }

    const handleSubmission = () => {
        const temp = [];
        assign.forEach(item => {
            if (item.id === selectedItem.id) {
                temp.push({
                    id: item.id,
                    name: item.name,
                    desc: item.desc,
                    due: item.due,
                    grade: 'PENDING',
                    submitted: true,
                    subDate: `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`,
                    points: item.points

                });
            }
            else {
                temp.push(item);
            }
        });
        setAssign(temp)
        setOpen(false);
    };

    const handlebutton = (assignment) => {
        if (assignment.submitted) {
            if (assignment.grade === 'PENDING')
                return (
                    <Tooltip title="Submitted. Pending Grading">
                        <IconButton edge="end" aria-label="delete">
                            <PendingTwoToneIcon sx={{ color: orange[300] }} />
                        </IconButton>
                    </Tooltip>
                );
            else return (
                <Tooltip title="Assignment Submitted and Graded">
                    <IconButton edge="end" aria-label="delete">
                        <CheckCircleTwoToneIcon color="success" />
                    </IconButton>
                </Tooltip>
            );
        } else return (
            <Tooltip title="Upload Assignment">
                <Button edge="end" variant='contained' onClick={() => handleUpload(assignment)}>
                    Upload
                </Button>
            </Tooltip>
        );
    }
    return (
        <Grid container direction='column'>
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
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle style={styles.dialogTitle}>Upload Assignment</DialogTitle>
                <DialogContent>
                    <DialogContentText style={styles.dialogExp}>
                        Upload Assignment
                    </DialogContentText>
                    <input type="file" name="file" onChange={changeHandler} />
                    {isSelected ? (
                        <div>
                            <p>Filename: {selectedFile.name}</p>
                            <p>Filetype: {selectedFile.type}</p>
                            <p>Size in bytes: {selectedFile.size}</p>
                            <p>
                                lastModifiedDate:{' '}
                                {selectedFile.lastModifiedDate.toLocaleDateString()}
                            </p>
                        </div>
                    ) : (
                        <p>Select a file to show details</p>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button variant='contained' onClick={handleSubmission}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
};

const CourseStudent = (props) => {
    const { courseList } = props || [];
    /*const [myCourse] = React.useState(courseList.filter(el => {
        return courseId.some(course_ids => {
            return course_ids === el.id
        });
    }))*/
    const [assign, setAssign] = React.useState([]);

    return (
        <Main
            title="CourseStudent"
            description="This page displays list of courses you have registered for"
            userType={props.userType}
            setUserType={props.setUserType}
        >
            <Course
                myCourse={courseList}
                userType={props.userType || ''}
                deliverable={
                    <Deliverable
                        assign={assign}
                    />}
                setAssign={setAssign}
            />
        </Main>
    )
}

export default CourseStudent;
