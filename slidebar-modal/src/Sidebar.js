import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import {useConsumeContext} from './context'

const Sidebar = () => {
  let { sidebarAndUpdater} = useConsumeContext();
  let { sidebar, setSidebar } = sidebarAndUpdater;


  return (
    <aside className={`sidebar ${sidebar && `show-sidebar`}` } >
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={() => setSidebar(!sidebar)}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(link => (<li 
        key={link.id}>
        <a href={link.url}>{link.icon} {link.text}</a>
        </li>
        ))}
      </ul>

      <ul className="social-icons">
        {social.map(soc => (<li 
        key={soc.id}>
        <a href={soc.url}>{soc.icon}</a>
        </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
