import React, { Component } from "react";
import ModalContaint from "./Popup/ModalContaint";
class Emidata extends Component {
  constructor(props) {
    super(props);
    this.state = {
  "data": [
    {
      "id": "1",
      "name": "YES Bank",
      "bankOffer": [
        {
          "id": "1.1",
          "timeDuration": "9",
          "interest": "12"
        },
        {
          "id": "1.2",
          "timeDuration": "24",
          "interest": "15"
        },
        {
          "id": "1.3",
          "timeDuration": "36",
          "interest": "15"
        }
      ]
    },
    {
      "id": "2",
      "name": "CITI Bank",
      "bankOffer": [
        {
          "id": "2.1",
          "timeDuration": "12",
          "interest": "10"
        },
        {
          "id": "2.2",
          "timeDuration": "24",
          "interest": "12"
        },
        {
          "id": "2.3",
          "timeDuration": "36",
          "interest": "20"
        }
      ]
    },
    {
      "id": "3",
      "name": "ICICI Bank",
      "bankOffer": [
        {
          "id": "3.1",
          "timeDuration": "9",
          "interest": "12"
        },
        {
          "id": "3.2",
          "timeDuration": "24",
          "interest": "15"
        },
        {
          "id": "3.3",
          "timeDuration": "36",
          "interest": "15"
        }
      ]
    }
  ],
  "price": "14990"
}
  }
  render() {
    const { data, price } = this.state;
    return (
      <div className="modal_body">
        <ModalContaint bankData={this.state} />
      </div>
    );
  }
}
export default Emidata;
