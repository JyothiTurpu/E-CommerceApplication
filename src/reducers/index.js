import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import HeaderNavBar from './headerNavBarReducer';
import User from './userReducer';


const rootReducer = combineReducers({
  form,
  HeaderNavBar,
  User
});

export default rootReducer;