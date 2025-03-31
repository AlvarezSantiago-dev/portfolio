import emailjs from 'emailjs-com';
import { useState } from 'react';
import styles from "./contact.module.css"
import Swal from 'sweetalert2';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "name") {
            // Solo letras y espacios (sin números ni símbolos)
            if (!/^[a-zA-Z\s]*$/.test(value)) return;
        }
    
        if (name === "email") {
            // Solo caracteres válidos para un email
            if (!/^[a-zA-Z0-9@._-]*$/.test(value)) return;
        }
    
        if (name === "message") {
            // Permitir letras, números y algunos signos de puntuación básicos
            if (!/^[a-zA-Z0-9\s.,!?]*$/.test(value)) return;
        }
    
        setFormData({ ...formData, [name]: value });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validaciones antes de enviar
        if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            Swal.fire("Error", "El nombre solo puede contener letras y espacios.", "error");
            return;
        }
        if (!/^[a-zA-Z0-9@._-]+$/.test(formData.email)) {
            Swal.fire("Error", "El email contiene caracteres no permitidos.", "error");
            return;
        }
        if (!/^[a-zA-Z0-9\s.,!?]+$/.test(formData.message)) {
            Swal.fire("Error", "El mensaje contiene caracteres no permitidos.", "error");
            return;
        }
    
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_USER_ID
        ).then(response => {
            Swal.fire({
                title: "Correo enviado con éxito!",
                icon: "success",
                draggable: true
            });
            setFormData({ name: '', email: '', message: '' });
        }).catch(error => console.error('Error enviando email:', error));
    };
    

    return (
        <div className={styles.contact}>
            <div className={styles.contactContainer}>
                <h1>Contacto</h1>
                <form  className={styles.formulario} onSubmit={handleSubmit}>
                
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Tu Nombre" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Tu Email" required />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tu Mensaje" required />
                <button className={styles.btnenviar} type="submit">Enviar</button>
            </form>
            </div>
            
        </div>
    );
};


