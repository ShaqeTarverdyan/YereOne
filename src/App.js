import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'

import Header from './Components/Header/index';
import Home from './Components/Home/index';
import ServicePage from './Components/Services/index';
import Footer from './Components/Footer/index';
import MagentoServicesComponent from './Components/Services/MagentoServices/index';
import {getBannerData } from './StateManagement/Actions/actions'
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/service' component={ServicePage} />
          <Route  path='/magento-development-services' component={MagentoServicesComponent}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
