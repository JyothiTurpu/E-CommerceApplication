import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormFields, FormButton } from '../formFields';
import Details from '../details';
import history from '../../history';

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        _id: 0,
        title: 'Not Registered? Create Account Here',
        onClick: () => history.push('/signup')
      },
      {
        _id: 1,
        title: 'Forgot Account Email',
        onClick: () => console.log('Hey There!')
      },
      {
        _id: 2,
        title: 'Forgot Password?',
        onClick: () => console.log('Hey There!')
      }
    ];
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
          // onClick={() => history.push('/account')}
          type='submit' title='Login'
          name='login' component={FormButton}/>

          <Details className='sign-in-form__details' title='QuickLinks' links={links}/>
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: 'SignInForm'
})(SignInForm);

export default SignInForm;