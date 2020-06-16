import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartButton({className, iconName, onClick}) {
  return(
    <a  onClick={onClick} className={`${className} cart-button`}>
      <FontAwesomeIcon icon={iconName}/>
    </a>
  )
}

export default CartButton;