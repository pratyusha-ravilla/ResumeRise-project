


import React from 'react';
import { Typography, Container, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomeContent() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Welcome to ResumeRise</Typography>
          <Typography variant="body1" gutterBottom>
            Your platform for creating professional resumes and exploring job opportunities.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Get Started</Typography>
            <Typography variant="body2" gutterBottom>
              Create your professional resume in just a few clicks. Get started now!
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/register">Get Started</Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Resume Templates</Typography>
            <Typography variant="body2" gutterBottom>
              Choose from a variety of professionally designed resume templates.
            </Typography>
            <Button variant="contained" color="secondary" component={Link} to="/resume-templates">View Templates</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeContent;
