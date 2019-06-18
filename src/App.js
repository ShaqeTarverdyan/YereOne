import React from 'react';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import './App.css'

import Header from './Components/Header/index';
import Home from './Components/Home/index';

function App() {
  return (
    <Router>
        <div className="App">
        <Header/>
        <Switch>
            <Route path='/' component={Home}/>
        </Switch>
        </div>
    </Router>

  );
}

export default App;
