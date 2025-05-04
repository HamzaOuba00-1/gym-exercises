import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#95c9fa">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                <img src={Logo} alt="logo" width="200px" height="40px" />
                <Typography fontWeight={400} variant="h5" pb="40px" mt="0px">
                    Made with 🤍 by <span style={{ fontWeight: 700 }}>OUBA Hamza</span>
                </Typography>
            </Stack>
        </Box>
    );
}

export default Footer;