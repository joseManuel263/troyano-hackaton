# Requerimientos del Proyecto

## Requerimientos Funcionales

### Información en Tiempo Real
- **Seguimiento GPS**: Monitoreo en tiempo real de la ubicación exacta de los autobuses en el mapa.
- **Estimación de Tiempos de Llegada**: Cálculo preciso de los tiempos de llegada a las paradas.
- **Alertas de Incidencias**: Notificaciones de retrasos, desvíos o cambios en las rutas.

### Planificación de Rutas Avanzada
- **Búsqueda de Rutas**: Capacidad para ingresar un origen y destino y obtener múltiples opciones de rutas.
- **Combinación de Rutas**: Integración de rutas de Qrobus y otros medios de transporte.
- **Indicaciones Paso a Paso**: Guía durante el viaje con instrucciones claras y fáciles de seguir.

### Información de Paradas y Rutas
- **Mapa Interactivo**: Ubicación de todas las paradas en un mapa interactivo.
- **Detalles de Paradas**: Información sobre las rutas que pasan, horarios y servicios cercanos.
- **Visualización Clara de Rutas**: Rutas en el mapa con colores y números distintivos.

### Gestión de la Tarjeta Qrobús
- **Consulta de Saldo**: Verificación del saldo en tiempo real.
- **Historial de Viajes y Recargas**: Acceso al historial completo de viajes y recargas realizadas.
- **Notificaciones de Saldo Bajo**: Alertas cuando el saldo es bajo, con recordatorios para recargar.
- **Recarga de Tarjeta**: Opción de recargar la tarjeta directamente desde la app.

### Accesibilidad
- **Interfaz de Usuario**: Opciones de texto grande, alto contraste y compatibilidad con lectores de pantalla.
- **Accesibilidad de Unidades y Paradas**: Información detallada sobre la accesibilidad de las unidades de transporte y paradas.

### Pago con NFC
- **Pagos con NFC**: Uso del teléfono con NFC para pagar los pasajes en el transporte público.
- **Compatibilidad con Tarjetas Digitales**: Capacidad de almacenar tarjetas digitales de Qrobús en la app.
- **Confirmación Instantánea de Pago**: Notificación inmediata del pago a través de la app.
- **Historial de Pagos**: Registro completo de los pagos realizados en la cuenta del usuario.

## Requerimientos No Funcionales

### Experiencia del Usuario (UX/UI)
- **Interfaz Moderna y Atractiva**: Diseño limpio, intuitivo y fácil de navegar.
- **Colores y Tipografía**: Uso adecuado de colores y tipografía que faciliten la lectura y comprensión.
- **Adaptabilidad**: Interfaz compatible con diferentes tamaños de pantalla y dispositivos.

### Personalización
- **Guardar Rutas y Paradas**: Posibilidad de guardar rutas y paradas favoritas.
- **Alertas Personalizadas**: Notificaciones personalizadas según rutas y horarios específicos.
- **Preferencias de Idioma y Unidades de Medida**: Ajustes personalizados en el idioma y unidades.

### Rendimiento y Estabilidad
- **Aplicación Rápida**: La app debe ser fluida, sin retrasos ni bloqueos.
- **Bajo Consumo de Recursos**: Optimización del uso de datos y batería.
- **Compatibilidad**: Funcionalidad en diferentes versiones de sistemas operativos.

### Autenticación y Autorización
- **Seguridad de la Autenticación**: Implementación de autenticación segura.
- **Control de Accesos**: Diferentes niveles de acceso según el tipo de usuario (pasajero, conductor, administrador).

### Protección de Datos
- **Cifrado de Datos Sensibles**: Protección de información como saldo, historial de viajes y credenciales.
- **Cumplimiento de Normativas**: Cumplimiento de normativas de protección de datos, como GDPR o equivalentes.

### Seguridad en las Transacciones
- **Métodos de Pago Seguros**: Encriptación end-to-end para asegurar los pagos.
- **Prevención de Fraudes**: Protección contra fraudes y accesos no autorizados.

### Monitoreo y Registro de Actividades
- **Registros de Actividad**: Control de sesiones y accesos a la cuenta del usuario.
- **Notificaciones de Actividad Sospechosa**: Alerta al usuario ante actividades sospechosas.

### Optimización de Recursos
- **Bajo Consumo de Batería**: Optimización del uso de la batería y datos móviles.
- **Caching Inteligente**: Reducción de carga en el backend mediante caching.

### Rendimiento
- **Tiempo de Respuesta Rápido**: Respuestas en menos de 3 segundos para consultas.
- **Precarga de Datos**: Mecanismos de precarga para mejorar la experiencia del usuario.

### Uso de Algoritmos Óptimos
- **Cálculo de Rutas Eficientes**: Algoritmos optimizados para cálculo de rutas en tiempo real.
- **Optimización de Geolocalización**: Minimización del uso del GPS para reducir el consumo de batería.

### Código Modular y Documentado
- **Estructura Limpia**: Separación clara entre frontend, backend y servicios de datos.
- **Buenas Prácticas de Desarrollo**: Uso de patrones como MVC y RESTful APIs.

### Facilidad de Actualización
- **Actualizaciones Transparentes**: Sistema de actualizaciones sin afectar la experiencia del usuario.
- **Mecanismo de Rollback**: Capacidad de revertir actualizaciones en caso de fallos.

### Escalabilidad del Sistema
- **Crecimiento Sostenible**: Capacidad de soportar un aumento de usuarios sin afectar el rendimiento.
- **Expansión a Nuevas Ciudades**: Arquitectura preparada para escalar a nuevas ciudades o sistemas de transporte.
