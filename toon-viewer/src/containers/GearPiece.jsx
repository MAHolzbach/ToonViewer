import React, { Component } from "react";
import { connect } from "react-redux";

class GearPiece extends Component {
  render() {
    let toon = this.props.char;
    let icon = `https://render-us.worldofwarcraft.com/icons/56/${
      this.props.icon
    }.jpg`;
    return (
      <div>
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
