import React from "react";
import AccountList from "./AccountList";
import AccountDetail from "./AccountDetail";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="columns">
        <div className="column is-4">
          <AccountList />
        </div>

        <div className="column">
          <AccountDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
