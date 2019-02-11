import { combineReducers } from "redux";

const accounts = (state = {}, action) => {
  if (action.type !== "FETCH_ACCOUNTS") {
    return state;
  }

  return action.payload.reduce((obj, account) => {
    obj[account.id] = account;
    return obj;
  }, {});
};

const banks = (state = {}, action) => {
  if (action.type !== "FETCH_BANKS") {
    return state;
  }

  return action.payload.reduce((obj, bank) => {
    obj[bank.id] = bank;
    return obj;
  }, {});
};

const selectedAccount = (state = null, action) => {
  if (action.type !== "SELECT_ACCOUNT") {
    return state;
  }

  return action.payload;
};

export default combineReducers({ accounts, banks, selectedAccount });
