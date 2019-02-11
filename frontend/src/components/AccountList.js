import React from "react";
import { connect } from "react-redux";
import { fetchAccounts, fetchBanks } from "../actions";

import "./AccountList.css";
import AccountListDetail from "./AccountListDetail";

class AccountList extends React.Component {
  componentDidMount() {
    this.props.fetchAccounts();
    this.props.fetchBanks();
  }

  renderAccountsForBank(bank) {
    const accountIds = bank.relationships.accounts.data.map(acc => acc.id);

    return accountIds.map(id => {
      const account = this.props.accounts[id];

      if (!account) {
        return <></>;
      }

      return <AccountListDetail key={id} account={account} />;
    });
  }

  renderAccountsGroupedByBank() {
    return Object.values(this.props.banks).map(bank => {
      return (
        <div className="bank box" key={bank.id}>
          <div className="bank-name">
            <strong>{bank.attributes.name}</strong>
          </div>
          <div className="bank-accounts">
            {this.renderAccountsForBank(bank)}
          </div>
        </div>
      );
    });
  }

  render() {
    return <>{this.renderAccountsGroupedByBank()}</>;
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
  { fetchAccounts, fetchBanks }
)(AccountList);
