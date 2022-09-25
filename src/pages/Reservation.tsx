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
            <Box sx={{ width: '100%', height: '100%' }} >
                <Container sx={{ width: '100%', marginTop: 5, marginBottom: 5 }}>
                    <ThemeProvider theme={theme}>
                    </ThemeProvider>
                </Container>
            </Box >
        </div>
    );
}

export default Reservation;