import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Register from 'components/Register';
import {dataLaptop} from 'containers/Data/dulieuLaptop.js';
import ProductLaptop from './../Laptop/ProductLaptop';
class Watch extends Component {
    state = {
        cars: "md_wt"
    }
    isChange = (event) => {
        this.setState({
            cars: event.target.value
        })
    }
    renderLaptopNews = () => dataLaptop.map((value, key) => {
        if (value.class === "mn_wt") {
            return (
                <ProductLaptop detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopSale = () => dataLaptop.map((value, key) => {
        if (value.class === "km_wt") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopCommon = () => dataLaptop.map((value, key) => {
        if (value.class === "pb_wt") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopApple = () => dataLaptop.map((value, key) => {
        if (value.class === "ap_wt") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopCasio = () => dataLaptop.map((value, key) => {
        if (value.class === "ca_wt") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopXiaomi = () => dataLaptop.map((value, key) => {
        if (value.class === "xi_wt") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    
    renderProduct = () => {
        if (this.state.cars === "md_wt") {
            return (
                <div>
                    <h3>Sản phẩm mới nhất</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopNews()}
                    </div>
                    <h3>Sản phẩm khuyến mãi</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopSale()}
                    </div>
                    <h3>Sản phẩm phổ biến</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopCommon()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "mn_wt") {
            return (
                <div>
                    <h3>Sản phẩm mới nhất</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopNews()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "km_wt") {
            return (
                <div>
                    <h3>Sản phẩm khuyến mãi</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopSale()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "pb_wt") {
            return (
                <div>
                    <h3>Sản phẩm phổ biến</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopCommon()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "ap_wt") {
            return (
                <div>
                    <h3>Sản phẩm Apple</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopApple()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "ca_wt") {
            return (
                <div>
                    <h3>Sản phẩm Casio</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopCasio()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "xi_wt") {
            return (
                <div>
                    <h3>Sản phẩm Xiaomi</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopXiaomi()}
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="laptop_content">
                        <p className="routerHome"><NavLink to="/Home">Home / </NavLink> Watch</p>
                        <h2 className="title">Watch</h2>
                        <hr />
                        <div className="selection">
                            <select name="cars" id="cars" onChange={(event) => this.isChange(event)}>
                                <option value="md_wt">Thứ tự mặc định</option>
                                <option value="mn_wt">Sản phẩm mới nhất</option>
                                <option value="km_wt">Sản phẩm khuyến mãi</option>
                                <option value="pb_wt">Sản phẩm phổ biến</option>
                                <option value="ca_wt">Casio </option>
                                <option value="ap_wt">Apple </option>
                                <option value="xi_wt">Xiaomi </option>
                            </select>
                        </div>
                        {this.renderProduct()}
                    </div>
                    <Register/>
                </div>
            </div>
        );
    }
}

export default Watch;
