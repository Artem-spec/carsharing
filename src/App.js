import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import StartPage from './components/StartPage/StartPage';
import './i18n';

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
      <Switch location={background || location}>
        <Route exact path="/carsharing" children={<StartPage />} />
      </Switch>

  );
}

export default App;
