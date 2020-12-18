import React, { Component } from 'react';

class BlogsHome extends Component {
    render() {
        return (
            <div className="blog_smartphone">
                <div className="blog_text">
                    <h5>{this.props.title_Blog_Home}</h5>
                    <p>{this.props.content_Blog_Home}</p>
                </div>
                <img src={this.props.image_Blog} alt="" />
            </div>
        );
    }
}

export default BlogsHome;
