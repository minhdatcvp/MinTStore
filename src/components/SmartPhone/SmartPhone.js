import React, { Component } from 'react';

import ProductSmartPhone from './ProductSmartPhone';

import Top_Laptop1 from './../../Image//top_laptop1.jpg';
import Top_Laptop2 from './../../Image//top_laptop2.png';
import Top_Laptop3 from './../../Image//top_laptop3.png';
import Top_Laptop4 from './../../Image//top_laptop4.png';
import Top_Laptop5 from './../../Image//top_laptop5.png';
import Top_Laptop6 from './../../Image//top_laptop6.png';
import Top_Laptop7 from './../../Image//top_laptop7.png';
import Top_Laptop8 from './../../Image//top_laptop8.png';

import Laptop_Sale1 from './../../Image//laptop_sale1.jpg';
import Laptop_Sale3 from './../../Image//laptop_sale3.png';
import Laptop_Sale4 from './../../Image//laptop_sale4.png';
import Laptop_Sale5 from './../../Image//laptop_sale5.png';
import Laptop_Sale6 from './../../Image//laptop_sale6.png';

import Laptop_Common1 from './../../Image//common_laptop1.png';
import Laptop_Common2 from './../../Image//common_laptop2.png';
import Laptop_Common3 from './../../Image//common_laptop3.png';
import Laptop_Common4 from './../../Image//common_laptop4.png';
import Laptop_Common5 from './../../Image//common_laptop5.png';
import Laptop_Common6 from './../../Image//common_laptop6.png';
import Laptop_Common7 from './../../Image//common_laptop7.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
class SmartPhone extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="laptop_content">
                        <p className="routerHome"><NavLink to="/Home">Home / </NavLink> SmartPhone</p>
                        <h2 className="title">SmartPhone</h2>
                        <hr />
                        <div className="selection">
                            <select name="cars" id="cars">
                                <option value="volvo">Thứ tự mặc định</option>
                                <option value="saab">Sản phẩm mới nhất</option>
                                <option value="mercedes">Sản phẩm khuyến mãi</option>
                                <option value="audi">Sản phẩm phổ biến</option>
                                <option value="volvo">iPhone</option>
                                <option value="saab">Samsung </option>
                                <option value="mercedes">Huawei </option>
                                <option value="audi">Oppo </option>
                                <option value="audi">Xiaomi</option>
                                <option value="audi">LG</option>
                                <option value="audi">Lenovo</option>
                            </select>
                        </div>
                        <h3>Sản phẩm mới nhất</h3>
                        <hr />
                        <div className="row">
                            <ProductSmartPhone image_laptop={Top_Laptop1}
                                name_laptop="Máy tính xách tay Asus Gaming ROG Zephyrus Duo GX550LXS-HC055R (i9 10980HK/32GB RAM/1TB+1TB SSD/15.6 UHD/RTX2080 Super MaxQ 8GB/Win10/Xám)"
                                price_laptop="118.990.000 ₫" />
                            <ProductSmartPhone image_laptop={Top_Laptop2}
                                name_laptop="Dell XPS 13 9300 (2020) 10th 13.3′′ Win10 Core i5 1035G1 / RAM 8GB / SSD 256GB / FHD"
                                price_laptop="14.290.000 ₫" />
                            <ProductSmartPhone image_laptop={Top_Laptop3}
                                name_laptop="HP Pavilion 15-cs3060TX 8RJ61PA"
                                price_laptop="16.690.000 ₫" />
                            <ProductSmartPhone image_laptop={Top_Laptop4}
                                name_laptop="Dell Inspiron 5490 70196706 Silver"
                                price_laptop="20.990.000 ₫" />
                            <ProductSmartPhone image_laptop={Top_Laptop5}
                                name_laptop="Dell Vostro 5590 70197465"
                                price_laptop="16.690.000 ₫" />
                            <ProductSmartPhone image_laptop={Top_Laptop6}
                                name_laptop="Macbook Air 2020 13.3 inch 256GB – Chính Hãng – MWTL2 – Gold"
                                price_laptop="23.000.000 ₫" />
                            <ProductSmartPhone image_laptop={Top_Laptop7}
                                name_laptop="Laptop ASUS Zenbook UX434FAC-A6064T Core i5-10210U 8GB LPDDR3 2133MHz 512GB SSD M.2 PCIE 14 FUD IPS Win10 - Hàng Chính Hãng"
                                price_laptop="22.669.000 ₫" />
                            <ProductSmartPhone image_laptop={Top_Laptop8}
                                name_laptop="Dell Precision 5530 BH Chính hãng tận nhà"
                                price_laptop="34.500.000 ₫" />
                        </div>
                        <h3>Sản phẩm khuyến mãi</h3>
                        <hr />
                        <div className="row">
                            <ProductSmartPhone image_laptop={Laptop_Sale1}
                                name_laptop="Surface Laptop 3 (13,5-inch) | Core i7 / RAM 16GB / SSD 1TB"
                                price_laptop="68.000.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Sale1}
                                name_laptop="Surface Laptop 3 (13,5-inch) | Core i7 / RAM 16GB / SSD 1TB"
                                price_laptop="68.000.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Sale3}
                                name_laptop="Laptop Cũ Dell Precision 7510 Core i7- 6820HQ| Ram 8GB| SSD 256G| VGA M1000M| Màn 15.6 Full HD"
                                price_laptop="18.000.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Sale4}
                                name_laptop="Dell Inspiron 5490 70196706 Silver"
                                price_laptop="20.990.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Sale5}
                                name_laptop="Laptop HP Pavilion x360 NEW 2020 14-DW0060TU 195M8PA"
                                price_laptop="13.190.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Sale6}
                                name_laptop="Máy tính xách tay Asus X509JP-EJ012T i5-1035G1U-4GD4/1T5-15.6FHD-FP/BT5-2C32WHr-BẠC-W10SL-2GD5_MX330"
                                price_laptop="13.850.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Sale6}
                                name_laptop="Máy Tính Xách Tay/ Laptop Asus Vivobook X409Ma-Bv157T (Celeron N4020) (Bạc)"
                                price_laptop="6.890.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Sale6}
                                name_laptop="Máy tính xách tay Asus X509JP-EJ012T i5-1035G1U-4GD4/1T5-15.6FHD-FP/BT5-2C32WHr-BẠC-W10SL-2GD5_MX330"
                                price_laptop="13.850.000 ₫" />
                        </div>
                        <h3>Sản phẩm phổ biến</h3>
                        <hr />
                        <div className="row">
                            <ProductSmartPhone image_laptop={Laptop_Common1}
                                name_laptop="Laptop Cũ Hp probook 430 G1 i5 4300U | RAM 4G | SSD 128GB | 13.3” HD | Card On"
                                price_laptop="6.800.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Common2}
                                name_laptop="Macbook Air 2020 Chính hãng"
                                price_laptop="22.900.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Common3}
                                name_laptop="Laptop ASUS Zenbook UX334FAC-A4059T"
                                price_laptop="20.450.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Common4}
                                name_laptop="Surface Laptop 2 | Core i7 / RAM 8GB / SSD 256GB"
                                price_laptop="28.900.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Common5}
                                name_laptop="Surface Pro X - Ram 8GB - 128GB - Microsoft 13 Inch - NEW"
                                price_laptop="23.500.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Common6}
                                name_laptop="Surface Pro X - Ram 8GB - 128GB - Microsoft 13 Inch - NEW"
                                price_laptop="23.500.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Common7}
                                name_laptop="New Dell XPS 15 9500 2020 10th 15.6 Win 10 Core i7 10750H RAM 8GB SSD 256GB FHD+ GeForce GTX 1650Ti Win 10 Pro"
                                price_laptop="40.900.000 ₫" />
                            <ProductSmartPhone image_laptop={Laptop_Common7}
                                name_laptop="New Dell XPS 15 9500 2020 10th 15.6 Win 10 Core i7 10750H RAM 8GB SSD 256GB FHD+ GeForce GTX 1650Ti Win 10 Pro"
                                price_laptop="40.900.000 ₫" />
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

export default SmartPhone;
