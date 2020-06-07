import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='nav-bar'>
        {
          this.props.navbarLinks.map((link, index) => {
            return (
              <a className={`navbar__link ${link.active ? 'green-text' : ''}`} key={index} onClick={() => console.log('Trying to switch Tabs')}>
                  {link.title}
              </a>
            )
          })
        }
      </div>
    );
  }

}
function mapStateToProps(state) {
    const { navbarLinks } = state.HeaderNavBar;
    return {navbarLinks};
}


NavBar = connect(mapStateToProps)(NavBar);
export default NavBar;