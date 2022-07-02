import React, { useMemo, useState } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {
  let [ sidebar, setSidebar ] = useState(false);
  let [ showModal, setShowModal ] = useState(false);

  let sidebarAndUpdater = useMemo(() => {
    return {
      sidebar : sidebar,
      setSidebar : setSidebar
    }
  }, [ sidebar ])

  let showModalAndUpdater = useMemo(() => {
    return {
      showModal : showModal,
      setShowModal : setShowModal
    }
  }, [ showModal ])

  return (
    <>
    <main>
      <Home sidebarAndUpdater={sidebarAndUpdater} showModalAndUpdater={showModalAndUpdater}/>
      <Sidebar sidebarAndUpdater={sidebarAndUpdater} showModalAndUpdater={showModalAndUpdater}/>
      <Modal showModalAndUpdater={showModalAndUpdater}/>
    </main> 
    </>
  )
}

export default App
