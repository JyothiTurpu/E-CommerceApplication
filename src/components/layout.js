import React, { Component } from 'react';
import Header from './headernav/header';
import NavBar from './headernav/navbar';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPlus, faMinus, faTimes, faCartPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);
library.add(faPlus);
library.add(faMinus);
library.add(faTimes);
library.add(faCartPlus);

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <NavBar/>
      </div>
    );
  }
}

export default Layout;