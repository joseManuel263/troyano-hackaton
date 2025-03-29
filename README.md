# **Dragon Bus** 🐉🚍

## **Equipo Salamandras** 🦎

Este proyecto, **Dragon Bus**, es una **mejora de la app QroBus**, desarrollada por el equipo **Salamandras** con el objetivo de optimizar la experiencia del usuario al proporcionar funciones avanzadas de navegación, pagos NFC, y más. A través de esta mejora, buscamos hacer que el transporte público sea más eficiente, accesible y conveniente para los usuarios. Este proyecto es parte del **Hackathon Troyanos** 🏆.

### **Integrantes del Equipo:**
- **Miguel Alfredo Robledo**
- **Jose Manuel Garcia Morales**
- **Erick Gael Barbosa Cuarenta**
- **Juan David Tapia Frias**

---

## **Requerimientos del Proyecto**

### **Requerimientos Funcionales** 📲

- **Información en Tiempo Real:**
  - Seguimiento GPS de los autobuses para mostrar su ubicación exacta en el mapa 📍.
  - Estimación precisa de los tiempos de llegada a las paradas ⏰.
  - Alertas sobre retrasos, desvíos o cambios en las rutas 🚨.

- **Planificación de Rutas Avanzada:**
  - Capacidad para ingresar un origen y destino y obtener múltiples opciones de rutas 🛣️.
  - Combinación de diferentes rutas de Qrobús y otros medios de transporte 🚆🚌.
  - Indicaciones paso a paso durante el viaje 📍➡️.

- **Información de Paradas y Rutas:**
  - Mapa interactivo con la ubicación de todas las paradas 🗺️.
  - Detalles de cada parada: rutas que pasan, horarios, servicios cercanos 🏢.
  - Visualización clara de las rutas en el mapa, con colores y números distintivos 🎨.

- **Gestión de la Tarjeta Qrobús:**
  - Consulta del saldo en tiempo real 💳.
  - Historial de viajes y recargas 🧾.
  - Notificaciones de saldo bajo y recordatorios de recarga ⏳.
  - Posibilidad de recargar la tarjeta directamente desde la app 💸.

- **Accesibilidad:**
  - Interacción con la interfaz de usuario 👥.
  - Opciones de texto grande, alto contraste y compatibilidad con lectores de pantalla 🖋️.
  - Información sobre la accesibilidad de las unidades y paradas 🚏.

- **Pago con NFC:**
  - Utiliza el teléfono con NFC para pagar los pasajes en el transporte público 📲💳.
  - Confirmación instantánea del pago con notificaciones en la app ✔️.
  - Registro del historial de pagos 📜.

---

### **Requerimientos No Funcionales** ⚙️

- **Experiencia del Usuario (UX/UI):**
  - Interfaz moderna y atractiva, fácil de navegar y adaptada a diferentes tamaños de pantalla 📱.
  - Diseño limpio, intuitivo y con tipografía legible 🖥️.

- **Personalización:**
  - Guardado de rutas y paradas favoritas 💖.
  - Alertas personalizadas para rutas y horarios específicos 🔔.
  - Preferencias de idioma y unidades de medida 🌍.

- **Rendimiento y Estabilidad:**
  - Aplicación rápida, fluida, con bajo consumo de datos y batería ⚡.
  - Compatibilidad con diferentes versiones de sistemas operativos 📱💻.

---

### **Tecnologías Utilizadas** 🛠️

- **Frontend:**  
  - **React**: Framework para el desarrollo de la interfaz de usuario de la aplicación 💻.
  - **Google Maps API**: Para la visualización de rutas, paradas y seguimiento GPS en tiempo real 🗺️.
  - **React Native**: Para desarrollar la aplicación móvil, compatible con iOS y Android 📱.

- **Backend:**  
  - **Node.js**: Plataforma para el desarrollo del servidor que maneja la lógica de negocio, pagos, y API de la aplicación 🔧.
  - **Express**: Framework de Node.js para facilitar la creación de las rutas del servidor 🛠️.
  - **MongoDB Atlas**: Base de datos NoSQL en la nube para almacenar información sobre usuarios, rutas, paradas, pagos y más 💾.
  - **API de pago NFC**: Para gestionar las transacciones y saldo de las tarjetas Qrobús 💳.

---

### **Instalación** ⚡

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/usuario/repositorio.git
   ```

2. **Instalar dependencias del frontend:**
   Si estás utilizando React para el frontend:
   ```bash
   cd frontend
   npm install
   ```

   Para React Native:
   ```bash
   cd frontend
   npm install
   react-native link
   ```

3. **Instalar dependencias del backend:**
   Si estás utilizando Node.js para el backend:
   ```bash
   cd backend
   npm install
   ```

4. **Configurar el entorno de desarrollo:**
   - Configura las claves de las API de Google Maps 🌍.
   - Configura las credenciales de MongoDB Atlas para conectar la base de datos 🗄️.
   - Configura el servidor de pagos (puedes usar **Stripe** o similar para pruebas 💳).

5. **Ejecutar la aplicación:**

   Para el backend:
   ```bash
   cd backend
   node server.js
   ```

   Para el frontend (React o React Native):
   ```bash
   cd frontend
   npm start
   ```

---

### **Casos de Uso** 📋

- **Caso de Éxito:** El usuario puede pagar su pasaje utilizando NFC al acercar su teléfono al lector NFC del autobús. La app confirma el pago y lo registra en el historial 📜.
  
- **Caso de Fracaso:** Si el saldo es insuficiente o NFC está desactivado, el sistema muestra un error y sugiere al usuario recargar su saldo o activar NFC ⚠️.

---

### **Estructura del Proyecto** 📂

```plaintext
.
├── backend/                  # Lógica del servidor, manejo de rutas y base de datos
│   ├── models/               # Modelos de datos de la base de datos
│   ├── routes/               # Rutas de la API
│   ├── controllers/          # Lógica de negocio
│   ├── server.js             # Configuración del servidor Node.js
│   └── .env                  # Variables de entorno (credenciales de MongoDB y otras configuraciones)
│
├── frontend/                 # Aplicación frontend (React / React Native)
│   ├── components/           # Componentes reutilizables de la UI
│   ├── services/             # Lógica de la API, pagos, etc.
│   ├── screens/              # Pantallas principales de la app
│   ├── utils/                # Funciones de utilidad
│   ├── App.js                # Componente principal de React Native
│   └── index.js              # Punto de entrada de la app
│
├── assets/                   # Imágenes y recursos
├── .env                      # Variables de entorno (API Keys)
├── package.json              # Dependencias de frontend
├── server/package.json       # Dependencias de backend
└── README.md                 # Este archivo
```

---

### **Contribución** 🤝

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

---

### **Licencia** 📜

Este proyecto está bajo la **Licencia MLH**.

---
