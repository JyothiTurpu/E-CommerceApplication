import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormFields, FormButton, FormInput } from '../formFields';
import history from '../../history';
import OrderSummary from './orderSummary';
import { UnderLinedTitle } from './helper';

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    
    return(
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
          <Field className='payment-form__name' 
          type='name' title='Name on Credit Card' placeholder='Name'
          name='name' component={FormFields}/>

          <Field className='payment-form__card' 
          type='card' title='Credit Card Number' placeholder='____-____-____-____'
          name='card' component={FormFields}/>


          <Field className='payment-form__expiration' 
          type='expiration' title='Expiration Date' placeholder='MM/YYYY'
          name='expiration' component={FormFields}/>

          <Field className='payment-form__ccv' 
          type='ccv' title='CCV' placeholder='CCV'
          name='ccv' component={FormFields}/>

          <div className='payment-form__line'></div>

          <Field className='payment-form__back' 
          onClick={() => history.push('/information/shipping')} 
          type='button' title='Back'
          name='back' short={true} component={FormButton}/>

          <Field className='payment-form__payment-complete' 
          onClick={() => history.push('/information/payment')}
          type='submit' title='Pay and Complete Order'
          name='payment-complete' component={FormButton}/>

          <OrderSummary className='payment-form__order-summary'/>

          <div className="payment-form__shipping-info shipping-info">
                <UnderLinedTitle className='shipping-info__title' title='Shipping To'/>
                <div className="shipping-info__name small-text">Varun Sai Saravana</div>
                <div className="shipping-info__address small-text">1274, Sea Street, Quincy, MA 02169</div>
          </div>

      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;