import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {IconButton, Paper} from "@mui/material";
import {Search} from '@mui/icons-material'


const SearchBar = () => {
    const [term, setTerm] = useState('')
    const router = useNavigate()

    return (
        <Paper
            component={'form'}
            onSubmit={(e) => {
                e.preventDefault()
                if (term) {
                    router(`/search/${term}`)
                }
            }}
            sx={{borderRadius: 20, border: "1px solid #e3e3e3", pl: 2, boxShadow: 'none', mr: {sm: 5}}}
        >
            <input
                placeholder={"Search..."}
                type="text"
                className={"search-bar"}
                value={term}
                onChange={(e) => {
                    setTerm(e.target.value)
                }}
            />
            <IconButton type={"submit"} sx={{p: "10px", color: "red"}}>
                <Search/>
            </IconButton>
        </Paper>
    );
};

export default SearchBar;