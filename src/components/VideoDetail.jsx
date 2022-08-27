import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/fetchFromApi";
import ReactPlayer from "react-player";
import {CheckCircle} from "@mui/icons-material";
import {Videos} from "./index";


const VideoDetail = () => {
    const {id} = useParams()
    const [videoDetails, setVideoDetails] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState(null)

    useEffect(() => {
        fetchFromAPI(`videos?id=${id}&part=snippet`).then((res) => {
            setVideoDetails(res.items[0])
        })

        fetchFromAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`).then((res) => {
            setRelatedVideos(res.items)
        })

    }, [])

    if (!videoDetails?.snippet) return "Loading"

    const {snippet: {title, channelId, channelTitle}, statistics: {likeCount, viewCount}} = videoDetails

    return (
        <Box minHeight={"95vh"}>
            <Stack direction={{xs: "column", md: "row"}}>
                <Box flex={1}>
                    <Box sx={{width: '100%', position: "sticky", top: "86px"}}>
                        <ReactPlayer className={"react-player"} controls url={`https://youtube.com/watch?v=${id}`}/>
                        <Typography p={2} fontWeight={"bold"} variant={"h5"} color={"#fff"}>
                            {title}
                        </Typography>
                        <Stack py={1} px={2} direction={"row"} justifyContent={"space-between"} sx={{color: "#fff"}}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={"h6"} color={"#fff"} display={"flex"} alignItems={"center"}>
                                    {channelTitle}
                                    <CheckCircle sx={{fontSize: "16px", color: 'gray', ml: '5px'}}/>
                                </Typography>
                            </Link>
                            <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                                <Typography variant={"body1"} sx={{opacity: 0.7}}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant={"body1"} sx={{opacity: 0.7}}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{md: 1, xs: 5}} justifyContent={"center"} alignItems={"center"}>
                    <Typography pb={2} variant={"h5"} fontWeight={"bold"} color={"#f31503"}>Recommended
                        Videos.</Typography>
                    <Videos direction={"column"} videos={relatedVideos}/>
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail;