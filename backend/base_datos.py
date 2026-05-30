# base_datos.py
# Agente: Castor
# Rol: Curador de la base de datos
# Descripción: Toma las preguntas de Águila y las convierte en pares
# clave-respuesta normalizados listos para el árbol BST.

from preguntas_faq import PREGUNTAS_FAQ

BASE_CONOCIMIENTO = [

    # ── PERSONALIZACIÓN ───────────────────────────────────────
    ("formato",
     "📁 ¡Buena pregunta! Acepta mos imágenes en JPG o PNG. "
     "Asegúrate que sea de buena calidad y listo! 🎨"),

    ("resolucion",
     "🖼️ Para que tu diseño quede increíble necesitamos mínimo 300 DPI. "
     "Si la imagen es pequeña o borrosa te avisamos antes de imprimir, prometido!"),

    ("texto",
     "✍️ Claro que sí! Puedes combinar texto y foto en tu taza sin problema. "
     "Tú diseñas, nosotros imprimimos 🔥"),

    ("diseno",
     "🎨 Sí puedes subir tu propio diseño! Solo súbelo en JPG o PNG "
     "y nosotros nos encargamos del resto."),

    ("plantillas",
     "✨ Tenemos más de 20 plantillas prediseñadas listas para personalizar. "
     "Elige la que más te guste y ponle tu toque personal!"),

    # ── PEDIDOS ───────────────────────────────────────────────
    ("pedido",
     "🛒 Hacer tu pedido es súper fácil! Elige tu taza, sube tu diseño, "
     "elige cómo pagas y listo. En 3 a 5 días hábiles la tienes en tus manos 📦"),

    ("cancelar",
     "❌ Puedes cancelar tu pedido dentro de las primeras 2 horas "
     "después de confirmar. Después de ese tiempo ya estamos produciendo tu taza!"),

    ("modificar",
     "✏️ Si quieres cambiar algo en tu pedido escríbenos apenas puedas! "
     "Tenemos una ventana de 2 horas antes de que entre a producción."),

    ("produccion",
     "⏳ Tu taza tarda entre 2 y 3 días hábiles en producirse. "
     "Te avisamos cuando esté lista para envío!"),

    ("confirmacion",
     "📧 Sí! Apenas confirmes tu pedido te llega un correo con todos "
     "los detalles. Revisa también tu carpeta de spam por si acaso 😅"),

    # ── ENVÍOS ────────────────────────────────────────────────
    ("envio",
     "🚚 Para Medellín tu pedido llega en 1 a 2 días hábiles. "
     "Para el resto de Colombia entre 3 y 5 días hábiles."),

    ("cobertura",
     "🇨🇴 Enviamos a toda Colombia! No importa dónde estés "
     "tu taza llega hasta donde tú estés."),

    ("costoenvio",
     "💸 El envío para Medellín cuesta $5.000 COP y para "
     "el resto del país desde $8.000 COP."),

    ("rastreo",
     "📍 Claro! Cuando tu pedido salga te enviamos el número de guía "
     "para que lo rastrees en tiempo real."),

    ("medellin",
     "⚡ Para Medellín hacemos envíos express! En 1 día hábil "
     "tienes tu taza en la puerta de tu casa."),

    # ── PAGOS ─────────────────────────────────────────────────
    ("pago",
     "💳 Aceptamos tarjeta débito y crédito, PSE, Nequi y Daviplata. "
     "Elige la que más te quede fácil!"),

    ("contraentrega",
     "🤝 Por ahora no manejamos contra entrega. "
     "Pero tenemos métodos de pago súper seguros como Nequi y PSE!"),

    ("precio",
     "💰 Nuestras tazas arrancan desde $10.000 COP. "
     "El precio final depende del diseño y la personalización que elijas."),

    ("descuento",
     "🎁 Sí! Si compras 5 o más tazas te damos un descuento especial. "
     "Escríbenos y te contamos cómo aplicarlo."),

    ("nequi",
     "📱 Sí aceptamos Nequi y Daviplata! Son de las formas de pago "
     "más usadas por nuestros clientes 🙌"),

    # ── DEVOLUCIONES ──────────────────────────────────────────
    ("devolucion",
     "↩️ Si tu taza llegó dañada o con un error nuestro, "
     "la reponemos sin costo. Solo mándanos fotos al WhatsApp!"),

    ("danada",
     "😟 Ay no! Si tu taza llegó dañada escríbenos de inmediato "
     "con fotos y la reponemos sin ningún costo extra."),

    ("reclamo",
     "⏰ Tienes hasta 5 días hábiles después de recibir tu pedido "
     "para hacer cualquier reclamo. No dejes pasar ese tiempo!"),

    ("reembolso",
     "💵 Si el error fue nuestro puedes elegir entre una taza nueva "
     "o el reembolso de tu dinero. Tú decides!"),

    # ── PRODUCTOS ─────────────────────────────────────────────
    ("lavavajillas",
     "✅ Sí! Todas nuestras tazas son aptas para lavavajillas. "
     "El diseño está hecho para durar mucho tiempo."),

    ("microondas",
     "✅ Sí puedes meterla al microondas sin problema! "
     "Nuestras tazas son de cerámica de alta calidad."),

    ("material",
     "🏺 Nuestras tazas son de cerámica de alta resistencia. "
     "Livianas, durables y con colores que no se borran."),

    ("tamano",
     "📏 Manejamos dos tamaños: 11oz que es el estándar "
     "y 15oz para los que necesitan más café ☕"),

    ("durabilidad",
     "💪 El diseño se imprime por sublimación térmica así que "
     "no se borra con el lavado normal. Dura muchísimo!"),
]