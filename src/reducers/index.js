import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import HeaderNavBar from './headerNavBarReducer';
import User from './userReducer';
import Shop from './shopReducer';


const rootReducer = combineReducers({
  form,
  HeaderNavBar,
  User,
  Shop
});

export default rootReducer;