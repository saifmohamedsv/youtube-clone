import React from 'react';
import {Box, Stack} from "@mui/material";
import {ChannelCard, VideoCard} from "./";

const Videos = ({videos}) => {
    return (
        <Stack direction={"row"} flexWrap="wrap" justifyContent="center"
               alignItems="center" gap={2}>
            {videos.map((video, idx) => (<Box key={idx}>
                {video.id.videoId && <VideoCard video={video}/>}
                {video.id.channelId && <ChannelCard channelDetail={video}/>}
            </Box>))}
        </Stack>);
};

export default Videos;