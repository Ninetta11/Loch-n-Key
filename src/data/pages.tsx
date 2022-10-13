import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuTwoToneIcon from '@mui/icons-material/RestaurantMenuTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';

const pages = [
    {
        title: 'Home',
        link: 'home',
        icon: <HomeIcon />
    },
    {
        title: 'Menu',
        link: 'menu',
        icon: <RestaurantMenuTwoToneIcon />
    },
    // {
    //     title: 'Events',
    //     link: 'events',
    //     icon: <CelebrationTwoToneIcon />
    // },
    {
        title: 'Make a Reservation',
        link: 'reservation',
        icon: <CalendarMonthTwoToneIcon />
    },
    {
        title: 'Contact Us',
        link: 'contact',
        icon: <MailOutlineTwoToneIcon />
    }
];

export default pages;