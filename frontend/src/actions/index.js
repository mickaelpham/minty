import axios from "axios";

export const fetchAccounts = () => async dispatch => {
  const response = await axios.get("/api/accounts");
  dispatch({ type: "FETCH_ACCOUNTS", payload: response.data.data });
};

export const fetchBanks = () => async dispatch => {
  const response = await axios.get("/api/banks");
  dispatch({ type: "FETCH_BANKS", payload: response.data.data });
};

export const selectAccount = id => {
  return { type: "SELECT_ACCOUNT", payload: id };
};
