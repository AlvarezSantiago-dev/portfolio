
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './navtabs.module.css';
//importacion de iconos


import { FaAddressBook } from "react-icons/fa";
import { FaRegFileLines, FaRegUser, FaBriefcase } from "react-icons/fa6";
;
import { About } from '../About/About.jsx';
import { Resumen } from '../Resumen/Resumen.jsx';
import { Contact } from '../Contact/Contact.jsx';
import { Works } from '../Works/Works.jsx';


//contenido de los tabs
const tabs = [
    { id: 0, title: 'Sobre Mi', content: <About />, icon: <FaRegUser /> },
    { id: 1, title: 'Resumen', content: <Resumen />, icon: <FaRegFileLines /> },
    { id: 2, title: 'Trabajos', content: <Works/> , icon: <FaBriefcase /> },
    { id: 3, title: 'Contacto', content: <Contact />, icon: <FaAddressBook /> },
];

export const NavTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);


    const [isOpen, setIsOpen] = useState(false);
    const toggleBurger = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>



            <div className={styles.contenedor}>
                <div className={`${styles.burger} ${isOpen ? styles.open : ""}`} onClick={toggleBurger} >
                    <div className={styles.estLineas}>
                        <div className={styles.fondoFlechas}>
                            <span className={styles.linea}></span>
                            <span className={styles.linea}></span>
                            <span className={styles.linea}></span>
                        </div>

                    </div>


                    {isOpen && (
                        <section className={styles.about}>
                            <div className={styles.mainbuttons}>
                                {tabs.map((tab, index) => (
                                    <span
                                        key={tab.id}
                                        className={`${styles.butticons}  ${activeTab === tab.id ? styles.active : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    > {tab.icon}{tab.title}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}



                </div>

            </div>

            <motion.div
                className={styles.contenidoo}
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                {tabs.find((tab) => tab.id === activeTab).content}
            </motion.div>

            <section className={styles.sectionEscritorio}>
        <nav className={styles.navEscritorio}>
        {tabs.map((tab, index) => (
            <ul
                key={tab.id}
                className={`${styles.butticons} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}>
                <li className={styles.iconTextContainer}>
                    <i>{tab.icon}</i>
                    <p className={styles.textoButtons}>{tab.title}</p>
                </li>
            </ul>
        ))}
        </nav>
        
    
</section>

        </>

    );
};