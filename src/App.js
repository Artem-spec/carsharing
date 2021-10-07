import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./i18n";
import StartPage from "./components/StartPage/StartPage";
import Reservation from "./components/Reservation/Reservation";

const App = () => {
  return (
    <BrowserRouter basename="/carsharing"> 
      <Switch>
        <Route exact path="/"  children={<StartPage />} />
        <Route path="/reservation">
          <Reservation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
