import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {ChannelCard, VideoCard} from "./";

const Videos = ({videos, direction}) => {
    if (!videos) return <Typography variant={"subtitle1"} color={"#F31503"}>Videos are Loading...</Typography>
    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start"
               alignItems="start" gap={1}>
            {videos.map((video, idx) => (<Box key={idx}>
                {video.id.videoId && <VideoCard video={video}/>}
                {video.id.channelId && <ChannelCard channelDetail={video}/>}
            </Box>))}
        </Stack>);
};

export default Videos;