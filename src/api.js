import axios from 'axios';

// # https://api.themoviedb.org/3/movie/550?api_key=31198b0a0e76c34f2d6fa9fc6af3e753

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '31198b0a0e76c34f2d6fa9fc6af3e753',
        language: 'en-US',
    },
});

export default api;