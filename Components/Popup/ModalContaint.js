import React, { Component } from "react";
import Emidescription from "./Emidescription";
class ModalContaint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.bankDetail = this.bankDetail.bind(this);
  }
  showLeftCol = bankData => {
    return bankData.data.map((bank, index) => {
      return (
        <li
          className={"provider_name" + " " + (index == 0 ? "active" : "")}
          key={bank.name}
          bankName={"bank_" + index}
          bankindex={index}
          onClick={this.bankDetail}
        >
          <div className="bank_title">{bank.name}</div>
        </li>
      );
    });
  };
  showRightCol = bankData => {
    //EMI Formula
    const showDesc = (monthly, intrest, emiPrdPrice) => {
      // E = A . r(1+r)^n =  / ((1+r)^n - 1)
      // n = total number of months
      //r=interest rate in % divided by 12
      const month = parseFloat(monthly),
        emiInt = parseFloat(intrest),
        intRate = parseFloat((emiInt / (100 * 12)).toFixed(4)),
        intF = 1 + intRate,
        intRateCalc = Math.pow(intF, month),
        emi = Math.ceil(
          emiPrdPrice * ((intRate * intRateCalc) / (intRateCalc - 1))
        ),
        totalAmount = month * emi,
        intAmount = totalAmount - emiPrdPrice,
        finalvalue = [emi, intAmount, totalAmount];
      return finalvalue;
    };

    return bankData.data.map((bank, index) => {
      return (
        <div id={"bank_" + index} className={index == 0 ? "active" : "hide"}>
          <div>
            <span>{bank.name} </span>
            <span>EMI Plan</span>
          </div>
          <ul>
            {bank.bankOffer.map((offer, idxBank) => {
              const Updatedvalue = showDesc(
                offer.timeDuration,
                offer.interest,
                bankData.price
              );
              return (
                <Emidescription
                  key={offer.id}
                  timeDuration={offer.timeDuration}
                  interest={offer.interest}
                  monthEmi={Updatedvalue[0]}
                  totalInterest={Updatedvalue[1]}
                  prdprice={bankData.price}
                  finalAmount={Updatedvalue[2]}
                  index={idxBank}
                />
              );
            })}
          </ul>
        </div>
      );
    });
  };
  bankDetail = e => {
    e.stopPropagation();
    let node = e.currentTarget;
    let RtChild =
      node.parentElement.parentElement.nextElementSibling.childNodes;
    let LtChild = document.querySelectorAll(".provider_name ");
    LtChild.forEach(el => el.classList.remove("active"));
    RtChild.forEach(el => {
      node.getAttribute("bankname") == el.getAttribute("id")
        ? (el.classList.add("active"), el.classList.remove("hide"))
        : (el.classList.remove("active"), el.classList.add("hide"));
    });
    node.classList.add("active");
  };
  render() {
    return (
      <div className="modal_inner_content">
        <div className="left_col">
          <ul>{this.showLeftCol(this.props.bankData)}</ul>
        </div>
        <div className="right_col">
          {this.showRightCol(this.props.bankData)}
        </div>
      </div>
    );
  }
}
export default ModalContaint;
