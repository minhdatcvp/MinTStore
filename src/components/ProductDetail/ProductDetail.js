import React, { Component } from 'react';
import ProductLaptop from './../Laptop/ProductLaptop';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { connect } from 'react-redux';
import {dataLaptop} from 'containers/Data/dulieuLaptop.js';
import { noteData } from './../../containers/Data/firebaseConnect'
import Register from 'components/Register';
var infoUser = [];
class ProductDetail extends Component {
    renderLaptopNews_SM = () => dataLaptop.map((value, key) => {
        if (value.class === "mn_sm") {
            return (
                <ProductLaptop detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopSale_SM = () => dataLaptop.map((value, key) => {
        if (value.class === "km_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopCommon_SM = () => dataLaptop.map((value, key) => {
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
    renderLaptopLenovo_SM = () => dataLaptop.map((value, key) => {
        if (value.class === "le_sm") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    // laptop
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
    //watch
    renderLaptopNews_WT = () => dataLaptop.map((value, key) => {
        if (value.class === "mn_wt") {
            return (
                <ProductLaptop detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopSale_WT = () => dataLaptop.map((value, key) => {
        if (value.class === "km_wt") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderLaptopCommon_WT = () => dataLaptop.map((value, key) => {
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
    renderLaptopXiaomi_WT = () => dataLaptop.map((value, key) => {
        if (value.class === "xi_wt") {
            return (
                <ProductLaptop  detail = {value} key={key} image_laptop={value.image} name_laptop={value.name} price_laptop={value.price} />
            )
        }
    })
    renderProduct = () => {
        if (this.props.detailData.class === "mn") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopNews()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "homelaptop") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopNews()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "home_sm") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopNews_SM()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "home_wt") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopSale_WT()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "km") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopSale()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "pb") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopCommon()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "lenovo") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopLenovo()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "apple") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopApple()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "asus") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopAsus()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "dell") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopDell()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "acer") {
            return (
                <div>
                    <h3>Sản phẩm Tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopAcer()}
                    </div>
                </div>
            )
        }
        // SMARTPHONE
        if (this.props.detailData.class === "mn_sm") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopNews_SM()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "km_sm") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopSale_SM()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "pb_sm") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopCommon_SM()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "le_sm") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopLenovo_SM()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "ip_sm") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopIphone()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "ss_sm") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopSamsung()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "hw_sm") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopHuawei()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "op_sm") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopOppo()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "xi_sm") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopXiaomi()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "lg_sm") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopLG()}
                    </div>
                </div>
            )
        }
        //Watch
        if (this.props.detailData.class === "mn_wt") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopNews_WT()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "km_wt") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopSale_WT()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "pb_wt") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopCommon_WT()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "ap_wt") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopApple()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "ca_wt") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopCasio()}
                    </div>
                </div>
            )
        }
        if (this.props.detailData.class === "xi_wt") {
            return (
                <div>
                    <h3>Sản phẩm tương tự</h3>
                    <hr />
                    <div className="row">
                        {this.renderLaptopXiaomi_WT()}
                    </div>
                </div>
            )
        }
    }
    editstatusLogin = (giatri) => {
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
            updateUser.product = returnData.item.product + this.props.detailData.id + " ";
            this.props.getObjectData(updateUser);
            var soluong = updateUser.product.split(" ");
            this.props.getnumberProduct(soluong.length);
            this.props.alertOn("success" , "Thêm vào giỏ hàng thành công :))");
        }
    }



    render() {
        console.log(this.props.detailData.classs)
        return (
            <div className="content">
                <div className="container">
                    <div className="laptop_content">
                        <div className="row">
                            <div className="col product_image">
                                <p className="routerHome"><NavLink to="/Home">Home / </NavLink>Laptop</p>
                                <img src={this.props.detailData.imageDetail} alt="" />
                            </div>
                            <div className="col">

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
                                <button type="button"  className="btn btn-info" onClick={() => this.inra()}>Mua ngay</button>
                            </div>
                        </div>
                        <div className="evaluate">
                            <h3>Đánh giá</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, odit! Impedit architecto velit, asperiores porro pariatur accusamus. Exercitationem quaerat, nostrum debitis libero porro accusantium consectetur ipsum distinctio illum aperiam inventore.</p>
                        </div>
                        <div>
                            {this.renderProduct()}
                        </div>
                    </div>
                    <Register/>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        detailData: state.productDetail,
        datauser: state.user,
        checkLogin: state.sttLoginUser
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOn: (alertType , alertContent) => {
            dispatch({
                type: "ALERT_ON",
                alertType,
                alertContent
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
        editStatusLogin: () => {
            dispatch({
                type: "DISPLAY_LOGIN"
            })
        },
        getStatusAcc: (statusAccount) => {
            dispatch({
                type: "CHECK_STATUS_ACC",
                statusAccount
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
