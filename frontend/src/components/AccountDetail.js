import React from "react";
import { connect } from "react-redux";

const AccountDetail = ({ account }) => {
  if (!account) {
    return <p>Select an account...</p>;
  }

  const { name, number } = account.attributes;

  return (
    <>
      <h3 className="title is-3">{name}</h3>
      <p>Account number: {number}</p>
    </>
  );
};

const mapStateToProps = state => {
  const account = state.accounts[state.selectedAccount];
  return { account };
};

export default connect(mapStateToProps)(AccountDetail);
