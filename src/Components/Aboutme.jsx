import React from 'react';
import { Grid, Typography, Paper, Button } from '@mui/material';
import profileImage from '../assets/images/with gradient bg.png'; // Adjust path based on your folder structure

const Profile = () => {
  return (
    <Paper
      sx={{
        padding: 3,
        maxWidth: 600,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1f1f1f 0%, #2c2c2c 100%)',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item>
          <img
            src={profileImage}  // Use the imported image
            alt="Profile"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              border: '5px solid #00bcd4',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
              objectFit: 'cover',
              objectPosition: 'center top',
              
            }}
          />
        </Grid>
        <Grid item xs>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '100%',
              padding: '0 16px',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginBottom: 1,
                color: '#ffffff',
                fontSize: '2rem',
                fontWeight: '600',
                textTransform: 'capitalize',
                letterSpacing: '0.5px',
              }}
            >
              Shubham Ahirrao
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#b0bec5',
                fontSize: '1.1rem',
                marginBottom: '8px',
                fontWeight: '400',
                letterSpacing: '0.3px',
              }}
            >
              Contact No: +91 8421574875
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#b0bec5',
                fontSize: '1.1rem',
                marginBottom: '8px',
                fontWeight: '400',
                letterSpacing: '0.3px',
              }}
            >
              Email: shubhamahirrao.cyber@gmail.com
            </Typography>
            {/* <Typography
              variant="body1"
              sx={{
                color: '#b0bec5',
                fontSize: '1.1rem',
                marginBottom: '8px',
                fontWeight: '400',
                letterSpacing: '0.3px',
              }}
            >
              Language: English, Hindi, Marathi
            </Typography> */}
            {/* <Typography
              variant="body1"
              sx={{
                color: '#b0bec5',
                fontSize: '1.1rem',
                marginBottom: '8px',
                fontWeight: '400',
                letterSpacing: '0.3px',
              }}
            >
              Location: Pune, Maharashtra, India
            </Typography> */}
            {/* <Button
              variant="contained"
              color="primary"
              href="/path/to/your/cv.pdf"
              download
              sx={{
                marginTop: 2,
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '1rem',
                textTransform: 'none',
                backgroundColor: '#00bcd4',
                '&:hover': {
                  backgroundColor: '#0097a7',
                },
              }}
            >
              Download CV
            </Button> */}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
