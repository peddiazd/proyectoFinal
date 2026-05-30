# arbol_chatbot.py
# Agente: Pulpo
# Rol: Constructor del árbol BST
# Descripción: Implementa desde cero las clases Nodo y ArbolBST.
# Recibe la base de datos de Castor y la organiza en un árbol
# binario de búsqueda para responder las dudas del usuario.

import unicodedata
from base_datos import BASE_CONOCIMIENTO


# ──────────────────────────────────────────────
# CLASE NODO
# Unidad básica del árbol. Cada nodo representa
# un par clave-respuesta.
# ──────────────────────────────────────────────
class Nodo:
    def __init__(self, clave, respuesta):
        self.clave = clave          # palabra clave normalizada
        self.respuesta = respuesta  # respuesta que verá el usuario
        self.izquierdo = None       # hijo izquierdo
        self.derecho = None         # hijo derecho


# ──────────────────────────────────────────────
# CLASE ARBOLBST
# Árbol Binario de Búsqueda que organiza todas
# las claves de la base de datos y permite
# buscar en O(log n).
# ──────────────────────────────────────────────
class ArbolBST:
    def __init__(self):
        self.raiz = None  # el árbol comienza vacío

    # ── NORMALIZAR ────────────────────────────
    # Convierte el mensaje del usuario en una
    # clave limpia: minúsculas, sin tildes,
    # sin caracteres especiales.
    # Ejemplo: "Lavavajillas?" → "lavavajillas"
    def normalizar(self, texto):
        texto = texto.lower()
        texto = unicodedata.normalize('NFD', texto)
        texto = ''.join(
            c for c in texto
            if unicodedata.category(c) != 'Mn'
        )
        return texto

    # ── INSERTAR ──────────────────────────────
    # Agrega un nuevo nodo al árbol.
    # Si la clave es menor va a la izquierda,
    # si es mayor va a la derecha.
    # Complejidad: O(log n)
    def insertar(self, clave, respuesta):
        nuevo = Nodo(clave, respuesta)
        if self.raiz is None:
            self.raiz = nuevo
        else:
            self._insertar_rec(self.raiz, nuevo)

    def _insertar_rec(self, nodo, nuevo):
        if nuevo.clave < nodo.clave:
            if nodo.izquierdo is None:
                nodo.izquierdo = nuevo
            else:
                self._insertar_rec(nodo.izquierdo, nuevo)
        elif nuevo.clave > nodo.clave:
            if nodo.derecho is None:
                nodo.derecho = nuevo
            else:
                self._insertar_rec(nodo.derecho, nuevo)

    # ── BUSCAR ────────────────────────────────
    # Recorre el árbol buscando una palabra clave
    # dentro del mensaje del usuario.
    # Complejidad: O(log n)
    def buscar(self, mensaje):
        palabras = self.normalizar(mensaje).split()
        for palabra in palabras:
            resultado = self._buscar_rec(self.raiz, palabra)
            if resultado:
                return resultado
        return "😅 Hmm no entendí bien tu pregunta. Puedes preguntarme sobre envíos, pagos, personalización, productos o devoluciones!"

    def _buscar_rec(self, nodo, clave):
        if nodo is None:
            return None
        if clave == nodo.clave:
            return nodo.respuesta
        elif clave < nodo.clave:
            return self._buscar_rec(nodo.izquierdo, clave)
        else:
            return self._buscar_rec(nodo.derecho, clave)

    # ── CONSTRUIR ─────────────────────────────
    # Inserta toda la base de datos en el árbol.
    # Se ejecuta una sola vez al iniciar la app.
    def construir(self):
        for clave, respuesta in BASE_CONOCIMIENTO:
            self.insertar(clave, respuesta)