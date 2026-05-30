# Análisis Técnico — LuminPrint Chatbot

**Universidad Cooperativa de Colombia**  
**Curso:** Estructuras de Datos · 2026  
**Proyecto:** Chatbot de atención al cliente para tienda de tazas personalizadas

---

## 1. Definición del problema

LuminPrint es una tienda online de tazas personalizadas en Medellín, Colombia, dirigida a jóvenes de 13 a 25 años. El principal problema es la ausencia total de un canal de atención al cliente.

El 70% de los carritos en e-commerce se abandonan por dudas sin resolver. Con 500 visitantes mensuales y un precio de $10.000 COP por taza, se estiman **52 ventas perdidas mensualmente** equivalentes a $520.000 COP por falta de atención inmediata.

Las dudas más frecuentes son:
- La taza resiste el lavavajillas?
- Qué formato de imagen necesito?
- Cuánto tarda el envío?
- Cuánto cuesta?
- Puedo cancelar mi pedido?

---

## 2. Solución propuesta

Chatbot asistente integrado en la tienda online, disponible 24/7, que responde automáticamente las dudas más frecuentes. Sin costos operativos adicionales, sin personal y sin límite de consultas simultáneas.

---

## 3. Justificación del uso del Árbol BST

### Por qué un árbol y no una lista?

| Operación | Lista Python | Árbol BST |
|-----------|-------------|-----------|
| Buscar respuesta | O(n) recorre todo | O(log n) descarta mitad |
| Insertar pregunta | O(1) | O(log n) |
| Memoria | Contigua | Dispersa por nodo |

Con una lista, si hay 30 preguntas en la base de datos, en el peor caso el sistema compara las 30 antes de encontrar la respuesta. Con el BST, en el peor caso compara log2(30) aproximadamente 5 nodos. Es 6 veces más eficiente.

### Estructura del árbol

El árbol organiza las claves alfabéticamente. Por ejemplo con las claves cancelar, envio, lavavajillas, pedido, precio:

          pedido
         /      \
      envio     precio
      /    \        \
cancelar  lavavajillas  (mayor)

Cada nodo contiene:
- clave: palabra normalizada sin tildes y en minúsculas
- respuesta: texto que verá el usuario
- izquierdo: subárbol con claves menores
- derecho: subárbol con claves mayores

---

## 4. Análisis de complejidad

### Método insertar()
- Mejor caso: O(1) árbol vacío, insertar en la raíz
- Caso promedio: O(log n) árbol balanceado
- Peor caso: O(n) árbol degenerado con datos insertados en orden

### Método buscar()
- Mejor caso: O(1) la palabra clave es la raíz
- Caso promedio: O(log n) árbol balanceado
- Peor caso: O(n) árbol degenerado

### Método normalizar()
- Siempre: O(k) donde k es la longitud del mensaje del usuario

### En la práctica
Con 30 pares clave-respuesta en la base de datos:
- Lista: hasta 30 comparaciones
- BST: hasta 5 comparaciones log2(30) aproximadamente 4.9

---

## 5. Flujo completo del sistema

Usuario escribe su pregunta en el chat
El chatbot.js captura el mensaje
Se envía al servidor Flask en app.py mediante POST a /chat
app.py llama a arbol.buscar() con el mensaje
normalizar() limpia el texto del usuario
_buscar_rec() recorre el BST comparando claves
Se retorna la respuesta encontrada
app.py responde con JSON al frontend
chatbot.js muestra la respuesta en pantalla

---

## 6. Conexión entre agentes y archivos

| Agente | Archivo | Responsabilidad |
|--------|---------|-----------------|
| Águila | preguntas_faq.py | Preguntas reales por categoría |
| Castor | base_datos.py | Pares clave-respuesta normalizados |
| Pulpo | arbol_chatbot.py | BST Nodo ArbolBST insertar buscar |
| Hormiga | app.py y chatbot.js | Flask API y conexión frontend |
| Colibrí | index.html y style.css | Interfaz web LuminPrint |
| Búho | README.md y este archivo | Documentación técnica |

---

## 7. Reflexión crítica sobre el proceso

### Qué funcionó bien
La separación por agentes permitió construir el proyecto de forma ordenada, donde cada archivo tiene una responsabilidad clara y se puede modificar sin afectar los demás.

### Limitaciones del sistema
- El BST no está autobalanceado. Si las claves se insertan en orden alfabético el árbol se degenera en una lista con O(n).
- El chatbot solo responde preguntas que contengan palabras clave exactas. No entiende lenguaje natural complejo.

### Cómo se podría mejorar
- Implementar un árbol AVL para garantizar balance y O(log n) siempre.
- Agregar sinónimos por clave para mayor cobertura de preguntas.
- Implementar retroalimentación para mejorar las respuestas con el tiempo.

### Sobre el uso de IA
La IA fue usada como colaborador técnico en cada etapa del proyecto. Cada decisión fue revisada, cuestionada y ajustada según el contexto académico. El mayor valor fue la velocidad de iteración y la capacidad de explorar múltiples enfoques antes de comprometerse con uno.

---

Universidad Cooperativa de Colombia - Estructuras de Datos - 2026
