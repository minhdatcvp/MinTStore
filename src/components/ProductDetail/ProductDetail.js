import React, { Component } from 'react';
import ProductLaptop from './../Laptop/ProductLaptop';

import Top_Laptop1 from './../../Image//top_laptop1.jpg';
import Top_Laptop2 from './../../Image//top_laptop2.png';
import Top_Laptop3 from './../../Image//top_laptop3.png';
import Top_Laptop4 from './../../Image//top_laptop4.png';
import Top_Laptop5 from './../../Image//top_laptop5.png';
import Top_Laptop6 from './../../Image//top_laptop6.png';
import Top_Laptop7 from './../../Image//top_laptop7.png';
import Top_Laptop8 from './../../Image//top_laptop8.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { connect } from 'react-redux';
class ProductDetail extends Component {

    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="laptop_content">
                        <div className="row">
                            <div className="col product_image">
                                <img src={this.props.detailData.imageDetail} alt="" />
                            </div>
                            <div className="col">
                                <p className="routerHome"><NavLink to="/Home">Home / </NavLink>Laptop</p>
                                <h3 className="product_name">{this.props.detailData.name}</h3>
                                <p className="price">{this.props.detailData.price} </p>
                                <p>{this.props.detailData.intro} </p>
                                <div className="info_product">
                                    <ul>
                                        <li>{this.props.detailData.info.info1}</li>
                                        <li> {this.props.detailData.info.info2}</li>
                                        <li> {this.props.detailData.info.info3}</li>
                                        <li> {this.props.detailData.info.info4}</li>
                                        <li> {this.props.detailData.info.info5}</li>
                                        <li> {this.props.detailData.info.info6}</li>
                                        <li>  {this.props.detailData.info.info7}</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-info">Mua ngay</button>
                            </div>
                        </div>
                        <div className="evaluate">
                            <h3>Đánh giá</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, odit! Impedit architecto velit, asperiores porro pariatur accusamus. Exercitationem quaerat, nostrum debitis libero porro accusantium consectetur ipsum distinctio illum aperiam inventore.</p>
                        </div>
                        <h3>Sản phẩm tương tự</h3>
                        <hr />
                        <div className="product_same row">
                            <ProductLaptop image_laptop={Top_Laptop1}
                                name_laptop="Máy tính xách tay Asus Gaming ROG Zephyrus Duo GX550LXS-HC055R (i9 10980HK/32GB RAM/1TB+1TB SSD/15.6 UHD/RTX2080 Super MaxQ 8GB/Win10/Xám)"
                                price_laptop="118.990.000 ₫" />
                            <ProductLaptop image_laptop={Top_Laptop2}
                                name_laptop="Dell XPS 13 9300 (2020) 10th 13.3′′ Win10 Core i5 1035G1 / RAM 8GB / SSD 256GB / FHD"
                                price_laptop="14.290.000 ₫" />
                            <ProductLaptop image_laptop={Top_Laptop3}
                                name_laptop="HP Pavilion 15-cs3060TX 8RJ61PA"
                                price_laptop="16.690.000 ₫" />
                            <ProductLaptop image_laptop={Top_Laptop4}
                                name_laptop="Dell Inspiron 5490 70196706 Silver"
                                price_laptop="20.990.000 ₫" />
                            <ProductLaptop image_laptop={Top_Laptop5}
                                name_laptop="Dell Vostro 5590 70197465"
                                price_laptop="16.690.000 ₫" />
                            <ProductLaptop image_laptop={Top_Laptop6}
                                name_laptop="Macbook Air 2020 13.3 inch 256GB – Chính Hãng – MWTL2 – Gold"
                                price_laptop="23.000.000 ₫" />
                            <ProductLaptop image_laptop={Top_Laptop7}
                                name_laptop="Laptop ASUS Zenbook UX434FAC-A6064T Core i5-10210U 8GB LPDDR3 2133MHz 512GB SSD M.2 PCIE 14 FUD IPS Win10 - Hàng Chính Hãng"
                                price_laptop="22.669.000 ₫" />
                            <ProductLaptop image_laptop={Top_Laptop8}
                                name_laptop="Dell Precision 5530 BH Chính hãng tận nhà"
                                price_laptop="34.500.000 ₫" />
                        </div>
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
const mapStateToProps = (state, ownProps) => {
    return {
        detailData: state.productDetail
    }
}

export default connect(mapStateToProps)(ProductDetail)
