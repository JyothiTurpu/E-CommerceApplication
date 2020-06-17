import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewProduct from './reviewProduct';

class ReviewProducts extends Component {
  render() {
    const { className } = this.props;
    
    return(
      <div className={`${className} review-products`}>
        {
          this.props.cartProducts.map(cp => {
            return <ReviewProduct key={cp._id} {...cp}/> 
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