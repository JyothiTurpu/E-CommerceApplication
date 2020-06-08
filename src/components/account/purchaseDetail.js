import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

function PurchaseDetailLabel({className, title, value}) {
  return (
    <div className={`${className} purchase-detail-label`}>
        <div className='purchase-detail-label__title'>
          {title}
        </div>
        <div className='purchase-detail-label__value'>
          {value}
        </div>
    </div>
  )
}
// _id: 1,
//         total: '$8.02',
//         orderNumber: '123',
//         orderDate: new Date(),
//         : '0000 1111 222',
//         user: {
//           name: 'Varun Sai',
//           shippingAddress: '1234 Sea Street' 
//         }

class PurchaseDetail extends Component {
  render() {
    const { className, total, creditCard, orderNumber, orderDate, user   } = this.props;
    const { name, shippingAddress } = user;

    return (
      <div className={`purchase-detail ${className}`}>
          <PurchaseDetailLabel className='purchase-detail__order-number' 
          title='Order Number'
          value={orderNumber}/>

          <PurchaseDetailLabel className='purchase-detail__order-date' 
          title='Order Date'
          value={orderDate}/>

          <PurchaseDetailLabel className='purchase-detail__shipping-addresss' 
          title='Shipping Address'
          value={`${name}\n${shippingAddress}`}/>

          <PurchaseDetailLabel 
          className='purchase-detail__total' 
          title='Total'
          value={total}/>


          <PurchaseDetailLabel className='purchase-detail__credit-card' 
          title='Credit Card'
          value={creditCard}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { purchaseDetail } = state.User;
  return  {...purchaseDetail}
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);
export default PurchaseDetail;