import '../css/Home.css';
import '../css/Laptop.css';
import '../css/Contact.css';
import '../css/ProductDetail.css';
import '../resources/queries_home.css';
import '../resources/queries_contact.css';
import '../resources/queries_blog.css';
import '../resources/queries_laptop.css';
import '../css/App.css';
import '../css/account.css';

import Footer from './Footer';
import AlertComponent from './AlertComponent';
import Nav from './Nav';
import RouterLink from '../Router/RouterLink';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Account from './Account';
import { connect } from 'react-redux';


class App extends Component {
  
  displayLogin = () => {
    if (this.props.statusLogin) {
      return (
        <Account />
      )
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <AlertComponent/>
          <RouterLink />
          <Footer onClick={() => this.resetPage()}/>
          {this.displayLogin()}
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    /* nhận giá trị status để hiển thị component Account*/
    statusLogin: state.statusLogin
  }
}
export default connect(mapStateToProps)(App)
