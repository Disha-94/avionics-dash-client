import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from '../components/NavigationBar';
import ScrollToTop from '../components/ScrollToTop';
import { Divider, Grid } from '@mui/material';

const { PUBLIC_URL } = process.env;

const Main = (props) => (
  <HelmetProvider>
    <ScrollToTop />
    <Grid item xs={12} sx={{backgroundColor: 'aliceblue'}}></Grid>
    <Helmet titleTemplate="%s | Avionics Dash" defaultTitle="Avionics Dash" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: 'Avionics Dash',

};

export default Main;
