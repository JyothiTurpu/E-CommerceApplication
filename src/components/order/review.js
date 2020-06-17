import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';


class Review extends Component {

  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavBarLinks([]);
  }

  onSubmit = (fields) => {
    console.log(fields);
  }

  render() {
    var subtotal = 0;
    this.props.cartProducts.map(cp => {
      subtotal += (cp.product.price * cp.quantity);
    })

    return (
        <div className='review'>
          <PageTitle className='review__page-title' title='Order Review'/> 
          <ReviewForm className='review__form' onSubmit={this.onSubmit} subtotal={subtotal}/>
        </div>
    )
  }
}



function mapStateToProps(state) {
  const { cartProducts } = state.User;
  return { cartProducts }
}


Review = connect(mapStateToProps, actions)(Review);
export default Review;