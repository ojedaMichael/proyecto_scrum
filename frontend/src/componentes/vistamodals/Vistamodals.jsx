import SkillsModal from '../vistamodal/SkillsModal';
import React, { useState } from 'react';

function Vistamodals() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [postulante, setPostulante] = useState({
      nombre: "Carlos Rojas",
      skills: ["Laravel", "React", "Node.js", "HTML", "CSS"],
    });
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <>
        <div className="font-sans">
          <h1>{postulante.nombre}</h1>
          <button
            onClick={openModal}
            className="bg-blue-900 text-white p-2 rounded"
          >
            Ver Skills
          </button>
          <SkillsModal
            isOpen={modalIsOpen}
            onClose={closeModal}
            postulante={postulante}
          />
        </div>
        </>
  );
}
        export default Vistamodals;