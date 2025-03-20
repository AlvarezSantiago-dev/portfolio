import styles from "./contact.module.css"

export const Contact = () => {
    return (
        <div className={styles.mainContact}>
            <h1 className={styles.title}>
                Contact
            </h1>
            <div className={styles.formContact}>
                <p>Prueba text</p>
                <form action="submit"className={styles.estilosForm}>
                    <label htmlFor="nombre" >Nombre</label>
                    <input placeholder="name" type="text" id="nombre" />
                    <label htmlFor="correo" >Email</label>
                    <input placeholder="correo" type="email" id="correo" />
                    <label htmlFor="mensaje">Mensaje</label>
                    <input placeholder="mensaje" type="text" id="mensaje" />
                </form>
            </div>
        </div>
    )
}
