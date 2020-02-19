import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';

class Products extends React.Component {
    render() {
        var { productList } = this.props;
        var result = productList.length > 0 ?
                    productList.map((product, index) => {
                        return <Product key={index} product={product} />
                    }) : []
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    { result }
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        productList: state.productsReducer
    }
}

export default connect(mapStateToProps, null)(Products);
