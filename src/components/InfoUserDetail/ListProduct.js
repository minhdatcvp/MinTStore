import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { noteData } from './../../containers/Data/firebaseConnect'
var infoUser = [];

class ListProduct extends Component {
    // this props.detail
    delProduct = () => {
        let returnData = {
            item : ""
        }
        noteData.on('value', (dataUser) => {
            dataUser.forEach(element => {
                    var key = element.key;
                    var name = element.val().name;
                    var email = element.val().email;
                    var image = element.val().image;
                    var password = element.val().password;
                    var product = element.val().product;
                    infoUser.push({
                        key: key,
                        name: name,
                        email: email,
                        password: password,
                        image: image,
                        product: product
                    })
            })
        })
        infoUser.forEach(element => {
            if (element.email === this.props.datauser.email) {
                returnData = {
                    item : element
                }
            }
        })
        var x =  " " + String(this.props.detail.id) + " ";
        var updateUser = {};
        updateUser.name = returnData.item.name;
        updateUser.email = returnData.item.email;
        updateUser.password = returnData.item.password;
        updateUser.image= returnData.item.image;
        updateUser.key= returnData.item.key;
        updateUser.product = returnData.item.product.replace(x," ");
        this.props.getObjectData(updateUser);
        this.props.getnumberProduct(updateUser);
        this.props.alertOn("warning" , "Đã xóa đơn hàng :((");
        this.props.resetPage();
    }
    render() {
        return (
            <tr>
                <td className="stt_product">{this.props.stt_product}</td>
                <td className="img_product"><img src = {this.props.img_product}></img></td>
                <td className="name_product"><p>{this.props.name_product}</p></td>
                <td className="btn_product">
                    <div className="btn btn-primary" >
                        <Link to="/ProductDetail" onClick={() => this.props.getDataProduct(this.props.detail)}><i className="fa fa-edit"> Xem</i></Link>
                    </div>
                </td>
                <td className="btn_product">
                    <div className="btn btn-danger" onClick = {() => this.delProduct()}><i className="fas fa-trash-alt"> Xóa</i></div>
                </td>
            </tr>
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
        getDataProduct: (dataProduct) => {
            dispatch({
                type: "GET_DATA_PRODUCT",
                dataProduct
            })
        },
        getObjectData: (getObject) => {
            dispatch({
                type: "GET_OBJECT",
                getObject
            })
        },
        getnumberProduct: (numberProduct) => {
            dispatch({
                type: "GET_NUMBER_PRODUCT",
                numberProduct
            })
        },
        alertOn: (alertType , alertContent) => {
            dispatch({
                type: "ALERT_ON",
                alertType,
                alertContent
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct)
