import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {Videos} from "./";
import {fetchFromAPI} from "../utils/fetchFromApi";
import {useParams} from "react-router-dom";

const SearchFeed = () => {
    const [videos, setVideos] = useState(null)
    const {searchTerm} = useParams()

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(data => {
            setVideos(data.items)
            console.log(data)
        }).catch(err => {
            console.error(err)
        })
    }, [searchTerm])

    return (
        <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
            <Typography variant={"h4"} fontWeight={"bold"} mb={4} sx={{color: "white"}}>
                Search Results for: <span style={{color: '#F31503'}}>{searchTerm}</span>
            </Typography>
            <Videos videos={videos}/>
        </Box>
    );
};

export default SearchFeed;