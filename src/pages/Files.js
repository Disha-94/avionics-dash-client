import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Main from '../components/Main';
import files from '../data/filesLink'
import "../scss/pages/files.scss"

const Files = () => {
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return (
        <Main
            title="Files"
            description="This page displays list of files related to your courses"
        >
             <Grid container direction='column' rowSpacing={2}>
             <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="title"
            >
              <h2>Videos</h2>
            </AccordionSummary>
            <AccordionDetails>
            <ul class="no-bullets">
                {files && files.map((item, key) => {
                    return (
                        <li key={key}>
                            <iframe width="420" height="345" src={item} title={key}> </iframe>
                        </li>
                    )
                }
                )}
            </ul>
            </AccordionDetails>
          </Accordion>
          <br />  
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="title"
            >
              <h2>PDF Files</h2>
            </AccordionSummary>
            <AccordionDetails>
            <ul class="no-bullets">
            {['1','2','3','4','5','6'].map((item, key) => {
                    return(
                        <li key={key}>
                            <iframe src={`/pdf_files/${item}.pdf`} width="420" height="345" frameborder="1" title={key}></iframe>
                        </li>
                    )
                })}
            </ul>
            </AccordionDetails>
          </Accordion>   
            </Grid>
        </Main>
    )
}

export default Files;