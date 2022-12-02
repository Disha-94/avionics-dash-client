import React from 'react';
import Main from '../components/Main';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Box, Grow } from '@mui/material';
import { Stack, Card, CardContent, CardHeader, IconButton, Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "../scss/pages/program.scss"

const Programs = (props) => {
  const navigate = useNavigate();
  const { userType, userReg } = props;
  const handleEnrol = () => {
    userType === 'v' ? navigate('/signup') : navigate('/selectCourse')
  }
  return (
    <Main
      title="Programs"
      description="This page provides overview of the programs offered by the website"
      userType={props.userType}
    >

      <Box sx={{ height: 180, display: 'flex' }}>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          timeout={5000}
        >
          <Grid container direction='row' rowSpacing={2}>
            <Accordion expanded={true} style={{ width: '260vh' }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className='title'
              >
                <h2>Piloting Made Easy</h2>
                {(userType !== 'v' && userReg) &&
                  <Button
                    variant="contained"
                    size="large"
                    component={Link} to={userType === 's' ? "/courseStudent" : "/courseInstructor"}
                    style={{ margin: '1% 0 0 60%' }}
                  >
                    My Courses
                  </Button>}
              </AccordionSummary>
              <AccordionDetails>
                <p> Our online ground school will help you pass the FAA Private Pilot test with flying colors. Achieve your dreams of flying an airplane.</p>
                <div className='topleft'>
                  <ul className='points'>
                    <li>
                      Save thousands with our online ground school - in-person instruction costs up to $70/hr
                    </li>
                    <li>
                      11,326+ students like you have used this course to ace the test
                    </li>
                    <li>
                      35 hours of videos with beautiful graphics and animations.
                    </li>
                    <li>
                      Classroom instruction from the comfort of your home
                    </li>
                    <li>
                      You're guaranteed to pass the test or you'll get $175 and a full refund. 99.8% of our students pass.
                    </li>
                  </ul>
                  <Button variant="contained" size="large" endIcon={<ArrowCircleRightIcon />} onClick={handleEnrol}>
                    Enroll Now
                  </Button>
                </div>
                <div className='topright'>
                  <iframe width="100%" height="345" src='https://www.youtube.com/embed/nb74_jkr8u0' title='intro'> </iframe>
                </div>

              </AccordionDetails>
            </Accordion>
            <br />
            <Accordion expanded={true} style={{ width: '260vh' }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className='title'
              >
                <h2>Let’s meet your instructor. Taught by experts, focused on outcomes</h2>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ width: '30%', float: "left" }}>
                  <img src="/janice.jpeg" alt="Avatar" />
                </div>
                <div style={{ width: '70%', float: "right" }}>
                  <p>
                    Hi, I'm Janice Hosenstein or Professor Hosens as my students call me.
                  </p>
                  <p>
                    I have been an aviation professional since the early 2000s. I currently hold the following FAA certificates: Certified Flight Instructor (Instrument), Commercial Pilot (for single and multi engine), and UAS Remote Pilot.
                    I have worked for two of the biggest aeronautical universities in the country (managing flight training programs of up to 500 students and 50 aircraft) and in teaching roles as an adjunct professor. I was also the President of a Part 141 Flight School with 25 employees, 14 aircraft, and 100 students.
                  </p><p>I am passionate about making aviation more accessible and easier to learn. I now concentrate on educating the next generation of manned and unmanned pilots.
                    I hold a Bachelor's degree in Aeronautical Science and a Masters Degree in Aviation Human Factors, both from the Florida Institute of Technology in Melbourne, FL.
                  </p><p> When I am not teaching, you can find me running in the beautiful mountains surrounding Prescott, AZ.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
            <br />
            <Accordion expanded={true} style={{ width: '260vh' }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className='title'
              >
                <h2>Why Avionics Dash</h2>
              </AccordionSummary>
              <AccordionDetails>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >

                  <Card sx={{ maxWidth: 360 }}>
                    <CardHeader
                      title={
                        <IconButton aria-label="settings">
                          <VerifiedIcon />
                        </IconButton>
                      }
                      style={{ textAlign: 'center' }}
                      subheader={<b>"Pass the Test the 1st Time - Guaranteed!"</b>}
                    />
                    <CardContent>
                      <p> The industry's best guarantee: We will promptly send you $360 in the mail and give you 100% of your money back if you don't pass the FAA's test on your 1st try.
                        We're serious. That's how confident we are in our course. </p>
                    </CardContent>
                  </Card>

                  <Card sx={{ maxWidth: 360 }}>
                    <CardHeader
                      title={
                        <IconButton aria-label="settings">
                          <ViewDayIcon />
                        </IconButton>
                      }
                      style={{ textAlign: 'center' }}
                      subheader={<b>"Pass the Test the 1st Time - Guaranteed!"</b>}
                    />
                    <CardContent>
                      <p> The industry's best guarantee: We will promptly send you $360 in the mail and give you 100% of your money back if you don't pass the FAA's test on your 1st try.
                        We're serious. That's how confident we are in our course. </p>
                    </CardContent>
                  </Card>

                  <Card sx={{ maxWidth: 360 }}>
                    <CardHeader
                      title={
                        <IconButton aria-label="settings">
                          <YouTubeIcon />
                        </IconButton>
                      }
                      style={{ textAlign: 'center' }}
                      subheader={<b>"Pass the Test the 1st Time - Guaranteed!"</b>}
                    />
                    <CardContent>
                      <p> The industry's best guarantee: We will promptly send you $360 in the mail and give you 100% of your money back if you don't pass the FAA's test on your 1st try.
                        We're serious. That's how confident we are in our course. </p>
                    </CardContent>
                  </Card>
                </Stack>
                <br />
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <Card sx={{ maxWidth: 360 }}>
                    <CardHeader
                      title={
                        <IconButton aria-label="settings">
                          <MenuBookIcon />
                        </IconButton>
                      }
                      style={{ textAlign: 'center' }}
                      subheader={<b>"Pass the Test the 1st Time - Guaranteed!"</b>}
                    />
                    <CardContent>
                      <p> The industry's best guarantee: We will promptly send you $360 in the mail and give you 100% of your money back if you don't pass the FAA's test on your 1st try.
                        We're serious. That's how confident we are in our course. </p>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 360 }}>
                    <CardHeader
                      title={
                        <IconButton aria-label="settings">
                          <GroupsIcon />
                        </IconButton>
                      }
                      style={{ textAlign: 'center' }}
                      subheader={<b>"Pass the Test the 1st Time - Guaranteed!"</b>}
                    />
                    <CardContent>
                      <p> The industry's best guarantee: We will promptly send you $360 in the mail and give you 100% of your money back if you don't pass the FAA's test on your 1st try.
                        We're serious. That's how confident we are in our course. </p>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 360 }}>
                    <CardHeader
                      title={
                        <IconButton aria-label="settings">
                          <ModeStandbyIcon />
                        </IconButton>
                      }
                      style={{ textAlign: 'center' }}
                      subheader={<b>"Pass the Test the 1st Time - Guaranteed!"</b>}
                    />
                    <CardContent>
                      <p> The industry's best guarantee: We will promptly send you $360 in the mail and give you 100% of your money back if you don't pass the FAA's test on your 1st try.
                        We're serious. That's how confident we are in our course. </p>
                    </CardContent>
                  </Card>


                </Stack>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grow>
      </Box>
    </Main>
  )
}

export default Programs;