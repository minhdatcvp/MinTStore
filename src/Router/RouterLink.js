import InfoUserDetail from 'components/InfoUserDetail/InfoUserDetail';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Blogs from '../components/Blogs/Blogs';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Laptop from '../components/Laptop/Laptop';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import SmartPhone from '../components/SmartPhone/SmartPhone';
import Watch from '../components/Watch/Watch';

class RouterLink extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/Laptop">
                        <Laptop />
                    </Route>
                    <Route path="/SmartPhone">
                        <SmartPhone />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Home">
                        <Home />
                    </Route>
                    <Route path="/Watch">
                        <Watch />
                    </Route>
                    <Route path="/Blogs">
                        <Blogs />
                    </Route>
                    <Route path="/Contact">
                        <Contact />
                    </Route>
                    <Route path="/ProductDetail">
                        <ProductDetail />
                    </Route>
                    <Route path="/InfoUserDetail">
                        <InfoUserDetail/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default RouterLink;
