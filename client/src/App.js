
import './css/style.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './views/Main';
import SolarSystem from './views/SolarSystem'
import MessageBoard from './views/MessageBoard'


function App() {
  return (
    <div className="App container2 p-3"
      style={{ color: "yellow", position: "absolute", left: "5%" }} >
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/solarsystem'>
            <SolarSystem/>
          </Route>
          <Route exact path='/messageboard'>
            <MessageBoard/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
