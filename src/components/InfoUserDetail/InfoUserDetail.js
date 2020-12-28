import React, { Component } from 'react';
import ProductLaptop from './../Laptop/ProductLaptop';
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
import Register from 'components/Register';
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
    renderLaptopCommon = () => dataLaptop.map((value, key) => {
        if (value.class === "pb") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
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
                            <div className="col">
                                <h2>Danh sách đơn hàng</h2>
                                <table className="table table-striped table-hover" >
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
                        <h3>Sản phẩm phổ biến</h3>
                        <hr />
                        <div className="product_same row">
                            {this.renderLaptopCommon()}
                        </div>
                    </div>
                    <Register/>
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
