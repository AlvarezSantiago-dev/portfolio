import styles from "./resumen.module.css"
import { FaGraduationCap } from "react-icons/fa";


const certificados = [
    {
        javaScript: "https://pub.coderhouse.com/legacy-certificates/651d275ece41733eef4e1920?lang=es",
        desarrolloWeb: "https://pub.coderhouse.com/legacy-certificates/64b50136cda677000270f76b?lang=es",
        react: "https://pub.coderhouse.com/legacy-certificates/659505ee8f81f81ab828da90?lang=es"
    }
]
const educacion = [
    {
        id: 0, nombre: "CET N°5 Don Jaime Felipe Morant ", grado: "- Secundario(6to año),", titulo: "Técnico Químico",
    },
    { id: 1, nombre: "Coderhouse", grado: "- Frontend,", titulo: "Desarrollo Web -", content: ["desarrolloWeb"] },
    { id: 2, nombre: "Coderhouse", grado: "- Frontend,", titulo: "JavaScript -", content: ["javaScript"] },
    { id: 3, nombre: "Coderhouse", grado: "- Frontend,", titulo: "React JS -", content: ["react"] },
];
const experiencia = [
    {
        id: 0,
        nombre: "-",
        description: "Mis trabajos no estan relacionados con el mundo del desarrollo web. ",
        rol: "Experiencia Laboral"
    },
    {
        id: 1,
        nombre: "Proyectos Personales",
        description: "Después de completar mi formación en Coderhouse, desarrollé varios proyectos personales para reforzar mis conocimientos en React, CSS Modules y buenas prácticas en desarrollo frontend.",
        rol: "Desarrollo Personal"
    },
    {
        id: 2,
        nombre: "Proyecto Freelance - WooCommerce",
        description: "Trabajé en la implementación del frontend de una tienda online utilizando WordPress y WooCommerce. Mi responsabilidad principal fue convertir el diseño en código y optimizar la experiencia del usuario. El proyecto está actualmente en producción.",
        rol: "Freelance"
    }
];


const skills = [
    { title: "Html", logo: "./skills/html5.svg" },
    { title: "Css", logo: "./skills/css.svg" },
    { title: "TailwindCSS", logo: "./skills/tailwindcss.svg" },
    { title: "Sass", logo: "./skills/sass.svg" },
    { title: "Git", logo: "./skills/git.svg" },
    { title: "JavaScript", logo: "./skills/javascript.svg" },
    { title: "React", logo: "./skills/react.svg" },
    { title: "Vite", logo: "./skills/vite.svg" }
];
export const Resumen = () => {
    return (
        <section className={styles.MainResumen}>
            <div className={styles.mainTitle}>
                <h1>Resumen</h1>
            </div>

            <div className={styles.contTarjetas}>
                <div className={styles.title}>
                    <i><FaGraduationCap /></i>
                    <h2>Educacion</h2>
                </div>

                {educacion.map((prop, index) => (
                    <div className={`${styles.tarjeta} ${styles[`tarjetas-${prop.id}`]}`} key={index}>
                        <h3>
                            {prop.nombre}<span>{prop.grado}</span>
                        </h3>
                        <p>
                            {prop.titulo}
                            {prop.content && prop.content.map((lang, i) => (
                                <a key={i} href={certificados[0][lang]} target="_blank" rel="noopener noreferrer">
                                    Ver certificado
                                </a>
                            ))}
                        </p>

                    </div>
                ))}
            </div>


            <div className={styles.contTarjetas}>
                <div className={styles.title}>
                    <i><FaGraduationCap /></i>
                    <h2>Experiencia</h2>
                </div>
                {experiencia.map((prop, index) => (
                    <div className={`${styles.tarjeta} ${styles[`tarjetas-${prop.id}`]}`} key={index}>
                        <h3>
                            {prop.nombre} <span>{prop.rol}</span>
                        </h3>
                        <p>{prop.description}</p>
                    </div>
                ))}
            </div>

            <div className={styles.contSkills}>
                <h2>Stack Front</h2>
                <div className={styles.contLogos}>
                    {skills.map((prop, index) => (
                        <div key={index} className={`${styles.imgCont} ${styles[`logo-${prop.title}`]}`}>
                            <img src={prop.logo} alt={prop.title} />
                        </div>



                    ))}
                </div>
            </div>


        </section>
    )
}
