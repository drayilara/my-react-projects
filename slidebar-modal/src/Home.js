import React from 'react';
import { FaBars } from 'react-icons/fa'
import { useConsumeContext } from './context';

const Home = () => {
  let { sidebarAndUpdater, showModalAndUpdater } = useConsumeContext();
  let {sidebar, setSidebar} = sidebarAndUpdater;
  let {showModal, setShowModal} = showModalAndUpdater;

  return (
    <main>
      <button className="sidebar-toggle" onClick={() => setSidebar(!sidebar)}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => setShowModal(!showModal)}>
        Show modal
      </button>
    </main>
  )
}

export default Home
