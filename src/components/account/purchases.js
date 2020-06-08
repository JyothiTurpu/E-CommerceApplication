import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Purchases extends Component {

  componentDidMount() {
    this.props.fetchUserPurchases();
  }

  render() {
    const { className } = this.props;
    return (
      <div className={`purchases ${className}`}>
          {
            this.props.purchases.map(purchase => {
            return (<div key={purchase._id}>{purchase.title}</div>)
              })
          } 
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { purchases } = state.User;
  return { purchases };
}


Purchases = connect(mapStateToProps, actions)(Purchases);

export default Purchases;