import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormFields, FormButton } from '../formFields';
import history from '../../history';

class AccountInformationForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    
    return(
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
          
          <Field className='sign-in-form__email' 
          type='email' title='Email' placeholder='Email'
          name='email' component={FormFields}/>

          <Field className='sign-in-form__password' 
          type='password' title='Password' placeholder='Password'
          name='password' component={FormFields}/>

          <div className='sign-in-form__line'></div>

          <Field className='sign-in-form__login' 
          onClick={() => history.push('/account')}
          type='submit' title='Login'
          name='login' component={FormButton}/>

      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;