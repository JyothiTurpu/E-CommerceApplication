import {
  setHeaderLinks,
  setNavBarLinks,
  changeNavBarActive
} from './headerNavBar';

import {
  fetchUserPurchases,
  setPurchaseDetail,
  fetchCartProducts,
  addCartProduct
} from './user.js';

import {
  fetchShopCategories,
  fetchShopProducts,
  filterProductsWithCategoryId,
  filterProductsWithQuery
} from './shop';

export {
  setHeaderLinks,
  setNavBarLinks,
  changeNavBarActive,

  fetchUserPurchases,
  setPurchaseDetail,
  fetchCartProducts,
  addCartProduct,
  
  fetchShopCategories,
  fetchShopProducts,
  filterProductsWithCategoryId,
  filterProductsWithQuery
};
