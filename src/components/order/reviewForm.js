import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormButton } from '../formFields';
import history from '../../history';
import ReviewProducts from './reviewProducts';

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit, subtotal } = this.props;
    var [ tax, shipping ] = [0.16, 0.00 ];
    var total = subtotal + tax + shipping;
    
    return(
      <form onSubmit={handleSubmit} className={`${className} review-form`}>
          
          <div className='review-form__legend'>
              <div className='review-form__legend__name'>Name</div>
              <div className='review-form__legend__quantity'>Quantity</div>
              <div className='review-form__legend__price'>Price</div>
          </div>
          
          <ReviewProducts className='review-form__products'/>

          <div className='review-form__line'></div>

          <Field className='review-form__back' 
          onClick={() => history.push('/shop')} 
          type='button' title='Back'
          name='back' short={true} component={FormButton}/>


          <Field className='review-form__proceed' 
          onClick={() => history.push('/signin')}
          type='proceed' title='Proceed to Checkout'
          name='proceed' component={FormButton}/>

          <div className='review-form__details review-details'>
            <div className="review-details__subtotal review-detail">
                <div className='review-detail__title'>Subtotal</div>  
                <div className='review-detail__price'>${subtotal}</div>
            </div>
            
            <div className="review-details__tax review-detail">
                <div className='review-detail__title'>Tax</div>  
                <div className='review-detail__price'>${tax}</div>
            </div>


            <div className="review-details__shipping review-detail">
                <div className='review-detail__title'>Shipping</div>  
                <div className='review-detail__price'>${shipping}</div>
            </div>


            <div className="review-details__total review-detail review-detail-green">
                <div className='review-detail__title review-detail-green__title'>Total</div>  
                <div className='review-detail__price review-detail-green__price'>${total}</div>
            </div>
          </div>

      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;