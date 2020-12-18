import React, { Component } from 'react';

class Footer extends Component {
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
                                    <li><i className="fas fa-phone" />0389697361</li>
                                    <li><i className="fab fa-facebook-f" />facebook.com/minhdatptt/</li>
                                    <li><i className="fab fa-google" />minhdatptt@gmail.com</li>
                                </ul>
                                <ul className="icon_contact">
                                    <li>
                                        <a href="/"><i className="fab fa-facebook-square" /></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fab fa-google-plus-square" /></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fab fa-twitter-square" /></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fab fa-instagram-square" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h2>Liên kết</h2>
                                <ul>
                                    <li>
                                        <a href="/">Laptop</a>
                                    </li>
                                    <li>
                                        <a href="/">SmartPhone</a>
                                    </li>
                                    <li>
                                        <a href="/">Watch</a>
                                    </li>
                                    <li>
                                        <a href="/">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/">Contact</a>
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
                                <a href="/"><img src="./Image/img-googleplay.jpg" alt="" /></a>
                                <a href="/"><img src="./Image/img-appstore.jpg" alt="" /></a>
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
