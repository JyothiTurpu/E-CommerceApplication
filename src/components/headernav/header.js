import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='header'>
            <img className='header__img' src="http://via.placeholder.com/50x50" alt=""/>
          
            <div className='header__links'>
              {
                this.props.headerLinks.map((link, index) => {
                  return (
                    <a className='header__link' key={index} onClick={() => console.log('Trying to switch Tabs')}>
                        {link.title}
                    </a>
                  )
                })
              }
            </div>
      </div>
    );
  }

}


function mapStateToProps(state) {
  const { headerLinks } = state.HeaderNavBar;
  return {headerLinks};
}


Header = connect(mapStateToProps)(Header);
export default Header;
