import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormFields, FormButton, FormInput } from '../formFields';
import history from '../../history';

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    
    return(
      <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
          
          <Field className='sign-up-form__name' 
          type='name' title='Name' placeholder='Name'
          name='name' component={FormFields}/>

          <Field className='sign-up-form__email' 
          type='email' title='Email' placeholder='Email'
          name='email' component={FormFields}/>

          <Field className='sign-up-form__password' 
          type='password' title='Password' placeholder='Password'
          name='password' component={FormFields}/>

          <Field className='sign-up-form__confirm' 
          type='password' title='Confirm Password' placeholder='Confirm Password'
          name='confirm' component={FormFields}/>

          <div className='sign-up-form__line'></div>

          <Field className='sign-up-form__login' 
          onClick={() => history.push('/account')}
          type='submit' title='Create Account'
          name='login' component={FormButton}/>

          <Field className='sign-up-form__back' 
          onClick={() => history.push('/signin')} 
          type='button' title='Back'
          name='back' short={true} component={FormButton}/>

      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;