import React from "react";
import "./styles.css";
import OneCard from "./OneCard";

//trying this instead of CardLayout

class CardSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nothing: "test"
    };
  }
  render() {
    let cardKey = 0;
    const setOfCards = this.props.words.map(obj => (
      <OneCard name={obj.word} clr={obj.clr} key={cardKey++} />
    ));
    //console.log(cardKey)
    return (
      <div onClick={this.props.onClick}>
        <h2>Cards go here</h2>
        <div className="displayCards">{setOfCards}</div>
      </div>
    );
  }
  //
}

export default CardSet;
