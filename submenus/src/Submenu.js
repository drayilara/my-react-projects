import React, { useEffect, useState } from 'react';
import { useConsumeAppContext } from './context';
import { v4 as key} from "uuid";
import sublinks from './data';

const Submenu = () => {
  
  let { hoverAndProduct, submenuRef, isPositionOfSubmenu } = useConsumeAppContext();
  let dataToDisplay = sublinks.filter(link => link.page === hoverAndProduct.product.toLowerCase());
  let [ submenuHover, setSubmenuHover ] = useState(false)

  useEffect(
    () => {
        submenuRef.current.style.left = isPositionOfSubmenu.current + "px";
    }
  , [ hoverAndProduct ])
  
  useEffect(
    () => {
        if(submenuHover) {
          submenuRef.current.classList.add("show");
        }
        else{
          submenuRef.current.classList.remove("show");
        }
    }
  , [ submenuHover ])
  
  return(
    <aside className={`submenu ${hoverAndProduct.hover && `show`}`} ref={submenuRef}
    onMouseOver={() => setSubmenuHover(true)}
    onMouseLeave={() => setSubmenuHover(false)}>
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

export default Submenu;
