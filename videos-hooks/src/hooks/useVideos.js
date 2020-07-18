import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defSearchTerm);
    }, [defSearchTerm])

    const search = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: 'AIzaSyAodiSr1NZzPrYflKx5ekYAUYvpo2X7usc'
            }
        })

        setVideos(response.data.items);
    }

    return [videos, search];
}

export default useVideos;