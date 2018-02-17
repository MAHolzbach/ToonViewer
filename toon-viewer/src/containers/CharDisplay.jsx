import React, { Component } from "react";
import { connect } from "react-redux";
import GearPiece from "./GearPiece";
import "../styles/CharDisplay.css";

//TODO: May need to push items to an array to better manipulate them via .map().

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
          <h4>{toon.items.averageItemLevel}</h4>
          <div className="char-display">
            <img className="icon" src={thumbnail} alt="" />
            <GearPiece
              className="head"
              icon={toon.items.head.icon}
              name={toon.items.head.name}
            />
            <GearPiece className="hands" icon={toon.items.hands.icon} />
            <GearPiece className="neck" icon={toon.items.neck.icon} />
            <GearPiece className="waist" icon={toon.items.waist.icon} />
            <GearPiece className="shoulders" icon={toon.items.shoulder.icon} />
            <GearPiece className="legs" icon={toon.items.legs.icon} />
            <GearPiece className="back" icon={toon.items.back.icon} />
            <GearPiece className="feet" icon={toon.items.feet.icon} />
            <GearPiece className="chest" icon={toon.items.chest.icon} />
            <GearPiece className="ring1" icon={toon.items.finger1.icon} />
            <GearPiece className="tabard" icon={toon.items.shoulder.icon} />
            <GearPiece className="ring2" icon={toon.items.finger2.icon} />
            <GearPiece className="shirt" icon={toon.items.shoulder.icon} />
            <GearPiece className="trinket1" icon={toon.items.trinket1.icon} />
            <GearPiece className="wrists" icon={toon.items.wrist.icon} />
            <GearPiece className="trinket2" icon={toon.items.trinket2.icon} />
          </div>
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
