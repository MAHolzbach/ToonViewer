import React, { Component } from "react";
import "../App.css";
import SearchForm from "../containers/SearchForm.jsx";
import CharDisplay from "../containers/CharDisplay.jsx";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>The World of Warcraft Toon Viewer</h1>
        <SearchForm />
        <CharDisplay />
      </div>
    );
  }
}

export default App;
