import React, { Component } from "react";
import EmojiCard from "./components/EmojiCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import {Column, Row, Container } from "./components/Grid";
import emoji from "./emoji.json";
import "./App.css";

function shuffle(arr) {
  for (let i=(arr.length-1); i > 0; i--) {
    let x = Math.floor(Math.random() * (i+1));
    [arr[i], arr[x]] = [arr[x], arr[i]];
  }
  return arr;
};

class App extends Component {

  state = {
    emoji,
    score: 0,
    topScore: 0,
    gameOver: "",
    isClicked: []
  };

  handleClick = id => {
    if (this.state.isClicked.indexOf(id) === -1) {
      this.upScore();
      const newArray = this.state.isClicked.slice();
      newArray.push(id);
      this.setState({ isClicked: newArray });
    } else {
      this.resetGame();
    }
  };

  upScore = () => {
    const newScore = this.state.score +1;
    this.setState({ score: newScore });
    this.setState({ gameOver: ""});

    if (newScore > this.state.topScore) {
      this.setState({ topScore: newScore });
    }

    this.shuffleEmoji();
  };

  resetGame = () => {
    this.setState({
      score: 0,
      isClicked: [],
      gameOver: "Game Over!"
    });

    this.shuffleEmoji();
  };

  shuffleEmoji = () => {
    let shuffled = shuffle(emoji);
    this.setState({ emoji: shuffled });
  };


  render() {
    return (
      <Wrapper>
        <Nav
        score = {this.state.score}
        topScore = {this.state.topScore}
        gameOver = {this.state.gameOver}
        />

        <Title>
          Click each emoji only once.  Selecting a duplicate will end the game.
        </Title>

        <Container>
          <Row>
            {this.state.emoji.map(emoji => (
              <Column size="md-3 sm-6">
                <EmojiCard
                  key={emoji.id}
                  id={emoji.id}
                  name={emoji.name}
                  image={emoji.image}
                  handleClick={this.handleClick}
                  upScore={this.upScore}
                  resetGame={this.resetGame}
                  shuffleEmoji={this.shuffleEmoji}
                />
              </Column>
            ))}
          </Row>
        </Container>

      </Wrapper>
    );
  }
}

export default App;
