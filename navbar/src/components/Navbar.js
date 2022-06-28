import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";

let { log } = console;
export default function Navbar() {
    let [menu, setMenu] = useState(false);
    let hamburgerMenu = useRef();
    let linksContainer = useRef();
    let linkRef = useRef();



    function handleClick() {
      setMenu(prev => !prev);
    }

    useEffect(
      () => {
          let computedContainerHeight = linkRef.current.offsetHeight;
          
          if(menu){
            linksContainer.current.setAttribute("style", `height: ${computedContainerHeight}px`)
          }
          else{
            linksContainer.current.setAttribute("style", `height: ${0}px`)
          }
      }
    ,[menu]);

    return (
      <nav>
      <div className="nav-center">

          <div className="nav-header">
            <img 
            src="https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg" 
            alt="brand-logo" 
            className="logo"/>
            <button className="nav-toggle"
            ref={hamburgerMenu}
            onClick={handleClick}
            ><FaBars /></button>
          </div>

          <div className="links-container" ref={linksContainer}>
          <ul className="links" ref={linkRef}>
          {links.map(link => <li
            key = {link.id}  
          >
            <a href={link.url}>{link.text}</a>
          </li>
          )}
          </ul>
          
          </div>

          <ul className="social-icons">
          
          {social.map(icon => <li
          key={icon.id}
          >
          <a href={icon.url}>{icon.icon}</a>
          </li>
          )}
          
          </ul>

      </div>
      </nav>
    )
}
