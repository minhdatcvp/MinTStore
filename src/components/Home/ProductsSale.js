import React, { Component } from 'react';

class ProductsSale extends Component {
    render() {
        return (
            <div className="sale_laptop" style={{ backgroundImage: "url(" + this.props.image_sale + ")" }}>
                <h1>Sale</h1>
                <h3>{this.props.title_sale}</h3>
                <p>Giảm 300.000VNĐ</p>
                <p>Trả góp 0% lãi suất, 0% bảo hiểm</p>
            </div>
        );
    }
}

export default ProductsSale;
