import { 
  SET_SHOP_CATEGORIES,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_WITH_CATEGORY_ID,
  FILTER_PRODUCTS_WITH_QUERY
} from '../actions/types';

const INITIAL_STATE = {
  categories: [],
  products: [],
  filteredProducts: [],
  filteredProductsWithQuery: []
};

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case SET_SHOP_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }


    case SET_SHOP_PRODUCTS: 
      return {
        ...state,
        products: action.payload,
      }


    case FILTER_PRODUCTS_WITH_CATEGORY_ID:
      var filteredProducts = []; 
      state.products.map(product => {
        if(product.belongsTo.includes(action.payload)) {
          filteredProducts.push(product);
        }    
      })
      return {
        ...state,
        filteredProducts
      }


      case FILTER_PRODUCTS_WITH_QUERY:
        var filteredProductsWithQuery = [];
        console.log(action.payload);
        // state.products.map(product => {
        //   if(product.title.includes(action.payload))
        //     filteredProductsWithQuery.push(product);
        // })
        return {
          ...state,
          filteredProductsWithQuery
        }


      default:
        return  state ;
  }
}