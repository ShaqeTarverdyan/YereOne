import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'

import Header from './Components/Header/index';
import Home from './Components/Home/index';
import ServicePage from './Components/Services/index';
import Footer from './Components/Footer/index';
import PortfolioPage from './Components/Portfolio/index';
import MagentoServicesComponent from './Components/Services/MagentoServices/index';
import OnlineStore from './Components/Services/OnlineStore/index';
import WebsiteDesign from './Components/Services/WebsiteDesign/index';
import logoDesign from './Components/Services/LogoDesign/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/service' component={ServicePage} />
          <Route  path='/portfolio' component={PortfolioPage}/>
          <Route  path='/magento-development-services' component={MagentoServicesComponent}/>
          <Route path='/online-store-design-and-development' component={OnlineStore}/>
          <Route  path='/website-design-and-development' component={WebsiteDesign}/>
          <Route path='/logo-and-brand-identity-design' component={logoDesign}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
