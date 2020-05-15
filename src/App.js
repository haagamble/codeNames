import React from "react";
import "./styles.css";
//import CardLayout from "./CardLayout";
//Function CardLayout not used. Replaced with class CardSet
import wordArray from "./wordArray";
//testing CardSet instead of CardLayout
import CardSet from "./CardSet";

class App extends React.Component {
  constructor() {
    super();
    //when gameStarted is true
    this.state = {
      gameCardSet: [],
      gameStarted: false,
      turnColourChosen: false
    };
  }

  //make an array of random cards
  startGame = whoseTurn => {
    console.log("game started");
    console.log(whoseTurn + " turn");
    //make new set of cards, 13 red or blue (depending on
    //whose turn it is) 1 black, rest white
    const newCardSet = [];
    let cardColour = "";
    for (let x = 1; newCardSet.length < 25; x++) {
      const nextWord = wordArray[Math.floor(Math.random() * wordArray.length)];
      if (!newCardSet.includes(nextWord)) {
        if (newCardSet.length < 1) {
          cardColour = `${whoseTurn}Card`;
        } else if (newCardSet.length < 9) {
          cardColour = "redCard";
        } else if (newCardSet.length < 17) {
          cardColour = "blueCard";
        } else if (newCardSet.length < 18) {
          cardColour = "blackCard";
        } else {
          cardColour = "beigeCard";
        }
        let myObj = { word: nextWord, clr: cardColour };
        newCardSet.push(myObj);
      }
    }

    //shuffle array, this code from https://javascript.info/task/shuffle
    for (let i = newCardSet.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [newCardSet[i], newCardSet[j]] = [newCardSet[j], newCardSet[i]];
    }

    //Todo: add step here to randomize the array

    this.setState(state => ({
      gameStarted: true,
      gameCardSet: newCardSet
    }));

    console.log(newCardSet);
  };

  render() {
    return (
      <div className="App">
        <h1>Cards</h1>
        {!this.state.gameStarted ? (
          <button className="redButton" onClick={() => this.startGame("red")}>
            New Game Red Turn
          </button>
        ) : null}
        {!this.state.gameStarted ? (
          <button className="blueButton" onClick={() => this.startGame("blue")}>
            New Game Blue Turn
          </button>
        ) : null}

        {this.state.gameStarted ? (
          <CardSet words={this.state.gameCardSet} />
        ) : null}
      </div>
    );
  }
}

export default App;
