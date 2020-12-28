import React, { Component } from 'react';
import BlogChild from './BlogChild';
import ProductsSale from './../Home/ProductsSale';

import Background_laptop_sale from './../../Image/sale_laptop.jpg';
import Background_smartphone_sale from './../../Image/sale_smartphone.jpg';
import Background_watch_sale from './../../Image/sale_watch.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { dataBlogs } from 'containers/Data/dulieuBlogs';
import Register from 'components/Register';
class Blogs extends Component {
    renderBlog = () => dataBlogs.map((value, key) => {
        return (
            <BlogChild blogDetail={value} key={key} title_blog={value.title} content_blog={value.content_title} image_blog={value.image_title} />
        )
    })
    resetLink = () => {
        window.scrollTo(0, 0);
        
    }
    render() {
        return (
            <div className="content">
                <div className="container">
                    <p className="routerHome"><NavLink to="/Home">Home /</NavLink>  News</p>
                    <h2 className="title">News</h2>
                    <hr />
                    <div className="row">
                        <div className="col-9">
                            {this.renderBlog()}
                        </div>
                        <div className="col-3 sale_content">
                            <NavLink to="/Laptop" onClick={() => this.resetLink()}><ProductsSale image_sale={Background_laptop_sale} title_sale=" Laptop" /></NavLink>
                            <NavLink to="/SmartPhone" onClick={() => this.resetLink()}><ProductsSale image_sale={Background_smartphone_sale} title_sale="SmartPhone" /></NavLink>
                            <NavLink to="/Watch" onClick={() => this.resetLink()}><ProductsSale image_sale={Background_watch_sale} title_sale="Watch" /></NavLink>
                        </div>
                    </div>
                    <Register/>
                </div>
            </div>

        );
    }
}

export default Blogs;
