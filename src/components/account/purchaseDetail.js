import React, { Component } from 'react';

class PurchaseDetail extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`purchase-detail ${className}`}>
          Purchase Detail
      </div>
    )
  }
}

export default PurchaseDetail;