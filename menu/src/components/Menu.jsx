import React from 'react';

export default function Menu({title, price, img, description}) {
  return (
        <article className="menu-item">
          <img className="photo" src={img} alt={title} />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4>{price}</h4>
            </header>
            <p className="item-text">{description}</p>
          </div>
        </article> 
  )
}
