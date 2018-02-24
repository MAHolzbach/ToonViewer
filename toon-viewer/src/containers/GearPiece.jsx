import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/CharDisplay.css";

//TODO: Color border and text based on "quality" value from API.

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
    let itemQualityColor = qualityColor(this.props.quality);
    let icon = `https://render-us.worldofwarcraft.com/icons/56/${
      this.props.icon
    }.jpg`;
    return (
      <div className={this.props.className}>
        <div className={`${itemQualityColor} gear-piece`}>
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
