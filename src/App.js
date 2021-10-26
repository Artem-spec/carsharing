import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./i18n";
import StartPage from "./components/StartPage/StartPage";
import Reservation from "./components/Reservation/Reservation";
import Geolocation from "./components/Reservation/Geolocation/Geolocation";
import SwitchReservation from "./components/Reservation/SwitchReservation/SwitchReservation";

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
