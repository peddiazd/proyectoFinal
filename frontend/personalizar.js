// personalizar.js
// Agente: Hormiga
// Rol: Integrador del sistema
// Descripcion: Maneja la logica de la pagina de personalizacion.
// Permite seleccionar tipo de taza, subir imagen y enviar pedido por WhatsApp.

// ── SELECCION DE TAZA ────────────────────────────────────
const tazaOptions = document.querySelectorAll('.taza-option');
let tipoSeleccionado = 'Estandar 11oz';

tazaOptions.forEach(option => {
    option.addEventListener('click', () => {
        tazaOptions.forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        tipoSeleccionado = option.dataset.tipo;
    });
});

// ── SUBIDA DE IMAGEN ─────────────────────────────────────
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const uploadPreview = document.getElementById('uploadPreview');
const previewImg = document.getElementById('previewImg');
const removeImg = document.getElementById('removeImg');

uploadArea.addEventListener('click', () => fileInput.click());

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#2d0052';
    uploadArea.style.background = '#f9f0ff';
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '#ede0f5';
    uploadArea.style.background = 'white';
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) mostrarPreview(file);
});

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) mostrarPreview(file);
});

function mostrarPreview(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        previewImg.src = e.target.result;
        uploadArea.style.display = 'none';
        uploadPreview.style.display = 'flex';
    };
    reader.readAsDataURL(file);
}

removeImg.addEventListener('click', () => {
    previewImg.src = '';
    fileInput.value = '';
    uploadArea.style.display = 'flex';
    uploadPreview.style.display = 'none';
});

// ── ENVIAR PEDIDO POR WHATSAPP ───────────────────────────
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    const nombre = document.getElementById('nombreCliente').value.trim();
    const texto = document.getElementById('textoTaza').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    if (!nombre) {
        alert('Por favor escribe tu nombre antes de enviar.');
        return;
    }

    const mensaje = `Hola LuminPrint! 👋 Quiero hacer un pedido personalizado:

👤 Nombre: ${nombre}
☕ Tipo de taza: ${tipoSeleccionado}
✍️ Texto: ${texto || 'Sin texto'}
📝 Descripcion: ${descripcion || 'Sin descripcion adicional'}
🖼️ Imagen: ${fileInput.files[0] ? 'Si, la tengo lista para enviar' : 'No incluye imagen'}

Por favor indicame los siguientes pasos!`;

    const whatsapp = `https://wa.me/573100000000?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsapp, '_blank');
});