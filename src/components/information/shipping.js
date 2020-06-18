import React, { Component } from 'react';
// import ShippingForm from './shippingForm';
import PageTitle from '../pageTitle';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shipping extends Component {

  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavBarLinks([]);
  }

  onSubmit = (fields) => {
    console.log(fields);
  }

  render() {
    return(
      <div className='sign-in'>
          <PageTitle className='sign-in__page-title' title='Shipping Address'/>
          {/* <ShippingForm onSubmit={this.onSubmit} className='sign-in__form'/> */}
      </div>
    );
  }
}

Shipping = connect(null, actions)(Shipping);
export default Shipping;