# AGENTS.md — LuminPrint Chatbot

## Problemática
LuminPrint es una tienda online de tazas personalizadas en Medellín, Colombia,
dirigida a jóvenes de 13 a 25 años. El principal problema es que la tienda no
cuenta con ningún canal de atención al cliente. El 70% de los carritos en
e-commerce se abandonan por dudas sin resolver sobre calidad, envíos,
personalización y precios. Con 500 visitantes mensuales y un precio de 10.000 COP
por taza, se estiman 52 ventas perdidas mensualmente por falta de atención
inmediata. Sin nadie que responda, los clientes simplemente se van.

## Solución
Chatbot asistente integrado en la tienda online de LuminPrint, disponible 24/7,
que responde automáticamente las dudas más frecuentes sobre calidad, envíos,
personalización, devoluciones y pagos. Sin costos operativos, sin personal
adicional y sin límite de consultas simultáneas.

## Estructura de datos utilizada
Árbol Binario de Búsqueda (BST) implementado en Python puro. Cada nodo representa
una palabra clave normalizada. La búsqueda tiene complejidad O(log n).

---

## Agentes

### 🦅 Águila
**Rol:** Investigador de conocimiento
**Funciones:**
- Investigar las preguntas frecuentes reales de clientes en tiendas de productos personalizados.
- Agrupar las preguntas por categoría: personalización, pedidos, envíos, pagos, devoluciones y productos.
- Entregar la lista estructurada como insumo para el agente Castor.
- Producir el archivo `backend/preguntas_faq.py`.

---

### 🦫 Castor
**Rol:** Curador de la base de datos
**Funciones:**
- Tomar las preguntas investigadas por Águila y transformarlas en pares clave-respuesta.
- Normalizar cada clave: minúsculas, sin tildes, sin espacios.
- Redactar las respuestas en tono cercano para jóvenes de 13 a 25 años.
- Producir el archivo `backend/base_datos.py`.

---

### 🐙 Pulpo
**Rol:** Constructor del árbol BST
**Funciones:**
- Implementar desde cero las clases `Nodo` y `ArbolBST` en Python sin librerías externas.
- Insertar toda la base de datos del Castor en el árbol.
- Implementar la búsqueda por palabra clave extraída del mensaje del usuario.
- Producir el archivo `backend/arbol_chatbot.py`.

---

### 🐦 Colibrí
**Rol:** Diseñador del frontend
**Funciones:**
- Construir la página web de LuminPrint con identidad visual coherente para jóvenes.
- Diseñar e integrar el widget del chatbot en la página.
- Producir los archivos `frontend/index.html` y `frontend/style.css`.

---

### 🐜 Hormiga
**Rol:** Integrador del sistema
**Funciones:**
- Conectar el árbol BST con el frontend mediante Flask.
- Manejar las peticiones del chat y retornar respuestas del árbol.
- Producir los archivos `backend/app.py` y `frontend/chatbot.js`.

---

### 🦉 Búho
**Rol:** Documentador técnico
**Funciones:**
- Redactar el `README.md` con instrucciones claras de instalación y ejecución.
- Escribir el análisis técnico del proyecto incluyendo justificación del BST,
  complejidad algorítmica y reflexión crítica.
- Producir los archivos `README.md` y `docs/analisis_tecnico.md`.