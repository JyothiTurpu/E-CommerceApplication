import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
  return (
    <input className={`${props.className} form-search-bar`} type="text" {...props.input} 
    placeholder={`${props.placeholder}`}/>
  )
}

class ShopSearchBar extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    console.log(handleSubmit);
    return (
      <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
        <Field name='shop-search-bar' className='shop-search-bar__form-search-bar' placeholder='search'  component={FormSearchBar}/>
      </form>
    )
  }
}

ShopSearchBar = reduxForm({
  form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;