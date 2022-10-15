import * as React from 'react';
import { Box, Container, Grid, List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Wrapper from '../components/Wrapper';

const theme = createTheme();

theme.typography.h2 = {
    color: '#736635',
    paddingTop: '50px',
    paddingBottom: '30px',
    fontSize: '4rem',
    '@media (min-width:600px)': {
        fontSize: '5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '6rem',
    },
};

theme.typography.h3 = {
    fontSize: '1.75rem',
    '@media (min-width:600px)': {
        fontSize: '1.75rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },

};

theme.typography.h4 = {
    fontSize: '1.25rem',
    '@media (min-width:600px)': {
        fontSize: '1.25rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
    paddingBottom: '10px',
};

function Reservation() {
    return (
        <div>
            <Box width={'100%'} maxHeight={'200px'} className="background_standard">
                <Wrapper>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h2">Make a Reservation</Typography>
                    </ThemeProvider>
                </Wrapper>
            </Box>
            <Box sx={{ width: '100%', height: '100vh' }} >
                <Container sx={{ width: '100%', marginTop: 5, marginBottom: 5 }}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h4">We only take reservations for inside seating in the restaurant.</Typography>
                        <Typography variant="h4">To sit outside in our undercover heated terrace, or to enjoy the sunshine in our lovely beer garden, please just wonder on down and grab a table.</Typography>
                        <Typography variant="h4">For group bookings larger than 8 people, please contact us on <a href="tel:0356594236">(03) 5659 4236</a>.</Typography>
                        <iframe width='100%' height='550px' src='https://www.opentable.com.au/r/loch-and-key-reservations-loch?restref=171767&lang=en-AU&ot_source=Restaurant%20website'></iframe>
                    </ThemeProvider>
                </Container>
            </Box >
        </div>
    );
}

export default Reservation;