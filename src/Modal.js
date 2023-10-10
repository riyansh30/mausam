import React from 'react';
import './Modal.css'; 

function Modal({ message, onClose }) {
  return (
    <div className="modal"> 
      <div className="modal-content"> 
        <h2>Error</h2>
        <p>{message}</p>
        <button className="modal-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;