import {
  setHeaderLinks,
  setNavBarLinks,
  changeNavBarActive
} from './headerNavBar';

import {
  fetchUserPurchases,
  setPurchaseDetail,
  fetchCartProducts
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
  
  fetchShopCategories,
  fetchShopProducts,
  filterProductsWithCategoryId,
  filterProductsWithQuery
};
