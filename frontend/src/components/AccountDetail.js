import React from "react";
import { connect } from "react-redux";

const AccountDetail = ({ account }) => {
  if (!account) {
    return <div className="box">Select an account...</div>;
  }

  const { name, number } = account.attributes;

  return (
    <div className="box">
      <h3 className="title is-3">{name}</h3>
      <p>Account number: {number}</p>
    </div>
  );
};

const mapStateToProps = state => {
  const account = state.accounts[state.selectedAccount];
  return { account };
};

export default connect(mapStateToProps)(AccountDetail);
