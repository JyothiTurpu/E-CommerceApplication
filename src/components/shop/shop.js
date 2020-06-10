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
          {/* <div className='shop__products'>
              {this.props.products.map(product => {
                return(
                  <div className='shop-product'>
                      <div className='shop-product__title'>
                          {product.title}
                      </div>
                      <div className='shop-product__description'>
                          {product.description}
                      </div>
                  </div>
                )
              })}  
          </div> */}
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { categories, products } = state.Shop;
  console.log(state.Shop.products);
  return { categories, products }
}


Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;