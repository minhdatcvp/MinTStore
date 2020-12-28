import React, { Component } from 'react';
import appggplay from "./../Image/img-googleplay.jpg";
import appstore from "./../Image/img-appstore.jpg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
class Footer extends Component {
    resetLink = () => {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <footer>
                    {/* như bình thường  */}
                    <div className="footer_contact">
                        <div className="row">
                            <div className="col-3">
                                <h2>Thông tin liên hệ</h2>
                                <ul className="infomation">
                                    <li><i className="fas fa-map-marker-alt" />Số 9 Kiều Mai,Phúc Diễn,Hà Nội </li>
                                    <li><i className="fas fa-phone" /><a href="tel:0769220162">0389697361</a></li>
                                    <li><i className="fab fa-facebook-f" /><a href="mailto:minhdatptt@gmail.com"> facebook.com/minhdatptt/</a></li>
                                    <li><i className="fab fa-google" /><a href="mailto:minhdatptt@gmail.com"> minhdatptt@gmail.com</a></li>
                                </ul>
                                <ul className="icon_contact">
                                    <li>
                                        <a href="mailto:minhdatptt@gmail.com"><i className="fab fa-facebook-square" /></a>
                                    </li>
                                    <li>
                                        <a href="mailto:minhdatptt@gmail.com"><i className="fab fa-google-plus-square" /></a>
                                    </li>
                                    <li>
                                        <a href="mailto:minhdatptt@gmail.com"><i className="fab fa-twitter-square" /></a>
                                    </li>
                                    <li>
                                        <a href="mailto:minhdatptt@gmail.com"><i className="fab fa-instagram-square" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h2>Liên kết</h2>
                                <ul>
                                    <li>
                                        <NavLink onClick={() => this.resetLink()} to="/Laptop">Laptop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={() => this.resetLink()} to="/SmartPhone">SmartPhone</NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={() => this.resetLink()} to="/Watch">Watch</NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={() => this.resetLink()} to="/Blog">Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={() => this.resetLink()} to="/Laptop">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h2>Hỗ trợ</h2>
                                <ul>
                                    <li>
                                        <a href="/">Hướng dẫn mua hàng</a>
                                    </li>
                                    <li>
                                        <a href="/">Hướng dẫn thanh toán</a>
                                    </li>
                                    <li>
                                        <a href="/">Chính sách bảo hành</a>
                                    </li>
                                    <li>
                                        <a href="/">Chính sách đổi trả</a>
                                    </li>
                                    <li>
                                        <a href="/">Tư vấn khách hàng</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h2>TẢI ỨNG DỤNG TRÊN</h2>
                                <p>Ứng dụng Mona Watch hiện có sẵn trên Google Play &amp; App Store. Tải nó ngay.</p>
                                <img src={appggplay} alt="" />
                                <img src={appstore} alt="" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="footer_end">
                        <p>Copyright © 2020 Nguyễn Minh Đạt</p>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;
