import React, { Component } from 'react';
import ShippingForm from './shippingForm';
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
      <div className='shipping'>
          <PageTitle className='shipping__page-title' title='Shipping Address'/>
          <ShippingForm onSubmit={this.onSubmit} className='shipping__form'/>
      </div>
    );
  }
}

Shipping = connect(null, actions)(Shipping);
export default Shipping;