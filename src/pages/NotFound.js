import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Grid from '@mui/material/Grid';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta name="description" content="The content you are looking for cannot be found." />
      </Helmet>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <h1 data-testid="heading" style={{ textAlign: 'center' }}>Page Not Found</h1>
          <p style={{ textAlign: 'center' }}>Return <Link to="/">home</Link>.</p>
        </Grid>
      </Grid>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
