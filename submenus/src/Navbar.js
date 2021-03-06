import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import data from "./data";
import { useConsumeAppContext } from './context';

const Navbar = () => {

  let { setHoverAndProduct, windowWidth, setShowsidebar, isPositionOfSubmenu } = useConsumeAppContext();
  let breakPoint = 799;

  function handleMouseOver(e) {
      let {textContent:product} = e.target;
      let boundingDimensions = e.target.getBoundingClientRect();

      let left = boundingDimensions.left;
      let right = boundingDimensions.right;
      let elementWidth = right - left;

      isPositionOfSubmenu.current = left + (elementWidth/2);  

      setHoverAndProduct(prev => {
        return {
          ...prev,
          hover : true,
          product : product
        }
      });
  }

  function handleMouseOut() {
          setHoverAndProduct(prev => {
            return {
              ...prev,
              hover : false
            }
          })
  }

  return(
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
        <img src={logo} alt="brand-logo" className="nav-logo" />
        <button className="btn toggle-btn" onClick={() => setShowsidebar(true)}>
        {windowWidth <= breakPoint && <FaBars />}
        </button>
        </div>
        <ul className="nav-links">
          {data.map(link => <li key={link.page}>
          <button className="link-btn"
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseLeave={() => handleMouseOut()}
          >{link.page}
          </button>
          </li>)}
        </ul>
        <button className="btn signin-btn">
            {"Sign in"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
