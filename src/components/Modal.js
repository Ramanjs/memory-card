import React from 'react';

function Modal(props) {

  function toggleModal() {
    props.toggleModal(false);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span>{props.message}</span>
        <div className="btn" onClick={toggleModal}>Play Again</div>
      </div>
    </div>
  )
}

export default Modal;
