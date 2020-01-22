import React, { Component } from "react";
import { Thumbnail, Score } from './components';

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
      "/img/san.gif",
      "/img/kcc.gif",
      "/img/ten.gif",
    ],
    score: 0,
    topScore: 0,
    message: "Click on the Eagles to Start!"
  };

  clickedTiles = [];

  handleTileClick = (evt) => {
    console.log(evt);
    const clickedTile = evt.target.src;
    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());

    if (this.clickedTiles.includes(clickedTile)) {
      const badmessage = "Foul on the play!";
      this.setState({
        score: 0,
        message: badmessage,
        tiles: shuffled
      });
      this.clickedTiles.length = 0;
      console.log("Error: already clicked, score: ", this.state.score);
      return;
    }

    const newScore = this.state.score + 1;
    const topScore = newScore > this.state.topScore ? newScore : this.state.topScore;
    this.clickedTiles.push(clickedTile);

    const goodmessage = "You guessed correctly!";

    this.setState({
      tiles: shuffled,
      score: newScore,
      topScore: topScore,
      message: goodmessage
    });
  }

  componentDidMount = () => {
    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());
    this.setState({
      tiles: shuffled
    });
  }


  render() {
    return (
      <div className="App">
        <Score score={this.state.score} topScore={this.state.topScore} message={this.state.message} />
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
