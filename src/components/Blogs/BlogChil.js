import React, { Component } from 'react';

class BlogChil extends Component {
    render() {
        return (
            <div className="blog_smartphone">
                <div className="blog_text">
                    <h5>{this.props.title_blog}</h5>
                    <p>{this.props.content_blog}</p>
                </div>
                <img src={this.props.image_blog} alt="" />
            </div>
        );
    }
}

export default BlogChil;
