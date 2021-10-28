import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import "./i18n";
import StartPage from "./components/StartPage/StartPage";
import Reservation from "./components/Reservation/Reservation";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" children={<StartPage />} />
        <Route path="/reservation">
          <Reservation />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
