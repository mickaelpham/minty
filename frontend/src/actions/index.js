import axios from "axios";

export const fetchAccounts = () => async dispatch => {
  const response = await axios.get("/api/accounts");
  dispatch({ type: "FETCH_ACCOUNTS", payload: response.data.data });
};
