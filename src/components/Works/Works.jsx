import React, { useState } from 'react';
import styles from "./works.module.css";

const proyectos = [
    {id: 0, title: "Todo App", language:"Vite, JavaScript, CSS", description: "Descripcion del proyecto 1", image: "ruta"},
    {id: 1, title: "Poke App", language:"Vite, JavaScript, CSS", description: "Descripcion del proyecto 2", image: "ruta"},
    {id: 2, title: "Ecommerce", language:"Vite, JavaScript, CSS", description: "Descripcion del proyecto 3", image: "../../../public/construccion.png"}
];

export const Works = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (proyecto) => {
        setSelectedProject(proyecto);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className={styles.container}>
            <h1>Portafolio</h1>
            <div className={styles.contProyectos}>
                {proyectos.map((proyecto) => (
                    <div key={proyecto.id} className={styles.card} onClick={() => openModal(proyecto)}>
                        <div className={styles.contImg}>
                            <img src={proyecto.image} alt="imagen del proyecto" />
                        </div>
                        <p>{proyecto.language}</p>
                        <a>{proyecto.title}</a>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && selectedProject && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={closeModal}>&times;</span>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <p><strong>Lenguajes utilizados:</strong> {selectedProject.language}</p>
                        <div className={styles.contBtns}>
                            <a href="#" className={styles.btn}>Ver demo</a>
                            <a href="#" className={styles.btn}>Ver código</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
