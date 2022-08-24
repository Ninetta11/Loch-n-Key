import * as React from 'react';
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import { Menu } from '@mui/icons-material';
import RestaurantMenuTwoToneIcon from '@mui/icons-material/RestaurantMenuTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';

const pages = [{ title: 'Menu', link: 'menu', icon: <RestaurantMenuTwoToneIcon /> }, { title: 'Events', link: 'events', icon: <CelebrationTwoToneIcon /> }, { title: 'Make a Reservation', link: 'reservation', icon: <CalendarMonthTwoToneIcon /> }, { title: 'Contact Us', link: 'contact', icon: <MailOutlineTwoToneIcon /> }]

function Drawer() {
    const [state, setState] = React.useState({
        drawOpen: false,
    });

    const toggleDrawer =
        (anchor: 'drawOpen', open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: 'drawOpen') => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {pages.map((page) => (
                    <ListItem key={page.title} disablePadding>
                        <ListItemButton href={page.link}>
                            <ListItemIcon>
                                {page.icon}
                            </ListItemIcon>
                            <ListItemText primary={page.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key='drawOpen'>
                <IconButton onClick={toggleDrawer('drawOpen', true)}><Menu fontSize='large' /></IconButton>
                <SwipeableDrawer
                    anchor='right'
                    open={state['drawOpen']}
                    onClose={toggleDrawer('drawOpen', false)}
                    onOpen={toggleDrawer('drawOpen', true)}
                >
                    {list('drawOpen')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}

export default Drawer;