import React from 'react';
import { Box, Button, FormControl, InputLabel, OutlinedInput, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ContactForm() {
    const [formState, setFormState] = React.useState({
        email: '',
        name: '',
        message: '',
        alerts: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.id]: event.target.value,
        });
    };

    const sendEmail = () => {
        setFormState({
            ...formState,
            email: '',
            name: '',
            message: '',
            alerts: ''
        });
    }

    return (
        <Stack
            component="form"
            sx={{
                width: '50ch',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >
            <FormControl >
                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput
                    id="name"
                    label="Name"
                    value={formState.name}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="component-outlined">Email Address</InputLabel>
                <OutlinedInput
                    id="email"
                    label="Email address"
                    value={formState.email}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="component-outlined">Message</InputLabel>
                <OutlinedInput
                    id="message"
                    label="Message"
                    multiline={true}
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                />
            </FormControl>
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
                Send
            </Button>
        </Stack>
    )
}

export default ContactForm;