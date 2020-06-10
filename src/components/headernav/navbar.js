import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  handleOnClick(link) {
    this.props.changeNavBarActive(link._id)
    if(this.props.onClick) {
      this.props.onClick(link._id);
    }
  }

  render() {
    return(
      <div className='nav-bar'>
        {
          this.props.navBarLinks.map((link, index) => {
            return (
              <a className={`navbar__link ${link.active ? 'green-text' : ''}`} key={index} onClick={() => this.handleOnClick(link)}>
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
    const { navBarLinks, onClick } = state.HeaderNavBar;
    return { navBarLinks, onClick };
}


NavBar = connect(mapStateToProps, actions)(NavBar);
export default NavBar;