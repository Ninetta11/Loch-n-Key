import * as React from 'react';
import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Wrapper from '../components/Wrapper';

const theme = createTheme();

theme.typography.h2 = {
    color: '#736635',
    paddingTop: '50px',
    paddingBottom: '30px',
    fontSize: '5rem',
    '@media (min-width:600px)': {
        fontSize: '5.5rem',
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
    fontSize: '1rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
    },
    paddingBottom: '10px',
};

function Menu() {
    return (
        <div>
            <Box width={'100%'} maxHeight={'200px'} className="background_standard">
                <Wrapper>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h2">Menu</Typography>
                    </ThemeProvider>
                </Wrapper>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Container sx={{ width: '100%', marginTop: 5, marginBottom: 5 }}>
                    <ThemeProvider theme={theme}>
                        <ImageList cols={1}>
                            <ImageListItem key='Menu'>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/menu.jpg?auto=format`}
                                    alt='Loch & Key Menu'
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem key='Kids Menu'>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/kidsmenu.jpg?auto=format`}
                                    alt='Loch & Key Kids Menu'
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </ImageList>
                        <Typography variant="h4">(v)   vegetarian</Typography>
                        <Typography variant="h4">(df)  dairy free</Typography>
                        <Typography variant="h4">(gf)  gluten free</Typography>
                        <Typography variant="h4">Vegan meals are specified as such on the menu.</Typography>
                        <Typography variant="h4">Some meals can be made gluten free by substituting the chips with roast potatoes.</Typography>
                    </ThemeProvider>
                </Container>
            </Box >
        </div>
    );
}

export default Menu;