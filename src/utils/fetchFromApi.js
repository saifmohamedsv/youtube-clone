import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
    params: {
        maxResults: '50'
    }, headers: {
        'X-RapidAPI-Key': "8d460f8ef4msha149c58b6ca1fd9p1cbc49jsnce423baa386e",
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}