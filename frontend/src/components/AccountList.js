import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchAccountsAndBanks } from "../actions";

import "./AccountList.css";
import AccountListDetail from "./AccountListDetail";

class AccountList extends React.Component {
  componentDidMount() {
    this.props.fetchAccountsAndBanks();
  }

  renderAccountsForBank(bank) {
    const accountIds = bank.relationships.accounts.data.map(acc => acc.id);

    return accountIds.map(id => {
      const account = this.props.accounts[id];

      return <AccountListDetail key={id} account={account} />;
    });
  }

  renderAccountsGroupedByBank() {
    return Object.values(this.props.banks).map(bank => {
      return (
        <Fragment key={bank.id}>
          <p className="menu-label">{bank.attributes.name}</p>
          <ul className="menu-list">{this.renderAccountsForBank(bank)}</ul>
        </Fragment>
      );
    });
  }

  render() {
    return <aside className="menu">{this.renderAccountsGroupedByBank()}</aside>;
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
