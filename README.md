# 🚀 Task Manager

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

Task Manager es una aplicación para gestionar tareas con una interfaz intuitiva y un backend robusto.

## 📚 Índice
- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso del Backend](#uso-del-backend)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Rutas del Backend](#rutas-del-backend)
- [Repositorios](#repositorios)
- [Despliegue](#despliegue)

---

## 📄 Descripción
Task Manager permite a los usuarios gestionar sus tareas mediante un sistema seguro y fácil de usar. 🚀

Incluye un backend desarrollado con Node.js y Express, y un frontend atractivo utilizando React y Tailwind CSS. La base de datos está gestionada con MongoDB, y las APIs son documentadas con Swagger.

---

## 🎯 Características
- **CRUD para tareas** (Crear, Leer, Actualizar, Eliminar)
- **Gestión de usuarios**
- **Autenticación segura con JWT**
- **Frontend responsivo**
- **Documentación de API con Swagger**

---

## 💻 Tecnologías Utilizadas
| Tecnología   | Descripción                     |
|--------------|---------------------------------|
| Node.js      | Backend en JavaScript          |
| Express.js   | Framework para construir APIs  |
| React.js     | Librería para frontend         |
| Tailwind CSS | Estilos modernos y responsivos |
| MongoDB      | Base de datos NoSQL            |
| Swagger      | Documentación de APIs          |

---

## ⚙️ Instalación

### **Backend**
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/task-manager.git
   cd task-manager/backend

2. Instala las dependencias:
    npm install

3. Configura las variables de entorno creando un archivo .env en el backend:
    PORT=5000
    MONGO_URI=<tu-URI-de-MongoDB>
    JWT_SECRET=<tu-clave-secreta>

4. Inicia el servidor:
    npm reun dev

5. Documentación Swagger (en tu navegador):
   http://localhost:5000/api-docs

## **Frontend**

1. Instala las dependencias:
   npm install

2. Inicia la aplicación:
   npm run dev

   
## 🔧 Uso del Backend
Puedes probar las rutas del backend utilizando herramientas como Postman o Thunder Client.
Ejemplo: Para registrar un usuario:

1. Realiza una solicitud POST a:
  https://task-backend-ueoa.onrender.com/api/auth/register
2. Envía un cuerpo JSON:
{
  "username": "testuser",
  "password": "password123"
}

## 🔗 Rutas del Backend

![image](https://github.com/user-attachments/assets/aa352b0d-437d-42ea-90f6-2b8bba9ec4bb)

## Repositorios

backden: https://github.com/CarlosCeperoJ/task-back/tree/master

frontend: https://github.com/CarlosCeperoJ/task-front/edit/main

## Despliegue 

backend: https://task-backend-ueoa.onrender.com

frontend: https://task-front-navy.vercel.app/login


¡Gracias por visitar este proyecto!
💻 Con ❤️ Carlos Cepero.



    
