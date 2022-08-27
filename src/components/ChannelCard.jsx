import React from 'react';
import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {demoProfilePicture} from "../utils/constants";
import {CheckCircle} from "@mui/icons-material";

const ChannelCard = ({channelDetail, marginTop}) => {
    console.log(channelDetail, 'channel details from card')
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 'none',
            borderRadius: "20px",
            width: {xs: "356px", md: "320px"},
            height: "326px",
            margin: "auto",
            marginTop
        }}>
            <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}>
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#fff"
                }}>
                    <CardMedia
                        sx={{border: "1px solid #e3e3e3", mb: 2, borderRadius: "50%", height: "180px", width: "180px"}}
                        alt={channelDetail?.snippet?.title}
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}/>
                    <Typography variant={"h6"}>
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{fontSize: 14, color: "gray", ml: "5px"}}/>
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography
                            color={"#fff"}>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}</Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
};

export default ChannelCard;