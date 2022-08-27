import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/fetchFromApi";
import {ChannelCard, Videos} from "./index";

const ChannelDetail = () => {
    const {id} = useParams()

    const [channelDetails, setChannelDetails] = useState(null)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then(response => {
            setChannelDetails(response?.items[0])
        })

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(response => {
            setVideos(response?.items)
        })

    }, [id])

    return (
        <Box minHeight={"95vh"}>
            <Box>
                <div style={{
                    zIndex: 10,
                    height: "300px",
                    background: "linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)"
                }}/>
                <ChannelCard marginTop={'-110px'} channelDetail={channelDetails}/>
            </Box>
            <Box display={"flex"} p={"2"}>
                <Box sx={{mr: {xs: "100px", md: 0}}}/>
                <Videos videos={videos}/>
            </Box>
        </Box>
    );
};

export default ChannelDetail;