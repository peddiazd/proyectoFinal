// chatbot.js
// Agente: Hormiga
// Rol: Integrador del sistema
// Descripción: Conecta el frontend con el servidor Flask.
// Captura el mensaje del usuario, lo envía al árbol BST
// y muestra la respuesta en la ventana del chat.

// ── ELEMENTOS DEL DOM ────────────────────────────────────
const chatToggle  = document.getElementById('chatToggle');
const chatWindow  = document.getElementById('chatWindow');
const chatClose   = document.getElementById('chatClose');
const chatInput   = document.getElementById('chatInput');
const chatSend    = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');
const openChat    = document.getElementById('openChat');

// ── ABRIR Y CERRAR EL CHAT ───────────────────────────────
chatToggle.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
});

chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('open');
});

// Botón "Chatear ahora" en contacto.html
if (openChat) {
    openChat.addEventListener('click', () => {
        chatWindow.classList.add('open');
        chatInput.focus();
    });
}

// ── AGREGAR MENSAJE AL CHAT ──────────────────────────────
// tipo: 'user' o 'bot'
function agregarMensaje(texto, tipo) {
    const msg = document.createElement('div');
    msg.classList.add('msg', tipo);

    const bubble = document.createElement('div');
    bubble.classList.add('msg-bubble');
    bubble.innerText = texto;

    msg.appendChild(bubble);
    chatMessages.appendChild(msg);

    // Scroll automático al último mensaje
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ── INDICADOR DE ESCRITURA ───────────────────────────────
function mostrarEscribiendo() {
    const msg = document.createElement('div');
    msg.classList.add('msg', 'bot');
    msg.id = 'typing';

    const bubble = document.createElement('div');
    bubble.classList.add('msg-bubble');
    bubble.innerText = '...';

    msg.appendChild(bubble);
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function quitarEscribiendo() {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
}

// ── ENVIAR MENSAJE AL SERVIDOR FLASK ────────────────────
// Llama al endpoint /chat de app.py
// que consulta el árbol BST y retorna la respuesta
async function enviarMensaje() {
    const mensaje = chatInput.value.trim();
    if (!mensaje) return;

    // Mostrar mensaje del usuario
    agregarMensaje(mensaje, 'user');
    chatInput.value = '';

    // Mostrar indicador de escritura
    mostrarEscribiendo();

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mensaje: mensaje })
        });

        const data = await response.json();
        quitarEscribiendo();
        agregarMensaje(data.respuesta, 'bot');

    } catch (error) {
        quitarEscribiendo();
        agregarMensaje(
            '😅 Ups, algo falló. Intenta de nuevo en un momento.',
            'bot'
        );
    }
}

// ── EVENTOS DE ENVÍO ─────────────────────────────────────
// Enviar con botón
chatSend.addEventListener('click', enviarMensaje);

// Enviar con tecla Enter
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') enviarMensaje();
});