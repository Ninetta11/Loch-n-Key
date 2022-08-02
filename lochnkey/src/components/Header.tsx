import { AppBar, Box, IconButton, styled, Toolbar, Typography } from "@mui/material";
import { Search, More, Menu } from '@mui/icons-material';
import Drawer from "./Drawer";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
}));


function Header() {
    return (

        <AppBar>
            <StyledToolbar>
                <Box sx={{ width: '100%' }}> 
                    <img src={process.env.PUBLIC_URL + '/assets/customcolor_logo_transparent_background.png'} />
                </Box>
                <Box sx={{ flexShrink: 0 }}> <Drawer /></Box>
            </StyledToolbar>
        </AppBar>

    )
}

export default Header;