
import React, { Component } from 'react';
import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';

class CartProduct extends Component {
  render(){
    const { _id, product, quantity } = this.props;
    const { className, title, price } = product;

    return(
      <div className={`${className} cart-product`}>
          <img className='cart-product__image' src='http://via.placeholder.com/130x130' />
          <div className='cart-product__title'>{title}</div>
          <Quantity className='cart-product__quantity' quantity={quantity}/>
          <a className='cart-product__remove'>Remove</a>
          <GreenPriceTag className='cart-product__price' title={price * quantity}/>
      </div>
    )
  }
}

export default CartProduct;