import axios from "axios"
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '64c0cc98bamsh60738f52ef58875p15d425jsnf818b5ce125e5',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ec9730f9b1mshe30500f177c6e18p1816cfjsn7e39953ddb7f',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}
export const fetchData = (url) => axios.request(url, exerciseOptions).catch((error) => (console.log(error)));
export const fetchYoutubeData = (url) => axios.request(url, youtubeOptions).catch((error) => (console.log(error)));



