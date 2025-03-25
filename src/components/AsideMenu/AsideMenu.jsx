import React from 'react'
import styles from "./asidemenu.module.css"
import { useState } from 'react'
import { FaInstagram,FaLinkedinIn, FaMobile, FaEnvelopeOpenText,FaGithub    } from "react-icons/fa";
import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";

const personalInfo = [
    {id: 0 ,name: "Phone", text:"2996587715", icon: <FaMobile/>},
    {id: 1, name: "Email", text:"Enviar correo", icon: <FaEnvelopeOpenText/>},
    {id: 2,name: "Location", text:"Cinco Saltos - Argentina", icon: <FaLocationDot/>    },
    {id: 3, name: "Birthday", text:"Mar 26, 2001", icon: <FaRegCalendarDays/>}, 
]
export const AsideMenu = () => {

const [info, setinfo] = useState(personalInfo)

return (
//aside
    <aside className={styles.asidestyles}>
        
        <img className={styles.photo} src="../../../public/perfile-photo/posible-perfil.jpg" alt="" />
        
        <h4 className={styles.name}>Santiago Ezequiel Alvarez</h4>
        <div>
            <p className={styles.occupation}>Desarrollador Frontend</p>
        </div>
            <div className={styles.mainredes}> 
                <li>
                    <a className={styles.gtIcon} href="#"><i><FaGithub /></i></a>
                </li>
                <li>
                    <a  className={styles.lnIcon}href="#"><i><FaLinkedinIn /></i></a>
                </li>
                <li>
                    <a className={styles.igIcon} href="#"><i><FaInstagram/></i></a>
                </li>
            </div>
        <div className={styles.personalInfo}>
            { 
                info.map((informacion) => {
                    return (
                        <div key={informacion.id} className={styles.info}>
                        <div className={styles.divIcon}>
                            <i className={`${styles[`logotipo-${informacion.id}`]}`}>{informacion.icon}</i>
                        </div>
                        <div className={styles.divText}>
                            <span> {informacion.name} </span>
                            <p> {informacion.text} </p>
                        </div>
                    </div>
                    )
                })
            }
            <div className={styles.download}>
                <i>
                © 
                </i>
                <a href="">
                    Descargar CV
                </a>
            </div>
        </div>
    </aside>
  )

}

