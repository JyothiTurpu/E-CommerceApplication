import React, { Component } from 'react';
import CartProduct from './cartProduct';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CartButton from './cartButton';
import history from '../../history';


function CartContent({className, products}) {
  let count = products.length;
  let productsJSX = products.map(product => <CartProduct key={product._id} {...product} />);

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
        <a className='cart-footer__checkout' onClick={() => history.push('/order/review')}>
          Checkout
        </a>
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

  componentDidMount() {
    this.props.fetchCartProducts();
  }

  handleAddToCart = () => {

    if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
      document.getElementById('shop-cart').classList.remove('cart-hidden');
    } else {
      document.getElementById('shop-cart').classList.add('cart-hidden');
    }

  }

  render() {
    const { className } = this.props;
    return(
      <div id='shop-cart' className={`${className} shop-cart cart-hidden`}>
        <CartButton className='shop-cart__toggle' onClick={this.handleAddToCart} iconName='times'/>
        <CartContent className='shop-cart__content' products={this.props.cartProducts}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.User;
  
  return {
    cartProducts
  };
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;