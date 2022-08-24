import * as React from 'react';
import { Container } from "@mui/material";

function Wrapper(props: any) {
    return <Container sx={{ width: '100%', height: '100vh', marginTop: 25 }}>{props.children}</Container>
}

export default Wrapper;