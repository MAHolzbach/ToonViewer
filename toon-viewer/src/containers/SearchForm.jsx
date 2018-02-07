import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class SearchForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="charName">Enter your character's name:</Label>
          <Input id="charName" type="text" placeholder="Character name..." />
          <Label for="charName">Enter your character's realm:</Label>
          <Input id="charName" type="text" placeholder="Character realm..." />
          <Button>Search</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SearchForm;
