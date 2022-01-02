import axios from 'axios';
const KEY = 'AIzaSyAKyzODi5AwJoSCWs1_R3iVbTiUL-GMsmY'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})