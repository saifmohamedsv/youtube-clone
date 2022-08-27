import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {SideBar, Videos} from "./";
import {fetchFromAPI} from "../utils/fetchFromApi";

const Feed = () => {
    const [selected, setSelected] = useState("New")
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selected}`).then(data => {
            setVideos(data.items)
            console.log(data)
        }).catch(err => {
            console.error(err)
        })
    }, [selected])


    return (
        <Stack sx={{flexDirection: {sm: "column", md: "row"}}}>
            <Box sx={{height: {sm: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sm: 0, md: 2}}}>
                <SideBar selected={selected} setSelected={setSelected}/>
                <Typography className={"copyright"} variant={"body2"} sx={{mt: 1.5, color: "#fff"}}>Copy Right 2022
                    Saif-Mohamed</Typography>
            </Box>

            <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
                <Typography variant={"h4"} fontWeight={"bold"} mb={4} sx={{color: "white"}}>
                    {selected} <span style={{color: '#F31503'}}>Videos</span>
                </Typography>
                <Videos videos={videos}
                />
            </Box>
        </Stack>
    );
};

export default Feed;