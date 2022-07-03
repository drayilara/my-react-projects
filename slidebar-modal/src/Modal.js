import React, { useRef, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useConsumeContext } from "./context"


const Modal = () => {
  let { showModalAndUpdater } = useConsumeContext();
  let { showModal, setShowModal } = showModalAndUpdater;
  let modalRef = useRef(null)

  useEffect(
    () => {
      if(showModal) {
        modalRef.current.classList.add("show-modal");
      }

      if(!showModal) {
        modalRef.current.classList.remove("show-modal");
      }
    }
  , [ showModal ])

  return(
    <div className="modal-overlay" ref={modalRef}>
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
