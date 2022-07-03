import React, { useMemo, useState } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import { ContextProvider } from './context';



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
