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
import '../../css/infoUser.css';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import ListProduct from './ListProduct';
import { noteData } from './../../containers/Data/firebaseConnect';
import {dataLaptop} from 'containers/Data/dulieuLaptop.js';
var product_List = [];
var infoUser = [];
class InfoUserDetail extends Component {
    componentWillMount() {
        noteData.on('value', (dataUser) => {
            dataUser.forEach(element => {
               if(element.val().email === this.props.datauser.email){
                   infoUser.push(element.val())
               }
            })
        })
        product_List = infoUser[infoUser.length - 1].product.split(" ");

    }
    coutNumber(x){
        noteData.on('value', (dataUser) => {
            dataUser.forEach(element => {
               if(element.val().email === this.props.datauser.email){
                   infoUser.push(element.val())
               }
            })
            
        })
        
        let product_List = infoUser[infoUser.length - 1].product.split(" ");
        let cout = 0;
        for(let i = 1;i<product_List.length;i++){
            if(product_List[i] == x){
                cout++;
            }
        }
        return cout;
    }
    getIdProduct = () => dataLaptop.map((value,key) => {
        for(let i = 1 ; i < product_List.length ; i++){
            if(value.id === Number(product_List[i])){
                const count = this.coutNumber(value.id);
                return(
                    <ListProduct resetPage = {() => this.resetProduct()} detail = {value} key = {key} stt_product = {count} img_product = {value.image} name_product= {value.name} ></ListProduct>
                )
            }
        }
    })
    resetLink = () => {
        window.scrollTo(0, 0);
    }
    logOut = () => {
        this.props.editsstLoginUser();
        this.resetLink();
    }
    resetProduct() {
        this.forceUpdate();
        this.componentWillMount();
    }
    shouldComponentUpdate(){
        this.render()
    }
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="info-user-detail">
                        <div className="row">
                            <div className="col-4 info-detail">
                                <h2>Thông tin cá nhân</h2>
                                <img  src="https://pm1.narvii.com/6729/8e14db5ae41d4d424f5f4212dbeebd37268ae10fv2_00.jpg" alt="" />
                                <h4>{this.props.datauser.name}</h4>
                                <h6>{this.props.datauser.email}</h6>
                                <p>Số đơn hàng : {product_List.length - 2}</p>
                                <button type="button" className="btn btn-primary">
                                    <NavLink onClick={() => this.logOut()} to="/Home">Log out</NavLink>
                                </button>
                            </div>
                            <div className="col-8">
                                <h2>Danh sách đơn hàng</h2>
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th className="soluong">Số lượng</th>
                                            <th>Ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {this.getIdProduct()}
                                    </tbody>
                                </table>
                            </div>
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
            </div >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        datauser: state.user
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editsstLoginUser: () => {
            dispatch({
                type: "EDIT_STATUS_LOGIN"
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InfoUserDetail)
