import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewProducts extends Component {
  render() {
    const { className } = this.props;
    
    return(
      <div className={`${className} review-products`}>
        {
          this.props.cartProducts.map(cp => {
            return(<h1 >{cp.product.title}</h1>) 
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.User;
  return {
    cartProducts
  }
}

ReviewProducts = connect(mapStateToProps, null)(ReviewProducts);
export default ReviewProducts;