import React, { Component } from "react";
import Emidata from "./Emidata";

class Popup extends Component {
  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, false);
  }
  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.closePopup();
  };
  render() {
    return (
      <div className="modal_container">
        <div className="modal_content" ref={node => (this.node = node)}>
          <div className="modal_header">
            <div className="modal_title">{this.props.title}</div>
            <a className="close_icon" onClick={this.props.closePopup}>
              X
            </a>
          </div>
          <Emidata />
        </div>
      </div>
    );
  }
}

export default Popup;

//https://www.robinwieruch.de/react-fetching-data/
//nested array data
//https://codepen.io/mochiron/pen/jrymLG
