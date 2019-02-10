import React from "react";
import { connect } from "react-redux";
import { fetchAccountsAndBanks } from "../actions";

class AccountList extends React.Component {
  componentDidMount() {
    this.props.fetchAccountsAndBanks();
  }

  renderBanksAndAccounts() {
    return this.props.banks.map(bank => {
      const accounts = this.props.accounts
        .filter(account => account.attributes.bankId === parseInt(bank.id))
        .map(account => <li key={account.id}>{account.attributes.name}</li>);

      return (
        <div className="bank" key={bank.id}>
          <h5>{bank.attributes.name}</h5>
          <ul>{accounts}</ul>
        </div>
      );
    });
  }

  render() {
    return <div className="content">{this.renderBanksAndAccounts()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    banks: state.banks
  };
};

export default connect(
  mapStateToProps,
  { fetchAccountsAndBanks }
)(AccountList);
