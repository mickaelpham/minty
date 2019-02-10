import _ from "lodash";
import axios from "axios";

export const fetchAccountsAndBanks = () => async (dispatch, getState) => {
  await dispatch(fetchAccounts());

  _.chain(getState().accounts)
    .map(account => account.attributes.bankId)
    .uniq()
    .each(bankId => dispatch(fetchBank(bankId)))
    .value();
};

export const fetchAccounts = () => async dispatch => {
  const response = await axios.get("/api/accounts");
  dispatch({ type: "FETCH_ACCOUNTS", payload: response.data.data });
};

export const fetchBank = bankId => async dispatch => {
  const response = await axios.get(`/api/banks/${bankId}`);
  dispatch({ type: "FETCH_BANK", payload: response.data.data });
};
