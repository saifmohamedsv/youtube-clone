import React from 'react';
import {Stack} from "@mui/material";
import {categories} from "../utils/constants";


const SideBar = ({selected, setSelected}) => {

    const handleSelection = (btn) => {
        setSelected(btn)
    }

    return (
        <Stack direction={"row"}
               sx={{overflowY: "auto", height: {sm: "auto", md: "95%"}, flexDirection: {md: "column"}}}>
            {categories.map((category) => (
                <button onClick={() => handleSelection(category.name)} key={category.name}
                        style={{color: "#fff", background: category.name === selected && "#F31503"}}
                        className={"category-btn"}>
                    <span
                        style={{
                            marginRight: "15px",
                            color: category.name === selected ? "white" : "red"
                        }}
                    >
                        {category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </Stack>
    );
};

export default SideBar;