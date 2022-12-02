import React from 'react';
import Main from '../components/Main';
//import {List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
//import { Grid, Accordion, AccordionSummary, AccordionDetails, Divider, Typography} from '@mui/material';
import courseList from '../data/courseList';
import Course from '../components/Course';

                    {/*
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Module1" src="/AD1.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Module2" src="/AD1.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Module3" src="/AD1.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
        </List> */}
const Deliverable = () => {
    return (
        <h1>This is Student Deliverables Tab</h1>
    )
};

const CourseStudent = (props) => {
    const { courseId } = props || '';
    const [myCourse] = React.useState(courseList.filter(el => {
        return courseId.some(cid => {
            return cid === el.id
        });
    }))
    
    return (
        <Main
            title="CourseStudent"
            description="This page displays list of courses you have registered for"
            userType={props.userType}
        >
            <Course myCourse={myCourse} deliverable={<Deliverable />}/>
        </Main>
    )
}

export default CourseStudent;
