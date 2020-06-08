import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormFields, FormButton } from '../formFields';
import history from '../../history';

class AccountInformationForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    
    return(
      <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
          
          <Field className='account-information-form__name' 
          type='name' title='Name' placeholder='Name'
          name='name' component={FormFields}/>


          <Field className='account-information-form__email' 
          type='email' title='Email' placeholder='Email'
          name='email' component={FormFields}/>


          <Field className='account-information-form__street-address' 
          type='address' title='Street Address' placeholder='Street Address' name='address' component={FormFields}/>

          
          <Field className='account-information-form__city' 
          type='city' title='City' placeholder='City'
          name='city' component={FormFields}/>

          <Field className='account-information-form__state' 
          type='state' title='State' placeholder='State' name='state' component={FormFields}/>

          
          <Field className='account-information-form__zipcode' 
          type='zipcode' title='Zipcode' placeholder='Zipcode'
          name='zipcode' component={FormFields}/>


          {/* <Field className='account-information-form__password' 
          type='password' title='Password' placeholder='Password'
          name='password' component={FormFields}/>



          <Field className='account-information-form__login' 
          onClick={() => history.push('/account')}
          type='submit' title='Login'
          name='login' component={FormButton}/> */}

      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;