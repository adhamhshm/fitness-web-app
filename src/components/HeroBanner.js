import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HerobannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "60px", xs: "20px"}, ml: { sm: "50px"}}} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="50px">
        Trainics 
      </Typography>
      <Typography fontWeight="700" sx={{ fontSize: { lg: "44px", xs: "40px"}}} mb="10px" mt="20px">
        If You Believe, <br/>
        You Will Achieve
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="20px">
        Various exercises to your needs
      </Typography>
      <Button variant="contained" sx={{ bgcolor: "#FF2625", ":hover": { bgcolor: "#000000"} }}>
        Explore Now
      </Button>
      <Typography fontWeight="600" color="#FF2625" sx={{ opacity: 0.1, display: { lg: "block", xs: "none"} }} fontSize="200px">
        Exercises
      </Typography>
      <img src={HerobannerImage} alt="banner image" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner;