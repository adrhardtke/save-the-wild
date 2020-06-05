import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Join from './pages/Join'
import About from './pages/About'

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
