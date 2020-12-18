import React, { Component } from 'react';
class ProductsCommon extends Component {
    render() {
        return (
            <li className="laptop_common" style={{ backgroundImage: "url(" + this.props.image_common + ")" }}>
                <div className="text">
                    <h4>{this.props.title_common}</h4>
                    <p>{this.props.price_sale}</p>
                </div>
            </li>
        );
    }
}

export default ProductsCommon;
