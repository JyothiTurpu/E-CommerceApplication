import { SET_HEADER_LINKS, SET_NAVBAR_LINKS } from '../actions/types';

const INITIAL_STATE = {
  headerLinks: [
    {
      title: 'yooo'
    },
    {
      title: 'YOOO'
    }
  ],
  navbarLinks: [
    {
      title: 'Account Information',
      active: true
    },
    {
      title: 'Purchase History',
      active: false
    }
  ]
}

export default function(state = INITIAL_STATE, action) {
  switch(action.types) {
    case SET_HEADER_LINKS:
          return {
              ...state,
              headerLinks: action.payload
          }
    case SET_NAVBAR_LINKS:
          return {
              ...state,
              navbarLinks: action.payload
          }
    default: 
          return state;
  }
}