import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
    if (this.state.videos.length == 0){
      this.onTermSubmit('League of Legends')
    }
  }


  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async term => {
    const result = await youtube.get("search", { params: { q: term } });
    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
