// productos.js
// Agente: Hormiga
// Rol: Integrador del sistema
// Descripcion: Maneja la logica de categorias y productos
// en la pagina productos.html.

const PRODUCTOS = {
    anime: [
        { nombre: 'Naruto Uzumaki', emoji: '🍥', bg: 'linear-gradient(135deg,#ff6600,#ff9900)', label: 'NARUTO', badge: 'top' },
        { nombre: 'Demon Slayer', emoji: '🗡️', bg: 'linear-gradient(135deg,#0d0d0d,#1a1a40)', label: 'TANJIRO', badge: 'nuevo' },
        { nombre: 'One Piece', emoji: '⚓', bg: 'linear-gradient(135deg,#1a3a5c,#2980b9)', label: 'LUFFY', badge: '' },
        { nombre: 'Dragon Ball Z', emoji: '⚡', bg: 'linear-gradient(135deg,#1a0033,#6a0dad)', label: 'GOKU', badge: '' },
        { nombre: 'Naruto Sharingan', emoji: '🌀', bg: 'linear-gradient(135deg,#004d00,#1b5e20)', label: 'SASUKE', badge: '' },
        { nombre: 'Sakura Season', emoji: '🌸', bg: 'linear-gradient(135deg,#fce4ec,#f48fb1)', label: 'SAKURA', badge: 'nuevo', textColor: '#880e4f', borderColor: 'rgba(194,24,91,0.3)' },
    ],
    frases: [
        { nombre: 'Be yourself', emoji: '✍️', bg: 'linear-gradient(135deg,#fce4ec,#f48fb1)', label: 'BE YOU', badge: 'top', textColor: '#880e4f', borderColor: 'rgba(194,24,91,0.3)' },
        { nombre: 'Good vibes only', emoji: '☀️', bg: 'linear-gradient(135deg,#fff9c4,#ffeb3b)', label: 'VIBES', badge: '', textColor: '#f57f17', borderColor: 'rgba(245,127,23,0.3)' },
        { nombre: 'Stay weird', emoji: '🌈', bg: 'linear-gradient(135deg,#e8eaf6,#9fa8da)', label: 'WEIRD', badge: 'nuevo' },
        { nombre: 'Coffee first', emoji: '☕', bg: 'linear-gradient(135deg,#3e2723,#6d4c41)', label: 'COFFEE', badge: '' },
        { nombre: 'Manifest it', emoji: '🌙', bg: 'linear-gradient(135deg,#1a0033,#4a0080)', label: 'MANIFEST', badge: '' },
        { nombre: 'You got this', emoji: '💜', bg: 'linear-gradient(135deg,#f3e5f5,#ce93d8)', label: 'YOU GOT', badge: '', textColor: '#4a1060', borderColor: 'rgba(74,16,96,0.3)' },
    ],
    naturaleza: [
        { nombre: 'Botanical verde', emoji: '🌿', bg: 'linear-gradient(135deg,#1b5e20,#4caf50)', label: 'VERDE', badge: 'top' },
        { nombre: 'Flores silvestres', emoji: '🌸', bg: 'linear-gradient(135deg,#fce4ec,#f48fb1)', label: 'FLORES', badge: '', textColor: '#880e4f', borderColor: 'rgba(194,24,91,0.3)' },
        { nombre: 'Montanas', emoji: '🏔️', bg: 'linear-gradient(135deg,#263238,#546e7a)', label: 'MOUNTAINS', badge: '' },
        { nombre: 'Oceano', emoji: '🌊', bg: 'linear-gradient(135deg,#01579b,#0288d1)', label: 'OCEAN', badge: 'nuevo' },
        { nombre: 'Cactus', emoji: '🌵', bg: 'linear-gradient(135deg,#33691e,#7cb342)', label: 'CACTUS', badge: '' },
        { nombre: 'Amanecer', emoji: '🌅', bg: 'linear-gradient(135deg,#ff6f00,#ffa000)', label: 'DAWN', badge: '' },
    ],
    minimalista: [
        { nombre: 'Less is more', emoji: '◻️', bg: 'linear-gradient(135deg,#f5f5f5,#e0e0e0)', label: 'LESS', badge: 'top', textColor: '#333', borderColor: 'rgba(0,0,0,0.15)' },
        { nombre: 'Linea negra', emoji: '➖', bg: 'linear-gradient(135deg,#fafafa,#f5f5f5)', label: 'LINE', badge: '', textColor: '#333', borderColor: 'rgba(0,0,0,0.15)' },
        { nombre: 'Punto', emoji: '⚫', bg: 'linear-gradient(135deg,#212121,#424242)', label: 'DOT', badge: 'nuevo' },
        { nombre: 'Geometria', emoji: '🔺', bg: 'linear-gradient(135deg,#e8eaf6,#c5cae9)', label: 'GEO', badge: '', textColor: '#283593', borderColor: 'rgba(40,53,147,0.3)' },
        { nombre: 'Sin texto', emoji: '🤍', bg: 'linear-gradient(135deg,#fafafa,#eeeeee)', label: 'CLEAN', badge: '', textColor: '#333', borderColor: 'rgba(0,0,0,0.1)' },
        { nombre: 'Arco', emoji: '🌙', bg: 'linear-gradient(135deg,#1a0033,#2d0052)', label: 'ARC', badge: '' },
    ],
    aesthetic: [
        { nombre: 'Luna de medianoche', emoji: '🌙', bg: 'linear-gradient(135deg,#1a0033,#4a0080)', label: 'LUNA', badge: 'top' },
        { nombre: 'Galaxia', emoji: '🌌', bg: 'linear-gradient(135deg,#0d0d2b,#1a0066)', label: 'GALAXY', badge: '' },
        { nombre: 'Retro sunset', emoji: '🌆', bg: 'linear-gradient(135deg,#ff6f00,#e91e8c)', label: 'RETRO', badge: 'nuevo' },
        { nombre: 'Pastel dream', emoji: '🌸', bg: 'linear-gradient(135deg,#fce4ec,#e1bee7)', label: 'DREAM', badge: '', textColor: '#880e4f', borderColor: 'rgba(194,24,91,0.2)' },
        { nombre: 'Dark academia', emoji: '📚', bg: 'linear-gradient(135deg,#3e2723,#4e342e)', label: 'ACADEMIA', badge: '' },
        { nombre: 'Y2K vibes', emoji: '💿', bg: 'linear-gradient(135deg,#e8eaf6,#b39ddb)', label: 'Y2K', badge: 'nuevo', textColor: '#283593', borderColor: 'rgba(40,53,147,0.3)' },
    ],
    musica: [
        { nombre: 'Notas en negro', emoji: '🎵', bg: 'linear-gradient(135deg,#0d0d0d,#1a1a2e)', label: 'PLAY', badge: 'top' },
        { nombre: 'Vinilo', emoji: '🎶', bg: 'linear-gradient(135deg,#212121,#37474f)', label: 'VINYL', badge: '' },
        { nombre: 'Rock on', emoji: '🤘', bg: 'linear-gradient(135deg,#b71c1c,#c62828)', label: 'ROCK', badge: 'nuevo' },
        { nombre: 'Lo-fi beats', emoji: '🎧', bg: 'linear-gradient(135deg,#1a0033,#4a0080)', label: 'LO-FI', badge: '' },
        { nombre: 'Piano keys', emoji: '🎹', bg: 'linear-gradient(135deg,#fafafa,#e0e0e0)', label: 'PIANO', badge: '', textColor: '#333', borderColor: 'rgba(0,0,0,0.15)' },
        { nombre: 'Bass drop', emoji: '🔊', bg: 'linear-gradient(135deg,#0d47a1,#1565c0)', label: 'BASS', badge: '' },
    ],
    regalos: [
        { nombre: 'Para mama', emoji: '💝', bg: 'linear-gradient(135deg,#fce4ec,#f48fb1)', label: 'MAMA', badge: 'top', textColor: '#880e4f', borderColor: 'rgba(194,24,91,0.3)' },
        { nombre: 'Para papa', emoji: '👨', bg: 'linear-gradient(135deg,#1a237e,#283593)', label: 'PAPA', badge: '' },
        { nombre: 'Cumpleanos', emoji: '🎂', bg: 'linear-gradient(135deg,#ff6f00,#ffa000)', label: 'B-DAY', badge: 'nuevo' },
        { nombre: 'San Valentin', emoji: '❤️', bg: 'linear-gradient(135deg,#c62828,#e53935)', label: 'AMOR', badge: '' },
        { nombre: 'Grado', emoji: '🎓', bg: 'linear-gradient(135deg,#1b5e20,#2e7d32)', label: 'GRADO', badge: '' },
        { nombre: 'Amistad', emoji: '🤝', bg: 'linear-gradient(135deg,#f3e5f5,#ce93d8)', label: 'BFF', badge: '', textColor: '#4a1060', borderColor: 'rgba(74,16,96,0.3)' },
    ],
    fotos: [
        { nombre: 'Tu foto favorita', emoji: '📷', bg: 'linear-gradient(135deg,#2d0052,#e91e8c)', label: 'FOTO', badge: 'top' },
        { nombre: 'Foto con mascota', emoji: '🐾', bg: 'linear-gradient(135deg,#4e342e,#6d4c41)', label: 'PET', badge: '' },
        { nombre: 'Foto de pareja', emoji: '💑', bg: 'linear-gradient(135deg,#c62828,#e53935)', label: 'PAREJA', badge: 'nuevo' },
        { nombre: 'Foto en blanco y negro', emoji: '🖤', bg: 'linear-gradient(135deg,#212121,#424242)', label: 'B&W', badge: '' },
    ],
};

function getCategoriaURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat') || 'anime';
}

function comprar(nombre) {
    const mensaje = `Hola LuminPrint! 👋 Quiero comprar:\n\n☕ Taza: ${nombre}\n\nPor favor indicame los siguientes pasos para completar mi pedido!`;
    const whatsapp = `https://wa.me/573100000000?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsapp, '_blank');
}

function renderizarProductos(categoria) {
    const grid = document.getElementById('productsGrid');
    const productos = PRODUCTOS[categoria] || PRODUCTOS['anime'];
    grid.innerHTML = '';
    productos.forEach(p => {
        const textColor = p.textColor || 'white';
        const borderColor = p.borderColor || 'rgba(255,255,255,0.4)';
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div class="product-img" style="background:${p.bg};">
                ${p.badge === 'top' ? '<span class="product-badge badge-top">Top</span>' : ''}
                ${p.badge === 'nuevo' ? '<span class="product-badge badge-new">Nuevo</span>' : ''}
                <div style="display:flex;align-items:center;justify-content:center;">
                    <div style="width:55px;height:65px;border-radius:5px 5px 9px 9px;
                                display:flex;align-items:center;justify-content:center;
                                flex-direction:column;gap:3px;
                                border:1.5px solid ${borderColor};
                                background:rgba(0,0,0,0.15);position:relative;">
                        <div style="position:absolute;right:-11px;top:13px;width:11px;height:20px;
                                    border:1.5px solid ${borderColor};border-left:none;
                                    border-radius:0 6px 6px 0;"></div>
                        <div style="font-size:18px;">${p.emoji}</div>
                        <div style="font-size:6px;font-weight:700;color:${textColor};letter-spacing:0.5px;">
                            ${p.label}
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-body">
                <div class="product-name">${p.nombre}</div>
                <div class="product-types">
                    <span class="type-pill">Estandar</span>
                    <span class="type-pill">Magica</span>
                    <span class="type-pill">XL</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">$10.000 <span>COP</span></div>
                    <button class="buy-btn" onclick="comprar('${p.nombre}')">Comprar</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function marcarCategoriaActiva(categoria) {
    document.querySelectorAll('.cat-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.cat === categoria) {
            item.classList.add('active');
        }
    });
    const titulos = {
        anime: 'Categoria: Anime ⚡',
        frases: 'Categoria: Frases ✍️',
        naturaleza: 'Categoria: Naturaleza 🍃',
        minimalista: 'Categoria: Minimalista ◻️',
        fotos: 'Categoria: Fotos 📷',
        aesthetic: 'Categoria: Aesthetic 🌙',
        musica: 'Categoria: Musica 🎵',
        regalos: 'Categoria: Regalos 🎁',
    };
    const counts = {
        anime: 6, frases: 6, naturaleza: 6,
        minimalista: 6, fotos: 4, aesthetic: 6,
        musica: 6, regalos: 6,
    };
    document.getElementById('pageTitle').innerText = titulos[categoria] || 'Productos';
    document.getElementById('catLabel').innerText = categoria.charAt(0).toUpperCase() + categoria.slice(1);
    document.getElementById('countLabel').innerText = counts[categoria] + ' disenos';
}

const categoriaActual = getCategoriaURL();
marcarCategoriaActiva(categoriaActual);
renderizarProductos(categoriaActual);