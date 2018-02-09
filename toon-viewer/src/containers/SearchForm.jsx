import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { fetchCharItems } from "../actions/index";
import axios from "axios";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charName: "",
      charRealm: ""
    };
  }

  fetchCharItems = async (char, realm) => {
    const API_KEY = "sv8x89skdsw9y7t5mmk3n8mrugq6eyyu";
    const ROOT_URL = `https://us.api.battle.net/wow/character/`;
    const FETCH_CHAR = "FETCH_CHAR";

    const url = `${ROOT_URL}${realm}/${char}?fields=items&locale=en_US&jsonp=false&apikey=${API_KEY}`;
    const request = await axios.get(url);
    console.log(request.data);

    return {
      type: FETCH_CHAR,
      payload: request
    };
  };

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
    this.fetchCharItems(this.state.charName, this.state.charRealm);
    this.setState({
      charName: "",
      charRealm: ""
    });
    console.log(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Label for="charName">Enter your character's name:</Label>
          <Input
            id="charName"
            type="text"
            placeholder="Character name..."
            onChange={event => this.updateCharName(event)}
          />
          <Label for="charName">Enter your character's realm:</Label>
          <Input
            id="charName"
            type="text"
            placeholder="Character realm..."
            onChange={event => this.updateCharRealm(event)}
          />
          <Button>Search</Button>
        </FormGroup>
      </Form>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ fetchCharItems }, dispatch);
// };

// export default connect(null, mapDispatchToProps)(SearchForm);
