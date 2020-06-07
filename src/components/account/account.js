import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import AccountInformation from './accountInformation';
import PurchaseHistory from './purchaseHistory';

class Account extends Component {

  componentDidMount() {
      const navBarLinks = [
        {
          _id: 0,
          title: 'Purchase History',
          active: false,
          component: <PurchaseHistory/>
        },
        {
          _id: 1,
          title: 'Account Information',
          active: true,
          component: <AccountInformation/>
        }
      ];

      this.props.setHeaderLinks([])
      this.props.setNavBarLinks(navBarLinks);
  }


  renderContent() {
    let jsx;
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
      <div>
          {
            this.renderContent()
          }
      </div>
    );
  }
}



function mapStateToProps(state) {
  const { headerLinks, navBarLinks } = state.HeaderNavBar;
  return { headerLinks, navBarLinks }
}


Account = connect(mapStateToProps, actions)(Account);
export default Account;