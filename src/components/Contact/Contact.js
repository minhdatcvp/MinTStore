import React, { Component } from 'react';

import Image_Address from './../../Image/map.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
class Contact extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <p className="routerHome"><NavLink to="/Home">Home / </NavLink> Contact</p>
                    <h2 className="title">Contact</h2>
                    <hr />
                    <img src={Image_Address} alt="" className="map" />
                    <ul className="info_contact">
                        <li>
                            <i className="fas fa-map-marked-alt" />
                            <div className="info">
                                <h4>Địa chỉ:</h4>
                                <h6>Số 9 Kiều Mai,Phúc Diễn,Hà Nội</h6>
                            </div>
                        </li>
                        <li>
                            <i className="fas fa-phone-square" />
                            <div className="info">
                                <h4>Số điện thoại:</h4>
                                <h6>0389697361</h6>
                            </div>
                        </li>
                        <li>
                            <i className="fas fa-map-marked-alt" />
                            <div className="info">
                                <h4>Email:</h4>
                                <h6>minhdatptt@gmail.com</h6>
                            </div>
                        </li>
                    </ul>
                    {/* form  */}
                    <div className="contact">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Họ và tên" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                        </form>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Số điện thoại" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Địa chỉ" />
                                </div>
                            </div>
                        </form>
                        <textarea name="textarea" id="textarea" cols={30} rows={10} placeholder="Lời nhắn" defaultValue={""} />
                        <button type="button" className="btn btn-info">Gửi</button>
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

export default Contact;
