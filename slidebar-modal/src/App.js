import React, { useState } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import { ContextProvider } from './context';



function App() {
  let [ sidebar, setSidebar ] = useState(false);
  let [ showModal, setShowModal ] = useState(false);

  let sidebarAndUpdater =  {
      sidebar : sidebar,
      setSidebar : setSidebar
    }

  let showModalAndUpdater =  {
      showModal : showModal,
      setShowModal : setShowModal
    }

  let providerValue = {
    showModalAndUpdater : showModalAndUpdater,
    sidebarAndUpdater : sidebarAndUpdater
  }

  return (
    <>
    <main>
      <ContextProvider value={providerValue}>
      <Home />
      <Sidebar />
      <Modal />
      </ContextProvider>
    </main> 
    </>
  )
}

export default App
