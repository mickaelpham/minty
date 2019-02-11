import React from "react";
import { connect } from "react-redux";
import { selectAccount } from "../actions";

class AccountListDetail extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.selectAccount(this.props.account.id);
  }

  render() {
    const { name, number } = this.props.account.attributes;
    const isActive = this.props.account.id === this.props.selected;

    return (
      <li>
        <a
          className={`bank-account-name ${isActive ? "is-active" : ""}`}
          onClick={e => this.handleClick(e)}
        >
          {name} (...{number.slice(-4)})
        </a>
      </li>
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
