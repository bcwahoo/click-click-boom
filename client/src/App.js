import React, { Component } from "react";
import { Thumbnail, Score } from './components';
import logo from './logo.svg'

class App extends Component {

  state = {
    tiles: [
      "/img/ari.gif",
      "/img/atl.gif",
      "/img/bal.gif",
      "/img/buf.gif",
      "/img/car.gif",
      "/img/phi.gif",
      "/img/nyj.gif",
      "/img/nyg.gif",
      "/img/dal.gif",
    ]
  };

  clickedTiles = [];


  handleTileClick = (evt) => {



    //record click
    //test for math
    console.log(evt);
    const clickedTile = evt.target.src;

    if (this.clickedTiles.includes(clickedTile)) {
      this.clickedTiles.length = 0;
      this.setState({ score: 0 });
      return;
    }

    const newScore = this.state.score + 1;
    const topScore = this.state.score > this.state.topScore ?
      newScore :
      this.state.topScore;

    this.clickedTiles.push(clickedTile)

    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());
    this.setState({ tiles: shuffled });

  }


  render() {
    return (
      <div className="App">
        <Score score={this.state.score} topScore={this.state.topScore} />
        <div className="top-container">
          {
            this.state.tiles.map((tile, idx) => <Thumbnail
              key={idx} src={tile} onClick={this.handleTileClick}
            />)
          }
        </div>
      </div>
    );
  }
}

export default App;
