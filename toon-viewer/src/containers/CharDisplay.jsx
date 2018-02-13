import React, { Component } from "react";
import { connect } from "react-redux";

class CharDisplay extends Component {
  renderChar = charData => {
    let charDataRender;
    if (charData === null) {
      charDataRender = <h1>Search for your toon above!</h1>;
    } else {
      charDataRender = (
        <div>
          <h1>Your toon:</h1>
          <h3>{this.props.char.name}</h3>
        </div>
      );
    }
    return charDataRender;
  };

  render() {
    let toon = this.props.char;
    if (this.props.char === null) {
      return <h1>Search for your toon above!</h1>;
    } else {
      return (
        <div>
          <h1>Your toon:</h1>
          <h3>{toon.name}</h3>
          <p>{toon.class}</p>
          <p>{toon.faction}</p>
          <img src={toon.thumbnail} alt="" />
          <h4>{toon.items.averageItemLevel}</h4>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ char }) => {
  return {
    char
  };
};

export default connect(mapStateToProps)(CharDisplay);
