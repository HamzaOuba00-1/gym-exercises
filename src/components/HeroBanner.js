import React from 'react'
import {Box, Typography, Button, Stack} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position="relative" p="20px">
      <Typography color="#0A3981" fontWeight="600" fontSize="50px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#0A3981', padding: '10px' }}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#87e3fa"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" style={{width: "500px", height: "800px", objectFit: "cover" }} />

    </Box>
    
  )
}

export default HeroBanner
