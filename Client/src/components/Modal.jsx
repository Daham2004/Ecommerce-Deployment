import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // For accessibility

const CustomModal = ({ isOpen, onClose, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <div>
        <h2>Order Status Update</h2>
        <p>{message}</p>
        <button className="blue-button" onClick={onClose}>OK</button>
      </div>
    </Modal>
  );
};

export default CustomModal;