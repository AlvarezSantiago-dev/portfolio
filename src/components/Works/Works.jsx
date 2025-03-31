import React, { useState } from 'react';
import styles from "./works.module.css";

// Corregimos las rutas de los logos (usar public/ si están allí)
const logos = {
    vite: "./skills/vite.svg",
    js: "./skills/javascript.svg",
    css: "./skills/css.svg",
    firebase: "./skills/firebase.svg",
    wordpress:"./skills/wordpress.svg"
};

// Asegurar que language sea un array en todos los proyectos
const proyectos = [
    {
        id: 0,
        title: "Todo App",
        language: ["vite", "js", "css"],
        description: "Esta es una aplicación básica de lista de tareas (Todo App) desarrollada con React. Permite a los usuarios agregar, marcar como completadas y eliminar tareas.",
        image: "https://i.imgur.com/pgYW0h3.png",
        preview: "https://todo-app-nine-mauve.vercel.app/",
        repositorio: "https://github.com/AlvarezSantiago-dev/todo-app"
    },
    {
        id: 1,
        title: "Poke App",
        language: ["vite", "js", "css"],
        description: "Poke-App es una aplicación web desarrollada con React y Vite, diseñada para explorar y visualizar información sobre Pokémon. Utiliza React Router DOM para la navegación y proporciona una experiencia interactiva para los usuarios.",
        image: "https://i.imgur.com/DwTFU4L.png",
        preview: "https://pokemon-ap.vercel.app/",
        repositorio: "https://github.com/AlvarezSantiago-dev/pokemon-ap"
    },
    {
        id: 2,
        title: "Woocomerce - Proyecto Freelance",
        language: ["wordpress", "js", "css"],
        description: "Woocomerce es un proyecto freelance en el que trabaje en la parte de frontend, utilizando WordPress y Woocomerce para crear una tienda online. El proyecto actualmente esta en producción. En este proyecto no trabaje en el diseño, solo pase el diseño a código.",
        image: "/woocomerce.png", // Si está en public/
        preview: "https://centrocristianovidatucasa.com.ar/",
        repositorio: ""
    },
    {
        id: 3,
        title: "Ecommerce",
        language: ["vite", "js", "css", "firebase"],
        description: "Ecommerce en desarrollo. Es un proyecto personal que estoy desarrollando. La idea es crear una tienda online de productos digitales. En este proyecto estoy utilizando Firebase como base de datos y Vite como herramienta de desarrollo.",
        
        image: "/construccion.png", // Si está en public/
        preview: "",
        repositorio: ""
    }
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
            <div className={styles.contenidoWorks}>
            <h1>Portafolio</h1>
            <div className={styles.contProyectos}>
                {proyectos.map((proyecto) => (
                    <div key={proyecto.id} className={styles.card} onClick={() => openModal(proyecto)}>
                        <div className={styles.contImg}>
                            <img src={proyecto.image} alt={`Imagen de ${proyecto.title}`} />
                        </div>
                        {/* Mapeo de los logos de lenguajes */}
                        <div className={styles.lenguajes}>
                            {proyecto.language.map((lang) => (
                                <img key={lang} src={logos[lang]} alt={lang} width={30} />
                            ))}
                        </div>
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
                        <p><strong>Lenguajes utilizados:</strong></p>
                        <div className={styles.lenguajes}>
                            {selectedProject.language.map((lang) => (
                                <img key={lang} src={logos[lang]} alt={lang} width={30} />
                            ))}
                        </div>
                        <div className={styles.contBtns}>
                            {selectedProject.preview && (
                                <a href={selectedProject.preview} className={styles.btn} target='_blank' rel="noopener noreferrer">Ver demo</a>
                            )}
                            {selectedProject.repositorio && (
                                <a href={selectedProject.repositorio} className={styles.btn} target="_blank" rel="noopener noreferrer">Ver código</a>
                            )}
                        </div>
                    </div>
                </div>
            )}
            </div>
            
            
        </div>
    );
};
