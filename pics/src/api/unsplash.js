import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QFu612uofnR-KzFGCjjueMZMNf4yIqFRjH2DTLiR-oM'
    }
});