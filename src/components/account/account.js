import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import AccountInformation from './accountInformation';
import PurchaseHistory from './purchaseHistory';

class Account extends Component {

  componentDidMount() {
      const headerLinks = [
        {
          _id: 0,
          title: 'Shop',
          path: '/shop'
        },
        {
          _id: 1,
          title: 'Logout',
          path: '/'
        }
      ];


      const navBarLinks = [
        {
          _id: 0,
          title: 'Purchase History',
          active: true,
          component: <PurchaseHistory/>
        },
        {
          _id: 1,
          title: 'Account Information',
          active: false,
          component: <AccountInformation/>
        }
      ];

      this.props.setHeaderLinks(headerLinks);
      this.props.setNavBarLinks(navBarLinks);
  }


  renderContent() {
    let jsx;
    console.log(this.props);

      if(this.props.navBarLinks) {
          this.props.navBarLinks.map(link => {
            if(link.active)
              {jsx = link.component}
          })
      }
    return jsx;
  }


  render(){
    return(
      <div className='account'>
          {
            this.renderContent()
          }
      </div>
    );
  }
}



function mapStateToProps(state) {
  console.log(state);
  const { headerLinks, navBarLinks } = state.HeaderNavBar;
  return { headerLinks, navBarLinks }
}


Account = connect(mapStateToProps, actions)(Account);
export default Account;