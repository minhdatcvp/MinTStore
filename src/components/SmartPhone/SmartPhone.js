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
class SmartPhone extends Component {
    state = {
        cars: "md_sm"
    }
    isChange = (event) => {
        this.setState({
            cars: event.target.value
        })
    }
    renderLaptopNews = () => dataLaptop.map((value, key) => {
        if (value.class === "mn_sm") {
            return (
                <ProductLaptop detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopSale = () => dataLaptop.map((value, key) => {
        if (value.class === "km_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopCommon = () => dataLaptop.map((value, key) => {
        if (value.class === "pb_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopIphone = () => dataLaptop.map((value, key) => {
        if (value.class === "ip_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopSamsung = () => dataLaptop.map((value, key) => {
        if (value.class === "ss_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopHuawei = () => dataLaptop.map((value, key) => {
        if (value.class === "hw_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopOppo = () => dataLaptop.map((value, key) => {
        if (value.class === "op_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopXiaomi = () => dataLaptop.map((value, key) => {
        if (value.class === "xi_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopLG = () => dataLaptop.map((value, key) => {
        if (value.class === "lg_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopLenovo = () => dataLaptop.map((value, key) => {
        if (value.class === "le_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderProduct = () => {
        if (this.state.cars === "md_sm") {
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
        if (this.state.cars === "mn_sm") {
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
        if (this.state.cars === "km_sm") {
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
        if (this.state.cars === "pb_sm") {
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
        if (this.state.cars === "le_sm") {
            return (
                <div>
                    <h3>Sản phẩm Lenovo</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopLenovo()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "ip_sm") {
            return (
                <div>
                    <h3>Sản phẩm Iphone</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopIphone()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "ss_sm") {
            return (
                <div>
                    <h3>Sản phẩm Samsung</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopSamsung()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "hw_sm") {
            return (
                <div>
                    <h3>Sản phẩm Huawei</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopHuawei()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "op_sm") {
            return (
                <div>
                    <h3>Sản phẩm Oppo</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopOppo()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "xi_sm") {
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
        if (this.state.cars === "lg_sm") {
            return (
                <div>
                    <h3>Sản phẩm LG</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopLG()}
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
                        <p className="routerHome"><NavLink to="/Home">Home / </NavLink> SmartPhone</p>
                        <h2 className="title">SmartPhone</h2>
                        <hr />
                        <div className="selection">
                            <select name="cars" id="cars" onChange={(event) => this.isChange(event)}>
                                <option value="md_sm">Thứ tự mặc định</option>
                                <option value="mn_sm">Sản phẩm mới nhất</option>
                                <option value="km_sm">Sản phẩm khuyến mãi</option>
                                <option value="pb_sm">Sản phẩm phổ biến</option>
                                <option value="ip_sm">iPhone</option>
                                <option value="ss_sm">Samsung </option>
                                <option value="hw_sm">Huawei </option>
                                <option value="op_sm">Oppo </option>
                                <option value="xi_sm">Xiaomi</option>
                                <option value="lg_sm">LG</option>
                                <option value="le_sm">Lenovo</option>
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

export default SmartPhone;
