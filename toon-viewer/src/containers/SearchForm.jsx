import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { fetchCharItems } from "../actions/index";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charName: "",
      charRealm: ""
    };
  }

  updateCharName = event => {
    this.setState({
      charName: event.target.value
    });
  };

  updateCharRealm = event => {
    this.setState({
      charRealm: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.fetchCharItems(this.state.charName, this.state.charRealm);
    this.setState({
      charName: "",
      charRealm: ""
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Label for="charName">Enter your character's name:</Label>
          <Input
            required
            id="charName"
            type="text"
            placeholder="Character name..."
            onChange={this.updateCharName}
            value={this.state.charName}
          />
          <Label for="charName">Enter your character's realm:</Label>
          <Input
            required
            id="charName"
            type="text"
            placeholder="Character realm..."
            onChange={this.updateCharRealm}
            value={this.state.charRealm}
          />
          <Button>Search</Button>
        </FormGroup>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCharItems }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchForm);
