import axios from 'axios';
const KEY = 'AIzaSyBs8wL8H_Z_MLUNA-PFuMvWWayRJHVofBk'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})