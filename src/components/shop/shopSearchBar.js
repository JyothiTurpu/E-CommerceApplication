import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

function FormSearchBar(props) {
  return (
    <div className='search-bar-grid'>
       <FontAwesomeIcon icon="search" className='search-bar-grid__icon'/>
       <input className={`${props.className} form-search-bar search-bar-grid__input`} type="text" {...props.input} 
              placeholder={`${props.placeholder}`}/>
    </div>
    
  )
}

class ShopSearchBar extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
        <Field name='query' className='shop-search-bar__form-search-bar' placeholder='Search'  component={FormSearchBar}/>
      </form>
    )
  }
}

ShopSearchBar = reduxForm({
  form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;