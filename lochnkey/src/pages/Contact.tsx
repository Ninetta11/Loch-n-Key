import { Grid } from '@mui/material';
import * as React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>

            <Grid container spacing={{ xs: 1, md: 3 }}>
                <Grid item xs={12} md={4}>
                    <h2>Location</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                    <h3>Address</h3>
                    <h4>32 Victoria Rd, Loch VIC 3945</h4>
                </Grid>
                <Grid item xs={12} md={4}>
                    <h3>Google Maps</h3>
                </Grid>
            </Grid>
            <ContactForm />

        </div>
    );
}

export default Contact;