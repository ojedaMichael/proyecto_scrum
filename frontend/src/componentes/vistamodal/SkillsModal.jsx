
import React from 'react';
import Modal from 'react-modal';

const SkillsModal = ({ isOpen, onClose, postulante }) => {
  const { nombre, skills } = postulante;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Skills Modal"
      className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md max-w-md w-full"
      overlayClassName="overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="modal-header flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{nombre}'s Habilidades</h2>
        <button className="close-button text-2xl" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-body">
        <ul>
          {skills.map((skill, index) => (
            <li key={index} className="mb-2">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default SkillsModal;
