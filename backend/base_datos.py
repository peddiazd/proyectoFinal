# base_datos.py
# Agente: Castor
# Rol: Curador de la base de datos
# Descripcion: Toma las preguntas de Aguila y las convierte en pares
# clave-respuesta normalizados listos para el arbol BST.

from preguntas_faq import PREGUNTAS_FAQ

BASE_CONOCIMIENTO = [

    # ── SALUDO ────────────────────────────────────────────────
    ("ayuda",
     "👋 Hola! Bienvenido a LuminPrint. Puedes preguntarme sobre envios, pagos, personalizacion, productos o devoluciones!"),

    ("buenas",
     "👋 Hola! Bienvenido a LuminPrint. Puedes preguntarme sobre envios, pagos, personalizacion, productos o devoluciones!"),

    ("gracias",
     "😊 Con mucho gusto! Si tienes mas preguntas aqui estare. Que disfrutes tu taza! ☕"),

    ("hola",
     "👋 Hola! Bienvenido a LuminPrint. Puedes preguntarme sobre envios, pagos, personalizacion, productos o devoluciones!"),

    # ── PERSONALIZACIÓN ───────────────────────────────────────
    ("formato",
     "📁 Aceptamos imagenes en JPG o PNG. Asegurate que sea de buena calidad y listo! 🎨"),

    ("resolucion",
     "🖼️ Para que tu diseño quede increible necesitamos minimo 300 DPI. Si la imagen es pequeña o borrosa te avisamos antes de imprimir, prometido!"),

    ("texto",
     "✍️ Claro que si! Puedes combinar texto y foto en tu taza sin problema. Tu diseñas, nosotros imprimimos 🔥"),

    ("diseno",
     "🎨 Si puedes subir tu propio diseño! Solo subelo en JPG o PNG y nosotros nos encargamos del resto."),

    ("plantillas",
     "✨ Tenemos mas de 20 plantillas prediseñadas listas para personalizar. Elige la que mas te guste y ponle tu toque personal!"),

    # ── PEDIDOS ───────────────────────────────────────────────
    ("pedido",
     "🛒 Hacer tu pedido es super facil! Elige tu taza, sube tu diseño, elige como pagas y listo. En 3 a 5 dias habiles la tienes en tus manos 📦"),

    ("cancelar",
     "❌ Puedes cancelar tu pedido dentro de las primeras 2 horas despues de confirmar. Despues de ese tiempo ya estamos produciendo tu taza!"),

    ("modificar",
     "✏️ Si quieres cambiar algo en tu pedido escribenos apenas puedas! Tenemos una ventana de 2 horas antes de que entre a produccion."),

    ("produccion",
     "⏳ Tu taza tarda entre 2 y 3 dias habiles en producirse. Te avisamos cuando este lista para envio!"),

    ("confirmacion",
     "📧 Si! Apenas confirmes tu pedido te llega un correo con todos los detalles. Revisa tambien tu carpeta de spam por si acaso 😅"),

    # ── ENVÍOS ────────────────────────────────────────────────
    ("envio",
     "🚚 Para Medellin tu pedido llega en 1 a 2 dias habiles. Para el resto de Colombia entre 3 y 5 dias habiles."),

    ("cobertura",
     "🇨🇴 Enviamos a toda Colombia! No importa donde estes tu taza llega hasta donde tu estes."),

    ("costoenvio",
     "💸 El envio para Medellin cuesta $5.000 COP y para el resto del pais desde $8.000 COP."),

    ("rastreo",
     "📍 Claro! Cuando tu pedido salga te enviamos el numero de guia para que lo rastrees en tiempo real."),

    ("medellin",
     "⚡ Para Medellin hacemos envios express! En 1 dia habil tienes tu taza en la puerta de tu casa."),

    # ── PAGOS ─────────────────────────────────────────────────
    ("nequi",
     "📱 Si aceptamos Nequi y Daviplata! Son de las formas de pago mas usadas por nuestros clientes 🙌"),

    ("pago",
     "💳 Aceptamos tarjeta debito y credito, PSE, Nequi y Daviplata. Elige la que mas te quede facil!"),

    ("contraentrega",
     "🤝 Por ahora no manejamos contra entrega. Pero tenemos metodos de pago super seguros como Nequi y PSE!"),

    ("precio",
     "💰 Nuestras tazas arrancan desde $10.000 COP. El precio final depende del diseño y la personalizacion que elijas."),

    ("descuento",
     "🎁 Si! Si compras 5 o mas tazas te damos un descuento especial. Escribenos y te contamos como aplicarlo."),

    # ── DEVOLUCIONES ──────────────────────────────────────────
    ("danada",
     "😟 Ay no! Si tu taza llego dañada escribenos de inmediato con fotos y la reponemos sin ningun costo extra."),

    ("devolucion",
     "↩️ Si tu taza llego dañada o con un error nuestro, la reponemos sin costo. Solo mandanos fotos al WhatsApp!"),

    ("reclamo",
     "⏰ Tienes hasta 5 dias habiles despues de recibir tu pedido para hacer cualquier reclamo. No dejes pasar ese tiempo!"),

    ("reembolso",
     "💵 Si el error fue nuestro puedes elegir entre una taza nueva o el reembolso de tu dinero. Tu decides!"),

    # ── PRODUCTOS ─────────────────────────────────────────────
    ("durabilidad",
     "💪 El diseño se imprime por sublimacion termica asi que no se borra con el lavado normal. Dura muchisimo!"),

    ("lavavajillas",
     "✅ Si! Todas nuestras tazas son aptas para lavavajillas. El diseño esta hecho para durar mucho tiempo."),

    ("material",
     "🏺 Nuestras tazas son de ceramica de alta resistencia. Livianas, durables y con colores que no se borran."),

    ("microondas",
     "✅ Si puedes meterla al microondas sin problema! Nuestras tazas son de ceramica de alta calidad."),

    ("tamano",
     "📏 Manejamos dos tamaños: 11oz que es el estandar y 15oz para los que necesitan mas cafe ☕"),
]