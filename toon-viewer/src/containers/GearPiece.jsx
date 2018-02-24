import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/CharDisplay.css";

class GearPiece extends Component {
  render() {
    const qualityColor = val => {
      let quality;
      switch (val) {
        case 1:
          quality = "gray";
          break;
        case 2:
          quality = "green";
          break;
        case 3:
          quality = "blue";
          break;
        case 4:
          quality = "purple";
          break;
      }
      return quality;
    };
    let icon = `https://render-us.worldofwarcraft.com/icons/56/${
      this.props.icon
    }.jpg`;
    return (
      <div className={this.props.className}>
        <div className={`${qualityColor(this.props.quality)} gear-piece`}>
          <p className="name">{this.props.name}</p>
          <p className="ilevel">{this.props.itemLevel}</p>
          <img className="icon" src={icon} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ char }) => {
  return {
    char
  };
};

export default connect(mapStateToProps)(GearPiece);
