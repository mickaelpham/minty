import React from "react";
import { connect } from "react-redux";
import { selectAccount } from "../actions";

class AccountListDetail extends React.Component {
  handleClick() {
    this.props.selectAccount(this.props.account.id);
  }

  render() {
    const { name, number } = this.props.account.attributes;
    const isSelected = this.props.account.id === this.props.selected;

    return (
      <div className="bank-account">
        <span
          className={`bank-account-name ${isSelected ? "selected" : ""}`}
          onClick={() => this.handleClick()}
        >
          {name} (...{number.slice(-4)})
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selected: state.selectedAccount };
};

export default connect(
  mapStateToProps,
  { selectAccount }
)(AccountListDetail);
