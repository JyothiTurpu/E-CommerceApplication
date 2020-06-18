import React, { Component } from 'react';
import { UnderLinedTitle, InfoLabel } from './helper';

class OrderSummary extends Component {
  render() {
    const { className } = this.props;
    return(
      <div className={`${className} order-summary`}>
        <UnderLinedTitle className='order-summary__title' title='Order Summary'/>
        <InfoLabel className='order-summary__4-stickers' title='4 Stickers' value='$7.96'/>
        <InfoLabel className='order-summary__taxes-shipping' title='Taxes & Shipping' value='$0.00'/>
        <InfoLabel className='order-summary__total' title='Total' value='$7.96'/>
      </div>
    )
  }
}

export default OrderSummary;