import React from "react";
import AccountList from "./AccountList";
import AccountDetail from "./AccountDetail";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="columns">
        <div className="column is-3-desktop is-4-tablet">
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
