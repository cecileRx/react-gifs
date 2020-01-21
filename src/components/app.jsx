import React, { Component } from 'react';
import giphy from "giphy-api";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  search = (query) => {
    giphy('VfAe9hdwhl0kkeKU1X9iaXPx2tI0giR1').search({
      q: query,
      rating: 'g',
      limit: 12
    },
    (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (selectedId) => {
    this.setState({
      selectedGifId: selectedId
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
