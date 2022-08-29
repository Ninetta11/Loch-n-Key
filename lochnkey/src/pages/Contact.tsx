import * as React from 'react';
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from '../components/ContactForm';
import Wrapper from '../components/Wrapper';

const theme = createTheme();

theme.typography.h2 = {
    color: '#ffffff',
    paddingTop: '60px',
    paddingBottom: '30px',
    fontSize: '2rem',
    '@media (min-width:600px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
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

};

theme.typography.h4 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
    paddingBottom: '10px',
};

function Contact() {
    return (
        <Box sx={{ width: '100%' }} className="background_standard">
            <Wrapper>
                <ThemeProvider theme={theme}>
                    <Typography variant="h2">Contact Us</Typography>
                    <Grid container spacing={{ xs: 1, md: 2 }}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h3">Location</Typography>
                            <Typography variant="h4">32 Victoria Rd, Loch VIC 3945</Typography>
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=32%20Victoria%20Road,%20Loch&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" ></iframe>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h3">Contact</Typography>
                            <List>
                                <ListItem key='phone' disablePadding>
                                    <ListItemButton href="tel:0356594236">
                                        <ListItemIcon>
                                            <LocalPhoneIcon />
                                        </ListItemIcon>
                                        <Typography variant="h4">(03) 5659 4236</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem key='email' disablePadding>
                                    <ListItemButton href="mailto:enquiries@lochnkey.com.au">
                                        <ListItemIcon>
                                            <EmailIcon />
                                        </ListItemIcon>
                                        <Typography variant="h4">enquiries@lochnkey.com.au</Typography>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            <br/>
                            <Typography variant="h4">Have a question or query? Send us a message <a id="contact_link" href="https://us1.list-manage.com/contact-form?u=768722a0c807588e7fef0d408&form_id=534586b53d5c768c2c292c319a4a37ed">here.</a></Typography>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Wrapper>
        </Box >
    );
}

export default Contact;