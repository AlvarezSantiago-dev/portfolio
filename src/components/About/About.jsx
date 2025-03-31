import styles from "./about.module.css"
import { FaReact, FaJs } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { FcIdea } from "react-icons/fc";
const content = [
    { logotipo: <DiResponsive />, title: "HTML/CSS y diseño responsivo", parrafo: "Me enfoco en crear interfaces amigables y visualmente atractivas que se adapten perfectamente a diferentes dispositivos." },
    { logotipo: <FaJs />, title: "Fundamentos de JavaScript", parrafo: "Estoy construyendo una base sólida en JavaScript para agregar interactividad y funcionalidad a las aplicaciones web." },
    { logotipo: <FaReact />, title: "Desarrollo con React", parrafo: "Estoy explorando React para crear interfaces dinámicas, modernas y componentes reutilizables." },
    { logotipo: <FcIdea />, title: "Aprendizaje continuo", parrafo: "Aprovecho cada oportunidad para aprender nuevas herramientas, frameworks y mejores prácticas para mantenerme actualizado en este campo en constante evolución." }
];

export const About = () => {
    return (
        <section className={styles.MainAbout} id="sobre-mi">
            <div className={styles.description}>
                <h1 >Sobre mí</h1>
                <p>Soy un Desarrollador Front-End Trainee/Junior con una gran pasión por crear experiencias web modernas y atractivas. Aunque estoy iniciando mi camino en el mundo del desarrollo web, estoy altamente motivado para aprender, crecer y perfeccionar mis habilidades cada día.</p>

                <p>
                    Mi objetivo es transformar ideas creativas en soluciones funcionales y visualmente atractivas, contribuyendo a proyectos que generen un impacto. Estoy emocionado de aportar entusiasmo, dedicación y perspectivas frescas mientras continúo desarrollando mi experiencia en el área.
                </p>

            </div>

            <h2 className={styles.subTitle}> ¡Lo que hago! </h2>

            <div className={styles.contTarjetas}>
                {content.map((content, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.contLogo}>
                            <a
                                className={`${styles.logotipo} ${styles[`logotipo-${index}`]}`}
                            >
                                <i>{content.logotipo}</i>
                            </a>
                        </div>
                        <div className={styles.contTexto}>
                            <h3>{content.title}</h3>
                            <p>{content.parrafo}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
