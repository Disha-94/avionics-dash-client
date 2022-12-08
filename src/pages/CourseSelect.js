import React from 'react';
import { useNavigate } from "react-router-dom";
//import { getAllCourses } from '../data/api';
import Main from '../components/Main';
import { Grid, ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import "../scss/pages/courseSelect.scss"

const CourseSelect = (props) => {
  const { courseList } = props;
  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate('/payments', { state: { courseID: id } });
  }

  return (
    <Main
      title="Courses"
      description="This page displays list of courses you have registered for"
      userType={props.userType}
      setUserType={props.setUserType}
    >
      <Grid container direction="column">
        <ImageList sx={{ width: '95%' }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div" className='title-text'>Airplane Courses</ListSubheader>
          </ImageListItem>
          {courseList.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title.concat(' ', item.price)}
                subtitle={item.desc}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    onClick={() => handleSelect(item.id)}
                  >
                    <SendIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Main>
  )
}

export default CourseSelect;