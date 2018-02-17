import React, { Component } from "react";
import "../App.css";
import "../styles/CharDisplay.css";
import SearchForm from "../containers/SearchForm.jsx";
import CharDisplay from "../containers/CharDisplay.jsx";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Toon Viewer</h1>
        <img
          className="main-background"
          src="https://i.imgur.com/ewvKXsQ.jpg"
          alt=""
        />
        <SearchForm />
        <CharDisplay />
      </div>
    );
  }
}

export default App;
