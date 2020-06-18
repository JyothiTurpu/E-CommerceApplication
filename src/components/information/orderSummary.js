import React, { Component } from 'react';
import { UnderLinedTitle, InfoLabel } from './helper';
import { connect } from 'react-redux';

class OrderSummary extends Component {
  render() {
    var subtotal = 0;
    var noOfStickers = 0;
    this.props.cartProducts.map(cp => {
      subtotal += (cp.product.price * cp.quantity);
      noOfStickers += cp.quantity;
    })

    var taxShipping = 0.16;
    var total = subtotal + taxShipping;

    const { className } = this.props;
    return(
      <div className={`${className} order-summary`}>
        <UnderLinedTitle className='order-summary__title' title='Order Summary'/>
        <InfoLabel className='order-summary__4-stickers' title={`${noOfStickers} Stickers`} value={`$${subtotal}`}/>
        <InfoLabel className='order-summary__taxes-shipping' title='Taxes & Shipping' value={`$${taxShipping}`}/>
        <InfoLabel className='order-summary__total info-label-green' title='Total' value={`$${total}`}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { cartProducts } = state.User;
  return { cartProducts }
}

OrderSummary = connect(mapStateToProps, null)(OrderSummary);
export default OrderSummary;