import React, { Component } from "react";
import Popup from "./Popup";
import "./Modal.css";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal = () => {
    this.setState({
      visible: true
    });
  };
  closeModal = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <button className="modal_btn" onClick={this.openModal}>
          Open Modal
        </button>
        {this.state.visible ? (
          <Popup
            visible={this.openModal}
            title="Option"
            content=""
            closePopup={this.closeModal}
          />
        ) : null}
      </div>
    );
  }
}
export default Modal;
