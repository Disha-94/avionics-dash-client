import React from 'react';
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Divider, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Module from '../components/Module';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Course = (props) => {
    const { myCourse } = props || '';
    const [value, setValue] = React.useState(0);
    const [mod, setMod] = React.useState({});
    const [expanded, setExpanded] = React.useState(false);

    const handleAccordian = (course) => (event, isExpanded) => {
        if (isExpanded) {
            setExpanded(course['id']);
            setMod(course['modules'][0]);
            setValue(0);
        } else {
            setExpanded(false);
            setMod({});
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleModSelect = (module) => {
        console.log('module: ', module);
        setMod(module);
        setValue(1);
    }

    return (
        <Grid container direction='column'>
            {myCourse.map(item =>
                <div key={item.id}>
                    <Accordion expanded={expanded === item.id} sx={{ marginRight: '10px' }} onChange={handleAccordian(item)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ backgroundColor: '#accae7' }}
                        >
                            <Typography variant='h5' sx={{ textTransform: 'capitalize', m: 1 }}>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Home" {...a11yProps(0)} />
                                        <Tab label="Lecture" {...a11yProps(1)} disabled={Object.keys(mod).length === 0} />
                                        <Tab label="Deliverables" {...a11yProps(2)} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <Typography variant='h6' sx={{ textTransform: 'capitalize', m: 1 }}>{item.desc}</Typography>
                                    <List>
                                        {item.modules.map(mod =>
                                            <div key={mod.id}>
                                                <ListItem>
                                                    <ListItemButton onClick={() => handleModSelect(mod)}>
                                                        <ListItemIcon>
                                                            <VideoLibraryIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={mod.name} />
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider />
                                            </div>
                                        )}
                                    </List>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Module name={mod.name} url={mod.url} />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    {props.deliverable}
                                </TabPanel>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Divider sx={{ marginBottom: '20px' }} />
                </div>)}
        </Grid>
    )
}

export default Course;
