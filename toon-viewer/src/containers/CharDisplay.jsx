import React, { Component } from "react";
import { connect } from "react-redux";
import GearPiece from "./GearPiece";
import "../styles/CharDisplay.css";

class CharDisplay extends Component {
  checkForEmpties = gearArray => {
    const shirtPlaceholder = ["shirt", { icon: null }];
    const tabardPlaceholder = ["tabard", { icon: null }];
    const offHandPlaceholder = ["offHand", { icon: null }];
    if (gearArray[5][0] !== "shirt") {
      gearArray.splice(5, 0, shirtPlaceholder);
    }
    if (gearArray[6][0] !== "tabard") {
      gearArray.splice(6, 0, tabardPlaceholder);
    }
    if (gearArray.length < 18) {
      gearArray.push(offHandPlaceholder);
    }
  };
  render() {
    let toon = this.props.char;
    if (this.props.char === null) {
      return <h1>Search for your toon above!</h1>;
    } else {
      let thumbnail = `https://render-us.worldofwarcraft.com/character/${
        toon.thumbnail
      }`;

      let gearArray = Object.entries(toon.items).slice(2);
      console.log(gearArray);
      this.checkForEmpties(gearArray);
      console.log(gearArray);

      return (
        <div>
          <h1>Your toon:</h1>
          <h3>{toon.name}</h3>
          <h4>{toon.items.averageItemLevel}</h4>
          <div className="char-display">
            <img className="icon" src={thumbnail} alt="" />
            {gearArray.map(item => (
              <GearPiece
                className={item[0]}
                icon={item[1].icon}
                name={item[1].name}
                itemLevel={item[1].itemLevel}
                quality={item[1].quality}
                key={item[0]}
              />
            ))}
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
