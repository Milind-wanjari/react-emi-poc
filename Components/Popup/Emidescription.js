import React, { Component } from "react";

class Emidescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBreakup: false
    };
    this.emiBreakup = this.emiBreakup.bind(this);
  }
  emiBreakup = () => {
    if (this.state.showBreakup) {
      this.setState({ showBreakup: false });
    } else {
      this.setState({ showBreakup: true });
    }
  };
  render() {
    return (
      <li
        className="emi-details"
        index={this.props.index}
        onClick={this.emiBreakup}
      >
        <div className="">
          <span>
            <span>{this.props.timeDuration}</span>
            <span>EMI @</span>
            <span>{this.props.interest}</span>
            <span>pa </span>
          </span>
          <span>
            {this.props.monthEmi}
            <span />
            <span>/month</span>
          </span>
        </div>
        <div
          className={
            "amount_breakup " + (this.state.showBreakup ? "show" : "hide")
          }
        >
          <div className="prc_section breakup_info">
            <span className="lable ">price </span>
            <span className="value">{this.props.prdprice}</span>
          </div>
          <div className="breakup_info">
            <span className="lable">interest paid to bank </span>
            <span className="value">
              <span className="int_amount">{this.props.totalInterest}</span>
            </span>
          </div>
          <div className="breakup_info">
            <span className="lable">total amount payable </span>
            <span className="value">{this.props.finalAmount}</span>
          </div>
        </div>
      </li>
    );
  }
}
export default Emidescription;
