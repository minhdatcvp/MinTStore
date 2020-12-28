import React, { Component } from 'react';
import '../../css/blogDetail.css';
import ProductsSale from './../Home/ProductsSale';
import BlogChild from '../Blogs/BlogChild';
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
import { connect } from 'react-redux';
import { dataBlogs } from 'containers/Data/dulieuBlogs';
import Register from 'components/Register';
class BlogChild_Detail extends Component {
    renderBlogDetail = () => this.props.blogsDetail.content.map((value, key) => {
        return (
            <div key={key} className="content_blog">
                <h4>{value.title_content}</h4>
                <img className="image_content" src={value.image} alt="" />
                <p className="note_image">{value.title_content}</p>
                <p className="text_content">{value.content_detail}</p>
            </div>
        )
    })
    resetLink = () => {
        window.scrollTo(0, 0);

    }
    renderBlog = () => dataBlogs.map((value, key) => {
        return (
            <BlogChild blogDetail={value} key={key} title_blog={value.title} content_blog={value.content_title} image_blog={value.image_title} />
        )
    })
    render() {
        console.log(this.props.blogsDetail);
        return (
            <div className="content">
                <div className="container">
                    <p className="routerHome"><NavLink to="/Home">Home /</NavLink>  News</p>
                    <h2 className="title">News</h2>
                    <hr />
                    <div className="row">
                        <div className="col-9 ">
                            <div className="blog_detail">
                                <h1>{this.props.blogsDetail.title}</h1>
                                <img className="image_title" src={this.props.blogsDetail.image_title} alt="" />
                                <p className="note_image">{this.props.blogsDetail.title}</p>
                                <h4>{this.props.blogsDetail.title_detail}</h4>
                                <p>{this.props.blogsDetail.intro}</p>
                                {this.renderBlogDetail()}
                            </div>

                            <div className="cmt">
                                <h4>Viết bình luận của bạn</h4>
                                <form name="frmComment" >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input name="fullname" placeholder="Họ tên" type="text" />
                                        </div>
                                        <div className="col-md-6">
                                            <input name="email" placeholder="Địa chỉ email" type="email" />
                                        </div>
                                    </div>
                                    <textarea name="content" placeholder="Viết bình luận tại đây..." defaultValue={""} />
                                    <div className="clearfix" />
                                    <button type="button" className="btn btn-dark comment">Gửi bình luận</button>
                                </form>

                            </div>

                        </div>
                        <div className="col-3 sale_content">
                            <h2> Khuyến Mãi</h2>
                            <hr />
                            <NavLink to="/Laptop" onClick={() => this.resetLink()}><ProductsSale image_sale={Background_laptop_sale} title_sale=" Laptop" /></NavLink>
                            <NavLink to="/SmartPhone" onClick={() => this.resetLink()}><ProductsSale image_sale={Background_smartphone_sale} title_sale="SmartPhone" /></NavLink>
                            <NavLink to="/Watch" onClick={() => this.resetLink()}><ProductsSale image_sale={Background_watch_sale} title_sale="Watch" /></NavLink>
                            <h2>News</h2>
                            <hr />
                            {this.renderBlog()}
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
        blogsDetail: state.blogsDetail
    }
}
export default connect(mapStateToProps)(BlogChild_Detail)
