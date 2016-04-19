import React, { Component } from 'react';
import ReactDom from 'react-dom'; // namespace or install library
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar'; //file directory or folder
import VideoDetail from './components/video_detail';
//const API_KEY = 'AIzaSyB5mzPvdv4uMvn5-qgfo-JqN8X26ksUS94'
const API_KEY = 'AIzaSyBsUv-EhXKR7SSvpCdEd5uQm6vPG_UDH2Y'

// Create a new componet. This component should produce
// some HTML
class App extends Component{
  constructor(props){
    super(props);

      this.state = {
        videos: [],
        selectedVideo: null
      };

      YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
}
  render(){
  return (
    <div>
    <SearchBar />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
    videos={this.state.videos} />
    </div>
  );
}
}

// Take this component's generated HTML and put it
// on the page ( in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
