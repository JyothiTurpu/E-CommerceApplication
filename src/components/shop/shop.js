import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {

  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: 'Login',
        path: '/signin'
      }
    ];
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();
    this.props.fetchShopProducts();
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.categories != undefined)
      this.props.setNavBarLinks(this.props.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
    else if(nextProps.categories != undefined)
      this.props.setNavBarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));

    return true;
  }


  render() {
    return(
      <div className='shop'>
          Shop
          {/* SearchBar */}
          {/* {Shop Product Components} */}
          {/* Cart button */}
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { categories } = state.Shop;
  return { categories }
}


Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;