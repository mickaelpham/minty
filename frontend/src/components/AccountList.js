import React from "react";
import { connect } from "react-redux";
import { fetchAccounts } from "../actions";

class AccountList extends React.Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  renderAccounts() {
    return this.props.accounts.map(account => {
      const { name, number } = account.attributes;

      return (
        <div className="account" key={account.id}>
          {name} ({number})
        </div>
      );
    });
  }

  render() {
    return <>{this.renderAccounts()}</>;
  }
}

const mapStateToProps = state => {
  return { accounts: state.accounts };
};

export default connect(
  mapStateToProps,
  { fetchAccounts }
)(AccountList);
