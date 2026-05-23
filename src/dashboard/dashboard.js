const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

const intenciones = [
    {
        intencion: 'saludo',
        palabras: ['hola', 'hey', 'buenas', 'buenos', 'saludos', 'que tal', 'que hubo', 'quiubo'],
        respuesta: 'Hola! Bienvenido a LuminPrint. Puedo ayudarte con precios, envios, personalizacion, calidad y pagos. Como te puedo ayudar? '
    },
    {
        intencion: 'precio_taza',
        palabras: ['cuanto cuesta la taza', 'cuanto vale la taza', 'cuanto es la taza', 'precio de la taza', 'valor de la taza', 'cuanto me sale la taza'],
        respuesta: 'Nuestras tazas personalizadas cuestan desde 10.000 COP hasta 20.000 COP dependiendo del diseno que elijas.'
    },
    {
        intencion: 'precio_envio',
        palabras: ['cuanto cuesta el envio', 'cuanto vale el envio', 'precio del envio', 'costo del envio', 'cuanto es el domicilio', 'valor del envio', 'cuanto cobran por enviar'],
        respuesta: 'El costo del envio depende de tu barrio en Medellin. Escribenos para cotizarlo segun tu ubicacion.'
    },
    {
        intencion: 'tiempo_entrega',
        palabras: ['cuanto tarda', 'cuanto demora', 'cuando llega', 'tiempo de entrega', 'cuantos dias tarda', 'cuantos dias demora', 'cuando me llega'],
        respuesta: 'Entregamos en 3 a 5 dias habiles en Medellin, una vez confirmado tu pago.'
    },
    {
        intencion: 'calidad',
        palabras: ['calidad', 'son buenas', 'duran mucho', 'resistente', 'material', 'ceramica', 'se daña', 'se borra', 'lavavajillas', 'microondas'],
        respuesta: 'Nuestras tazas son de ceramica de alta calidad. Resisten lavavajillas, microondas y uso diario sin que el diseno se borre.'
    },
    {
        intencion: 'personalizacion',
        palabras: ['como personalizo', 'como envio mi foto', 'que formato', 'que resolucion', 'como es el proceso', 'como funciona', 'como hago el pedido'],
        respuesta: 'Nos envias tu foto o diseno en PNG o JPG con minimo 300 DPI, lo revisamos y te confirmamos antes de imprimir.'
    },
    {
        intencion: 'devolucion',
        palabras: ['devolucion', 'devolver', 'llego danada', 'salio mal', 'tiene defecto', 'garantia', 'cambio de taza'],
        respuesta: 'Si tu taza llega danada o con defecto de impresion, la reemplazamos sin costo. Solo necesitamos foto del problema.'
    },
    {
        intencion: 'pago',
        palabras: ['como pago', 'formas de pago', 'metodo de pago', 'pago con tarjeta', 'pago en efectivo', 'nequi', 'daviplata', 'transferencia'],
        respuesta: 'Aceptamos transferencia bancaria, Nequi, Daviplata y efectivo en Medellin. El pago se confirma antes de producir.'
    },
    {
        intencion: 'despedida',
        palabras: ['gracias', 'muchas gracias', 'chao', 'hasta luego', 'bye', 'listo gracias'],
        respuesta: 'Con gusto! Cualquier duda aqui estamos. Gracias por elegir LuminPrint!'
    }
];

function buscarRespuesta(msg) {
    const msgLower = msg.toLowerCase().trim();
    for (let item of intenciones) {
        for (let palabra of item.palabras) {
            if (msgLower.includes(palabra)) {
                return item.respuesta;
            }
        }
    }
    return 'No entendi tu pregunta. Puedo ayudarte con: precio de tazas, costo de envio, tiempo de entrega, calidad, personalizacion, devoluciones y pagos.';
}

function agregarMensaje(texto, tipo) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'width:100%; overflow:hidden; margin-bottom:10px;';
    const burbuja = document.createElement('div');
    if (tipo === 'user') {
        burbuja.style.cssText = 'background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%); color: white; padding: 10px 14px; border-radius: 12px 12px 2px 12px; font-size: 0.85rem; line-height: 1.5; max-width: 78%; float: right; word-wrap: break-word;';
    } else {
        burbuja.style.cssText = 'background: rgba(255,255,255,0.15); color: white; padding: 10px 14px; border-radius: 12px 12px 12px 2px; font-size: 0.85rem; line-height: 1.5; max-width: 78%; float: left; word-wrap: break-word;';
    }
    burbuja.textContent = texto;
    wrapper.appendChild(burbuja);
    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.onclick = function() {
    const msg = userInput.value.trim();
    if (!msg) return;
    agregarMensaje(msg, 'user');
    userInput.value = '';
    setTimeout(function() {
        agregarMensaje(buscarRespuesta(msg), 'bot');
    }, 600);
};

userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendBtn.onclick();
});
