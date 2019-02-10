import { combineReducers } from "redux";

const accounts = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ACCOUNTS":
      return action.payload;
    default:
      return state;
  }
};

const banks = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BANK":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({ accounts, banks });
