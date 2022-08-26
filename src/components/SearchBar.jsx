import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {IconButton, Paper} from "@mui/material";
import {Search} from '@mui/icons-material'


const SearchBar = () => {
    const [x, y] = useState(123)
    const router = useNavigate()

    return (
        <Paper
            component={'form'}
            onSubmit={() => {
            }}
            sx={{borderRadius: 20, border: "1px solid #e3e3e3", pl: 2, boxShadow: 'none', mr: {sm: 5}}}
        >
            <input placeholder={"Search..."} type="text" className={"search-bar"} value={""} onChange={() => {
            }}/>
            <IconButton type={"submit"} sx={{p: "10px", color: "red"}}>
                <Search/>
            </IconButton>
        </Paper>
    );
};

export default SearchBar;