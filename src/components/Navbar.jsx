import React from 'react';
import {Stack} from '@mui/material'
import {logo} from '../utils/constants';
import {Link} from 'react-router-dom'
import {SearchBar} from "./index";

const Navbar = () => {
    return (
        <Stack direction={"row"} alignItems={"center"} p={2}
               sx={{position: "sticky", bgcolor: "#000", top: 0, justifyContent: "space-between"}}>
            <Link to={"/"} style={{display: "flex", alignItems: "center"}}>
                <img height={48} src={logo} alt="Logo"/>
            </Link>
            <SearchBar/>
        </Stack>
    );
};

export default Navbar;