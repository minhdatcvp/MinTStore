import React, { Component } from 'react';
import laptop from './../../Image/laptop.png';
import smartphone from './../../Image/smartphone.jpg';
import watch from './../../Image/watch.jpg';

import ProductsCommon from './../Home/ProductsCommon';
import Background_laptop from './../../Image/laptop_common.jpg';
import Background_smartphone from './../../Image/smartphone_common.jpg';
import Background_watch from './../../Image/watch_common.png';

import Background_laptop_sale from './../../Image/sale_laptop.jpg';
import Background_smartphone_sale from './../../Image/sale_smartphone.jpg';
import Background_watch_sale from './../../Image/sale_watch.jpg';

import ProductsSale from './../Home/ProductsSale';

import ProductLaptop from './../Laptop/ProductLaptop';
import BlogChild from '../Blogs/BlogChild';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import {dataLaptop} from 'containers/Data/dulieuLaptop.js';
import { dataBlogs } from 'containers/Data/dulieuBlogs';
import Register from 'components/Register';
class Home extends Component {
    state = {
        pointScroll: 0
    }
    homeLaptop = () => dataLaptop.map((value, key) => {
        if (value.class === "homelaptop") {
            return (
                <ProductLaptop detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    homeSmartPhone = () => dataLaptop.map((value, key) => {
        if (value.class === "home_sm") {
            return (
                <ProductLaptop detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    homeWatch = () => dataLaptop.map((value, key) => {
        if (value.class === "home_wt") {
            return (
                <ProductLaptop detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    resetLink = () => {
        window.scrollTo(0, 0);
        
    }
    renderBlog = () => dataBlogs.map((value, key) => {
        return (
            <BlogChild blogDetail={value} key={key} title_blog={value.title} content_blog={value.content_title} image_blog={value.image_title} />
        )
    })
    render() {
        return (
            <div>
                <div className="banner">
                    {/* sử dung carousel của bootstrap 3 ảnh Laptop - SmartPhone - Watch  */}
                    <div id="carouselId" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselId" data-slide-to={0} className="active" />
                            <li data-target="#carouselId" data-slide-to={1} />
                            <li data-target="#carouselId" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img src={laptop} alt="First slide" className="image_banner" />
                                <div className="carousel-caption d-none d-md-block text_banner">
                                    <h2>Laptop</h2>
                                    <br />
                                    <p>A laptop (also laptop computer), is a small, portable personal computer (PC) with a
                                    "clamshell" form factor, typically having a thin LCD or LED computer screen mounted on
                                    the inside of the upper lid of the clamshell and an alphanumeric keyboard on the inside of the lower lid.</p>
                                    <button type="button" className="btn btn-info btn-lap"><NavLink to="/Laptop">Xem thêm</NavLink></button>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <img src={smartphone} alt="Second slide" className="image_banner" />
                                <div className="carousel-caption d-none d-md-block text_banner2">
                                    <h2>SmartPhone</h2>
                                    <br />
                                    <p>Smart phone is a mobile phone which offers advanced technologies with functionality
                                    similar as a personal computer. While offering a standardized platform for application
                                    developers a smart phone performs as complete operating
                                    system software. Secondly, there are also very advanced features in smart phones such as internet, instant messenger and e-mail and also built-in keyboard are very typical. </p>
                                    <button type="button" className="btn btn-info"><NavLink to="/SmartPhone">Xem thêm</NavLink></button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={watch} alt="Third slide" className="image_banner" />
                                <div className="carousel-caption d-none d-md-block text_banner2">
                                    <h2>Watch</h2>
                                    <br />
                                    <p>Along with the continuous development of world fashion, many brands have released a variety of genuine men's watches in styles, styles, colors, sizes ...</p>
                                    <button type="button" className="btn btn-info"><NavLink to="/Watch">Xem thêm</NavLink></button>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="product_common">
                            <h2>Xu Hướng 2020</h2>
                            <hr />
                            <ul>
                                <ProductsCommon image_common={Background_laptop}
                                    title_common="Xu hướng 2020"
                                    price_sale="Laptop Asus"/>
                                <ProductsCommon image_common={Background_smartphone}
                                    title_common="Xu hướng 2020"
                                    price_sale="iPhone"/>
                                <ProductsCommon image_common={Background_watch}
                                    title_common="Xu hướng 2020"
                                    price_sale="Apple Watch "/>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-4 sale_content">
                                
                                <h2> Khuyến Mãi</h2>
                                <hr />
                                <NavLink to="/Laptop" onClick={() => this.resetLink()}><ProductsSale image_sale={Background_laptop_sale} title_sale = " Laptop" /></NavLink>
                                <NavLink to="/SmartPhone" onClick={() => this.resetLink()}><ProductsSale image_sale={Background_smartphone_sale} title_sale = "SmartPhone" /></NavLink>
                                <NavLink to="/Watch" onClick={() => this.resetLink()}><ProductsSale image_sale={Background_watch_sale} title_sale = "Watch"/></NavLink>
                                <h2>News</h2>
                                <hr />
                                {this.renderBlog()}
                            </div>
                            <div className="col-8 product_content">
                                {/* gồm các phần : new - sản phẩm bán chạy - sản phẩm giảm giá - ...  */}
                                <h2>Sản phẩm mới</h2>
                                <hr />
                                <div className="new_laptop">
                                    <h4>Laptop</h4>
                                    <div className="row">
                                            {this.homeLaptop()}
                                    </div>
                                </div>
                                <div className="new_smartphone">
                                    <h4>SmartPhone</h4>
                                    <div className="row">
                                        {this.homeSmartPhone()}
                                    </div>
                                </div>
                                <div className="new_watch">
                                    <h4>Watch</h4>
                                    <div className="row">
                                        {this.homeWatch()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <Register/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;

