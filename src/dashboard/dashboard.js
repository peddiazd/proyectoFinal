const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

const faqData = [
    { palabras: ['calidad'], respuesta: 'Excelente calidad, resistente a lavavajillas y microondas. ✨' },
    { palabras: ['envio', 'envío', 'entrega'], respuesta: 'Envío a Medellín: 3-5 días hábiles. 📦' },
    { palabras: ['devolucion', 'devolución'], respuesta: 'Si llega dañada la reemplazamos sin costo. 🔄' },
    { palabras: ['precio', 'costo', 'valor'], respuesta: 'Precios desde 10.000 hasta 20.000 COP. 💰' },
    { palabras: ['personalizar', 'foto', 'diseño'], respuesta: 'Envía tu foto en PNG o JPG. 🎨' },
    { palabras: ['hola'], respuesta: 'Hola! Bienvenido a LuminPrint. 👋' }
];

function buscarRespuesta(msg) {
    for (let item of faqData) {
        for (let palabra of item.palabras) {
            if (msg.toLowerCase().includes(palabra)) return item.respuesta;
        }
    }
    return 'Pregunta sobre calidad, envío, devolución o precio. 🤔';
}

sendBtn.onclick = function() {
    const msg = userInput.value.trim();
    const div1 = document.createElement('div');
    div1.className = 'message';
    div1.innerHTML = '<div class="message-user">' + msg + '</div>';
    chatMessages.appendChild(div1);
    userInput.value = '';
    setTimeout(function() {
        const div2 = document.createElement('div');
        div2.className = 'message';
        div2.innerHTML = '<div class="message-bot">' + buscarRespuesta(msg) + '</div>';
        chatMessages.appendChild(div2);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
};

userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendBtn.onclick();
});
