import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class GreenPriceTag extends Component {
  render() {
    const { className, title } = this.props;
    return (
      <div className={`${className} green-price-tag`}>
          {title}
      </div>
    )
  }
}

export default GreenPriceTag;