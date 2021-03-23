import axios from 'axios';

export const APP_NAME = "netflix";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;