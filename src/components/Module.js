import React from 'react';
import ReactPlayer from 'react-player';
import { FormControlLabel, Switch, Typography, Box } from '@mui/material';
import caption from '../data/caption';


const styles = {
  playerwrapper: {
    margin: 'auto !important'
  }
};

const Module = (props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <h1>{props.name}</h1>
      <div style={styles.playerwrapper}>
        <ReactPlayer
          className='react-player'
          url={props.url}
          playing={false}
          loop={false}
        />
      </div>
      <div>
        <FormControlLabel
          label="Transcript"
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />} />
      </div>
      {checked && <Box
        sx={{
          width: 700,
          height: 300,
          border: 1,
          maxHeight: 200,
          overflow: 'auto'
        }}
      >
        <Typography component={'span'} variant={'body1'}>
          {caption}
        </Typography>
      </Box>}
    </div>
  );
}

export default Module;
