import React, { Component } from 'react';
import ProductLaptop from './ProductLaptop';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import {dataLaptop} from 'containers/Data/dulieuLaptop.js';

class Laptop extends Component {
    state = {
        cars: "md"
    }
    isChange = (event) => {
        this.setState({
            cars: event.target.value
        })
    }
    renderLaptopNews = () => dataLaptop.map((value, key) => {
        if (value.class === "mn") {
            return (
                <ProductLaptop detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopSale = () => dataLaptop.map((value, key) => {
        if (value.class === "km") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopCommon = () => dataLaptop.map((value, key) => {
        if (value.class === "pb") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopLenovo = () => dataLaptop.map((value, key) => {
        if (value.class === "lenovo") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopApple = () => dataLaptop.map((value, key) => {
        if (value.class === "apple") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopAsus = () => dataLaptop.map((value, key) => {
        if (value.class === "asus") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopDell = () => dataLaptop.map((value, key) => {
        if (value.class === "dell") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopAcer = () => dataLaptop.map((value, key) => {
        if (value.class === "acer") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderProduct = () => {
        if (this.state.cars === "md") {
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
        if (this.state.cars === "mn") {
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
        if (this.state.cars === "km") {
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
        if (this.state.cars === "pb") {
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
        if (this.state.cars === "lenovo") {
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
        if (this.state.cars === "apple") {
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
        if (this.state.cars === "asus") {
            return (
                <div>
                    <h3>Sản phẩm Asus</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopAsus()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "dell") {
            return (
                <div>
                    <h3>Sản phẩm Dell</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopDell()}
                    </div>
                </div>
            )
        }
        if (this.state.cars === "acer") {
            return (
                <div>
                    <h3>Sản phẩm Acer</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopAcer()}
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
                        <p className="routerHome"><NavLink to="/Home">Home / </NavLink>Laptop</p>
                        <h2 className="title">LapTop</h2>
                        <hr />
                        <div className="selection">
                            <select name="cars" id="cars" onChange={(event) => this.isChange(event)}>
                                <option value="md">Thứ tự mặc định</option>
                                <option value="mn">Sản phẩm mới nhất</option>
                                <option value="km">Sản phẩm khuyến mãi</option>
                                <option value="pb">Sản phẩm phổ biến</option>
                                <option value="lenovo">Lenovo </option>
                                <option value="apple">Apple </option>
                                <option value="asus">Asus </option>
                                <option value="dell">Dell</option>
                                <option value="acer">Acer</option>
                            </select>
                        </div>
                        {this.renderProduct()}
                    </div>
                    <div className="register">
                        <h3>ĐĂNG KÝ NHẬN THÔNG TIN</h3>
                        <form className="form-inline my-2 my-lg-0 ">
                            <input className="form-control mr-sm-2" type="text" placeholder="Đăng ký" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Laptop;
