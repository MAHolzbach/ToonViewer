import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

class CharDisplay extends Component {
  renderChar = charData => {
    return this.props.char.map(item => {
      return <ListGroupItem>{item.averageItemLevel}</ListGroupItem>;
    });
  };

  render() {
    return <ListGroup>{this.renderChar()}</ListGroup>;
  }
}

const mapStateToProps = state => {
  return {
    char: state.char
  };
};

export default connect(mapStateToProps)(CharDisplay);
