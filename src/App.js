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

import { connect } from 'react-redux';
import * as action from './StateManagement/Actions/actions'
import * as helperFunction from './helper';

class App extends React.Component {
  componentDidMount() {
    this.props.getBannerData()
    this.props.getServiceData()
    this.props.getWorkData()
    
}
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/service' exact component={ServicePage} />
            <Route path='/portfolio' exact component={PortfolioPage} />
            <Route path='/magento-development-services' component={MagentoServicesComponent} />
            <Route path='/online-store-design-and-development' component={OnlineStore} />
            <Route path='/website-design-and-development' component={WebsiteDesign} />
            <Route path='/logo-and-brand-identity-design' component={logoDesign} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

}

const mapStateToProps = state => {
  console.log('stateApp',state)
  return {
      loading:state.reducerBanner.loading,
      bannerData:state.reducerBanner.bannerData,
      worksData:state.reducerWorks.worksData,
      servicesData:state.reducerService.servicesData
  }
}
const mapDispatchToState = dispatch => {
  return {
      getBannerData:() => dispatch(action.getBannerData()),
      getServiceData:() => dispatch(action.getServiceData()),
      getWorkData:() => dispatch(action.getWorkData())
  }
}
export default connect(mapStateToProps,mapDispatchToState)(App);
