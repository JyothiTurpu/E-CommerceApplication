import React from 'react';

export function UnderLinedTitle({ className, title }) {
  return(
    <div className={`${className} underlined-title`}>
        {title}
    </div>
  )
}


export function InfoLabel({ className, title, value }) {
  return(
    <div className={`${className} info-label`}>
        <div className='info-label__title'>{title}</div>
        <div className='info-label__value'>{value}</div>
    </div>
  )
}

