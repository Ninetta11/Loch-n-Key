import * as React from 'react';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme();

theme.typography.h3 = {
    fontSize: '0.8rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.4rem',
    },
    color: '#000000',
    textDecoration: 'none',
};

function Footer() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container>
                <Grid item xs={2} md={2}>
                    <img id='logo_footer' src={process.env.PUBLIC_URL + '/assets/logo/icon_profilepicture_customcolor.png'} />
                </Grid>
                <Grid item xs={6} md={8}>
                    <ThemeProvider theme={theme}>
                        <div className='padding_top'>
                            <Typography variant="h3">32 Victoria Road, LOCH</Typography>
                            <a href='tel:0356594236'><Typography variant="h3">(03) 5659 4236</Typography></a>
                            <a href='mailto:enquiries@lochnkey.com.au'><Typography variant="h3">enquiries@lochnkey.com.au</Typography></a>
                        </div>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <IconButton href="https://www.facebook.com/LochnKeyRestaurant">
                            <FacebookIcon color="primary" sx={{ fontSize: 60 }} />
                        </IconButton>
                        <IconButton href="https://www.instagram.com/lochnkeyrestaurant">
                            <InstagramIcon color="primary" sx={{ fontSize: 60 }} />
                        </IconButton>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;