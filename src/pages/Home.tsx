import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Wrapper from '../components/Wrapper';

const theme = createTheme();

theme.typography.h1 = {
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: '80px',
    paddingBottom: '40px',
    textShadow: '4px 4px 8px #000000',
    fontSize: '5rem',
    '@media (min-width:600px)': {
        fontSize: '7.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '10rem',
    },
};

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.7rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingBottom: '15px',
};

function Home() {
    return (
        <div>
            <Box width={'100%'} maxHeight={'450px'} id='hero'>
                <Wrapper>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h1">Opening Soon!</Typography>
                    </ThemeProvider>
                </Wrapper>
            </Box>
            <Box width={'100%'}>
                <Container sx={{ width: '100%', marginTop: 5, marginBottom: 5 }}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h3">Loch & Key is located in the picturesque Loch Village in South Gippsland, situated halfway along the route from Melbourne to Wilsons Promontory.</Typography>
                        <Typography variant="h3">Set right in the centre of Loch's vibrant Victoria Road, it is the perfect place to stop for lunch, dinner or just an afternoon drink.</Typography>
                        <Typography variant="h3">Choose from a cosy indoor dining room with open fireplace, a beer garden overlooking rolling hills, or the front terrace where you can enjoy the bustle of the town.</Typography>
                    </ThemeProvider>
                </Container>
            </Box>
        </div>
    )
}

export default Home;