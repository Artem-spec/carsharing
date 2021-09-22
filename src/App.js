import React, { Suspense } from 'react';
import './App.css';
import { Switch, Route, useLocation } from "react-router-dom";
import StartPage from './components/StartPage/StartPage';
import './i18n';

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;
  
  return (
    <Suspense fallback="loading">
      <Switch location={background || location}>
        <Route exact path="/carsharing" children={<StartPage />} />
      </Switch>
    </Suspense>

  );
}

export default App;
