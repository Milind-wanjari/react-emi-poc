import React, { Component } from "react";
import { render } from "react-dom";
import Modal from "./Components/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>Emi Data</p>
        <Modal />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
