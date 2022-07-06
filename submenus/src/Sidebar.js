import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useConsumeAppContext } from './context'
import sublinks from './data'
import { v4 as key} from "uuid";

const Sidebar = () => {
  let { showSidebar, setShowsidebar } = useConsumeAppContext();

  return(
    <div className={`sidebar-wrapper ${showSidebar && `show`}`}>
        <aside className={`sidebar`}>
        <button className="close-btn" onClick={() => setShowsidebar(false)}>
          <FaTimes />
        </button>
        <div className="sidebar-links">

        {sublinks.map(data => {

          return( 

            <article key={key()}>
              <h4>{data.page}</h4>
              <div className="sidebar-sublinks">

              {data.links.map(linkData => {

               return (
                
                <a href={linkData.url} key={key()}>
                  {linkData.icon}
                  {linkData.label}
                </a>
               )  
              })} 
              </div>
            </article>
          )
        })}
        </div>
        </aside>
    </div>
  )
}

export default Sidebar;