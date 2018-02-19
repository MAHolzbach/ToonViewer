import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/CharDisplay.css";

class GearPiece extends Component {
  render() {
    let icon = `https://render-us.worldofwarcraft.com/icons/56/${
      this.props.icon
    }.jpg`;
    return (
      <div className={this.props.className}>
        <p>{this.props.name}</p>
        <img src={icon} />
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
