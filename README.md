# Instrucciones de Instalación y Despliegue del Backend

Este documento describe los pasos necesarios para instalar y desplegar el backend de una aplicación web desarrollada con Node.js, Express.js, MongoDB, Mongoose, dotenv, express-validator y CORS.

## Prerrequisitos
Antes de proceder con la instalación y despliegue del backend, es necesario contar con las siguientes herramientas y servicios:
- Node.js y npm instalados en su última versión estable. Pueden descargarse desde el siguiente enlace: https://nodejs.org/es/download/
- Una cuenta en MongoDB Atlas o un servidor de MongoDB instalado localmente en su equipo. MongoDB Atlas es un servicio de base de datos en la nube gratuito y fácil de usar. Puede registrarse en el siguiente enlace: https://www.mongodb.com/cloud/atlas/register

## Instalación
1. Clonar el repositorio del proyecto en su equipo o descargar el código fuente en formato ZIP.
2. Acceder a la carpeta del proyecto mediante la terminal o línea de comandos.
3. Ejecutar el comando **npm install** para instalar las dependencias del proyecto
4. Crear un archivo .env en la raíz del proyecto y agregar las siguientes variables de entorno:<br>
  **PORT=4001 <br>
  MONGODB_URI=DB_CNN=mongodb+srv://lumon_user:YuvKaTd1VRpCGdHp@projectlumon.rtztauj.mongodb.net/lumon_toDoList** o la URI de conexión a su base de datos de MongoDB 
  <br><br>
La variable PORT indica el puerto en el que se ejecutará el servidor de Express. La variable MONGODB_URI contiene la URI de conexión a la base de datos de MongoDB. Si está utilizando MongoDB Atlas, puede encontrar la URI de conexión en el panel de control de su clúster. <br>
5. Ejecutar el siguiente comando para iniciar el servidor de Express: <br>
    **npm start** <br>
