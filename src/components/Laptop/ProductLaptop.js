import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { noteData } from './../../containers/Data/firebaseConnect'
var infoUser = [];
class ProductLaptop extends Component {
    state = {
        key: "",
        name: "",
        email: "",
        password: "",
        product: "",
        image: ""
    }
    getDataToStore = () => {
        this.props.getDataProduct(this.props.detail);
    }
    resetLink = () => {
        window.scrollTo(0, 0);
    }
    editstatusLogin = (giatri) => {
        // console.log(this.props.editstatusLogin);
        this.props.editStatusLogin();
        this.props.getStatusAcc(giatri);
    }
    inra = () => {
        if (!this.props.checkLogin) {
            /*khi chua dang nhap*/
            this.editstatusLogin("sign_in");
            this.props.alertOn("danger" , "Bạn phải đăng nhập !!");
        } else {
            /* khi da dang nhap */
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
            var updateUser = {};
            updateUser.name = returnData.item.name;
            updateUser.email = returnData.item.email;
            updateUser.password = returnData.item.password;
            updateUser.image= returnData.item.image;
            updateUser.key= returnData.item.key;
            updateUser.product = returnData.item.product + this.props.detail.id + " ";
            this.props.getObjectData(updateUser);
            var soluong = updateUser.product.split(" ");
            this.props.getnumberProduct(soluong.length);
            this.props.alertOn("success" , "Thêm vào giỏ hàng thành công :))");
        }
    }
    render() {

        return (
            <div className="col product">
                <img className="image_product" src={this.props.image_laptop} alt="abc" />
                <h4>{this.props.name_laptop}</h4>
                <p>{this.props.price_laptop}</p>
                <button type="button" className="btn btn-info" onClick={() => this.inra()}>Mua ngay</button>
                <button type="button" className="btn btn-danger"
                    onClick={() => this.getDataToStore()}><Link to="/ProductDetail" onClick={() => this.resetLink()}>Xem chi tiết</Link></button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        datauser: state.user,
        checkLogin: state.sttLoginUser
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
        /* gửi giá trị sign in hay sign up cho store để hiển thị cửa sổ */
        getStatusAcc: (statusAccount) => {
            dispatch({
                type: "CHECK_STATUS_ACC",
                statusAccount
            })
        },
        editStatusLogin: () => {
            dispatch({
                type: "DISPLAY_LOGIN"
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductLaptop)
