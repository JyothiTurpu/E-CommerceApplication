import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormFields, FormButton ,LongGrayButton } from '../formFields';


class AccountInformationForm extends Component {
  constructor() {
    super();
    this.state = {
      showPasswords: false
    }
  }

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

          <div className='account-information-form__line'></div>    
          
          {
            this.state.showPasswords ?

                [
                    <Field key={0} className='account-information-form__current' 
                    type='password' title='Current Password' placeholder='Current Password'
                    name='current' component={FormFields}/>,

                    <Field key={1}className='account-information-form__new' 
                    type='password' title='New Password' placeholder='New Password'
                    name='new' component={FormFields}/>,

                    <Field key={2}className='account-information-form__confirm' 
                    type='password' title='Confirm Password' placeholder='Confirm Password'
                    name='confirm' component={FormFields}/>,

                    
                    <Field key={4} className='account-information-form__update-information' 
                    onClick={() => this.setState({showPasswords: false})}
                    type='submit' title='Update Account'
                    name='update' component={FormButton}/>,

                    <Field key={5} className='account-information-form__cancel' 
                    onClick={() => this.setState({showPasswords: false})} 
                    type='button' title='Cancel'
                    name='cancel' short={true} component={FormButton}/>
                ]
            :
            <Field className='account-information-form__change-password' 
            onClick={() => this.setState({showPasswords: true})}
            type='button' title='Change Password' labelTitle='Password'
            name='change-password' component={LongGrayButton}/>
          }

          
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;