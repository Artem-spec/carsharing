import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./i18n";
import StartPage from "./components/StartPage/StartPage";

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <Switch location={background || location}>
      <Route exact path="/carsharing" children={<StartPage />} />
    </Switch>
  );
};

export default App;
