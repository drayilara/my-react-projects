import React, { useRef, useEffect } from 'react';
import { useConsumeAppContext } from './context';
import { v4 as key} from "uuid";
import sublinks from './data';

const Submenu = () => {
  let { hoverAndProduct, windowWidth } = useConsumeAppContext();
  let dataToDisplay = sublinks.filter(link => link.page === hoverAndProduct.product.toLowerCase());
  let submenuRef = useRef(null);
  useEffect(
    () => {

      switch(hoverAndProduct.product) {
        
          case "developers" : submenuRef.current.setAttribute(`style`, `left: ${windowWidth * .5}px`);
          break;

          case "products" : submenuRef.current.setAttribute(`style`, `left: ${windowWidth * .35}px`);
          break;

          case "company" : submenuRef.current.setAttribute(`style`, `left: ${windowWidth * .65}px`);
          break;

          case "" : submenuRef.current.setAttribute(`style`, `left: ${windowWidth/2}px`);
          break;

          default : console.log(new Error(`${hoverAndProduct.product} not present in submenu,check line 24`))
      }
    }
  , [ hoverAndProduct ])
  
  return(
    <aside className={`submenu ${hoverAndProduct.hover && `show`}`} ref={submenuRef}>
      <section>
        <h4>{dataToDisplay.map(data => data.page)}</h4>
        <div className={`submenu-center col-${dataToDisplay.map(data => data.links.length)}`}>
          {dataToDisplay.map(data => data.links.map(link => <a
          href={link.url}
          key={key()}
          >
          {link.icon}
          {link.label}
          </a>))}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
