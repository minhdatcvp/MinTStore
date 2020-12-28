import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import {connect} from 'react-redux';
class BlogChild extends Component {
    resetLink = () => {
        window.scrollTo(0, 200);

    }
    truyendulieu(){
        this.props.getDataBlog(this.props.blogDetail);
        this.resetLink();
    }
    render() {
        return (
            <Link to="/BlogChild_Detail">
                <div onClick={() => this.truyendulieu()} className="blog_smartphone">
                    <div className="blog_text">
                        <h5>{this.props.title_blog}</h5>
                        <p>{this.props.content_blog}</p>
                    </div>
                    <img src={this.props.image_blog} alt="" />
                </div>
            </Link >
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDataBlog: (getBlog) => {
            dispatch({
                type: "GET_DATA_BLOG",
                getBlog
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogChild)
