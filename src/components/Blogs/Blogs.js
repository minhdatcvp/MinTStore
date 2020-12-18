import React, { Component } from 'react';
import BlogChil from './BlogChil';
import ProductsSale from './../Home/ProductsSale';
import Image_blog1 from './../../Image/blogs1.jpg';
import Image_blog2 from './../../Image/blog_watch.jpg';
import Image_blog3 from './../../Image/blog_smartphone.jpg';

import Background_laptop_sale from './../../Image/sale_laptop.jpg';
import Background_smartphone_sale from './../../Image/sale_smartphone.jpg';
import Background_watch_sale from './../../Image/sale_watch.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
class Blogs extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <p className="routerHome"><NavLink to="/Home">Home /</NavLink>  News</p>
                    <h2 className="title">News</h2>
                    <hr />
                    <div className="row">
                        <div className="col-9">
                            <BlogChil title_blog="8 chiếc laptop đáng mua nhất 2020"
                                content_blog='XPS 13 là sản phẩm được yêu thích từ nhiều năm nay về cả kích thước, trọng\
                                                lượng, hiệu suất cũng như thiết kế. Năm 2020, Dell đã cho ra mắt chiếc\
                                                laptop có kích thước nhỏ nhưng sở hữu màn hình ... mới như nút tắt tiếng\
                                                micro tức thì, camera IR và đầu đọc vân tay… x360 được tích hợp ... Tin mới nhất'
                                image_blog={Image_blog1} />
                            <BlogChil title_blog="Xếp hàng mua Apple Watch Series 6 chính hãng tại Việt Nam"
                                content_blog='Đặc biệt, một số tín đồ "táo khuyết" đã đến cửa hàng từ lúc 1 giờ sáng. ...
                                            Apple Watch Series 6 hoặc SE thứ hai, tức 100 suất tại mỗi cửa hàng.'
                                image_blog={Image_blog2} />
                            <BlogChil title_blog="Apple ra mắt iPhone 12 mới cùng 3 phiên bản: mini, Pro và ..."
                                content_blog='Apple thông báo tổ chức sự kiện “Hi, Speed” vào 0h ngày 14/10 (giờ Việt
                                    Nam). Dòng iPhone mới, bao gồm iPhone 12 mini, iPhone 12, iPhone ...'
                                image_blog={Image_blog3} />
                            <BlogChil title_blog="Apple ra mắt iPhone 12 mới cùng 3 phiên bản: mini, Pro và ..."
                                content_blog='Apple thông báo tổ chức sự kiện “Hi, Speed” vào 0h ngày 14/10 (giờ Việt
                                    Nam). Dòng iPhone mới, bao gồm iPhone 12 mini, iPhone 12, iPhone ...'
                                image_blog={Image_blog3} />
                            <BlogChil title_blog="Apple ra mắt iPhone 12 mới cùng 3 phiên bản: mini, Pro và ..."
                                content_blog='Apple thông báo tổ chức sự kiện “Hi, Speed” vào 0h ngày 14/10 (giờ Việt
                                    Nam). Dòng iPhone mới, bao gồm iPhone 12 mini, iPhone 12, iPhone ...'
                                image_blog={Image_blog3} />

                        </div>
                        <div className="col-3 sale_content">
                            <ProductsSale image_sale={Background_laptop_sale} />
                            <ProductsSale image_sale={Background_smartphone_sale} />
                            <ProductsSale image_sale={Background_watch_sale} />
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

export default Blogs;
