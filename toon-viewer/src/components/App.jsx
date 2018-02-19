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
        <SearchForm />
        <CharDisplay />
      </div>
    );
  }
}

export default App;
