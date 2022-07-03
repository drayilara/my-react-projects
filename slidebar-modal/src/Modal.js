import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useConsumeContext } from "./context"


const Modal = () => {
  let { showModalAndUpdater } = useConsumeContext();
  let { showModal, setShowModal } = showModalAndUpdater;

  return(
    <div className={`modal-overlay ${showModal && "show-modal"}`}>
        <div className="modal-container">
          <h3>Modal content</h3>
          <button className="close-modal-btn" onClick={() => setShowModal(!showModal)}>
          <FaTimes />
          </button>
        </div>
    </div>
  )
}

export default Modal
