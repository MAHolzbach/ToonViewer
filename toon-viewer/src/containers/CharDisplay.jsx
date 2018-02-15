import React, { Component } from "react";
import { connect } from "react-redux";
import GearPiece from "./GearPiece";

class CharDisplay extends Component {
  render() {
    let toon = this.props.char;
    if (this.props.char === null) {
      return <h1>Search for your toon above!</h1>;
    } else {
      let thumbnail = `https://render-us.worldofwarcraft.com/character/${
        toon.thumbnail
      }`;
      return (
        <div>
          <h1>Your toon:</h1>
          <h3>{toon.name}</h3>
          <img src={thumbnail} alt="" />
          <GearPiece icon={toon.items.head.icon} />
          <GearPiece icon={toon.items.shoulder.icon} />
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
