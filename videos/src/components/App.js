import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyAodiSr1NZzPrYflKx5ekYAUYvpo2X7usc';

class App extends React.Component {

    componentDidMount() {
        this.onTermSubmit('buildings')
    }

    state = { 
        videos: [],
        selectedVideo: null
    }

    onVideoSelected = video => {
        this.setState({ selectedVideo: video })
    }

    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: `${KEY}`
            }
        })

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                          <VideoList 
                            videos={this.state.videos} 
                            onVideoSelected={this.onVideoSelected} />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default App;