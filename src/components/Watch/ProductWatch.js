import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class ProductWatch extends Component {
    render() {
        return (
            <div className="col product">
                <img src={this.props.image_laptop} alt="" />
                <h4>{this.props.name_laptop}</h4>
                <p>{this.props.price_laptop}</p>
                <button type="button" className="btn btn-info">Mua ngay</button>
                <button type="button" className="btn btn-danger"><Link to="/ProductDetail">Xem chi tiết</Link></button>
            </div>
        );
    }
}

export default ProductWatch;
