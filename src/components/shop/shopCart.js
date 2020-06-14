import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartButton({className}) {
  return(
    <div className={`${className} cart-button`}>
      <FontAwesomeIcon icon="times"/>
    </div>
  )
}

function CartContent({className, products}) {
  let count = products.length;
  let productsJSX = products.map(product => <h1 key={product}>{product}</h1>);

  return (
    <div className={`${className} cart-content`}>
      <a className="cart-content__title">
          Cart({count})
      </a>
      <div className="cart-content__cart-products">
          {productsJSX}
      </div>
      <CartFooter className='cart-content__footer' products={products} />
    </div>
  )
}


function CartFooter({className, products}) {
  const price = '7.96';

  return (
    <div className={`${className} cart-footer`}>
        <button className='cart-footer__checkout'>
          Checkout
        </button>
        <div className="cart-footer__subtotal">
          SubTotal
        </div>
        <div className="cart-footer__price">
          ${price}
        </div>
    </div>
  )
}


class ShopCart extends Component {
  render() {
    const { className } = this.props;
    return(
      <div className={`${className} shop-cart`}>
        <CartButton className='shop-cart__toggle'/>
        <CartContent className='shop-cart__content' products={[123, 456, 789, 123, 456, 789, 123, 456, 789]}/>
      </div>
    )
  }
}

export default ShopCart;