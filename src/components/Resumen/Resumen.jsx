import styles from "./resumen.module.css"
import { FaGraduationCap } from "react-icons/fa";

const educacion = [
    {
        id: 0, nombre: "CET N°5 Don Jaime Felipe Morant ", grado: "- Secundario(6to año),", titulo: "Técnico Químico",
    },
    { id: 1, nombre: "Coderhouse", grado: "- Frontend,", titulo: "Desarrollo Web -", content: "Certificado" },
    { id: 2, nombre: "Coderhouse", grado: "- Frontend,", titulo: "JavaScript -", content: "Certificado" },
    { id: 3, nombre: "Coderhouse", grado: "- Frontend,", titulo: "React JS -", content: "Certificado" }
];
const experiencia = [
    { id: 1, nombre: "Elaboracion de proyectos personales", description: "Despues de finalizar en Coderhouse realice proyectos personales para afianzar mis conocimientos.", rol: "- Personal" },
    { id: 2, nombre: "WooComerce", description: "description 1", rol: "- Freelance" },
]

const skills = [
    { title: "Html", logo: "../../../public/skills/html5.svg" },
    { title: "Css", logo: "../../../public/skills/css.svg" },
    { title: "TailwindCSS", logo: "../../../public/skills/tailwindcss.svg" },
    { title: "Sass", logo: "../../../public/skills/sass.svg" },
    { title: "Git", logo: "../../../public/skills/git.svg" },
    { title: "JavaScript", logo: "../../../public/skills/javascript.svg" },
    { title: "React", logo: "../../../public/skills/react.svg" },
    { title: "Vite", logo: "../../../public/vite.svg" }
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
                        <p>{prop.titulo}  <span>{prop.content}</span></p>
                    </div>
                ))}
            </div>


            <div className={styles.contTarjetas}>
                <div className={styles.title}>
                    <i><FaGraduationCap /></i>
                    <h2>Experiencia</h2>
                </div>
                {experiencia.map((prop, index) => (
                    <div  className={`${styles.tarjeta} ${styles[`tarjetas-${prop.id}`]}`} key={index}>
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
                    {skills.map((prop,index) => (
                            <div key={index} className={`${styles.imgCont} ${styles[`logo-${prop.title}`]}`}>
                                <img src={prop.logo} alt={prop.title} />
                            </div>
                            

                        
                    ))}
                </div>
            </div>


        </section>
    )
}
