import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '40px', height: '40px' }} />
      </Stack>
      <Typography variant="h6" sx={{ fontSize: { lg: '15px', xs: '15px' } }} mt="20px" textAlign="center">Trainics | Made With Pure Muscles</Typography>
    </Box>
  )
}

export default Footer;