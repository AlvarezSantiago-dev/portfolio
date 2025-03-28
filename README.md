# Vite Portfolio

Este es un portafolio web desarrollado con **Vite** y **React**. El proyecto incluye animaciones con **Framer Motion**, íconos con **React Icons** y envíos de correo con **EmailJS**.

## 🚀 Tecnologías utilizadas

- [Vite](https://vitejs.dev/) - Entorno de desarrollo rápido
- [React](https://react.dev/) - Biblioteca para construir interfaces de usuario
- [React DOM](https://react.dev/) - Renderizado en el navegador
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [React Icons](https://react-icons.github.io/react-icons/) - Íconos para React
- [SweetAlert2](https://sweetalert2.github.io/) - Alertas personalizadas
- [EmailJS](https://www.emailjs.com/) - Envío de correos electrónicos
- [Poppins Font](https://fontsource.org/fonts/poppins) - Tipografía principal

## 📂 Instalación y uso

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/tu-usuario/vite-portfolio.git
cd vite-portfolio
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Ejecutar en modo desarrollo
```sh
npm run dev
```

### 4️⃣ Construir para producción
```sh
npm run build
```

### 5️⃣ Previsualizar la versión de producción
```sh
npm run preview
```

## 📜 Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm run build`: Genera los archivos optimizados para producción.
- `npm run preview`: Previsualiza la versión de producción.
- `npm run lint`: Ejecuta ESLint para detectar errores de código.

## 🛠 Configuración adicional

Para usar **EmailJS**, debes configurar un archivo `.env` con tus credenciales:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_USER_ID=tu_user_id
```

