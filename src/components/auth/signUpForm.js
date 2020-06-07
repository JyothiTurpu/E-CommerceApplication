import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormFields, FormButton, FormInput } from '../formFields';
import Details from '../details';
import history from '../../history';

class SignUpForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const infos = [
      {
        _id: 0,
        title: 'At least 6 characters',
      },
      {
        _id: 1,
        title: 'At least one number',
      },
      {
        _id: 2,
        title: 'At least one symbol',
      }
    ];
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


          <Details className='sign-up-form__details' title='Password Requirements' 
          infos={infos}/>
      </form>
    );
  }
}

SignUpForm = reduxForm({
  form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;