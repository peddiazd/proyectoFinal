# arbol_chatbot.py
# Agente: Pulpo
# Rol: Constructor del arbol BST
# Descripcion: Implementa desde cero las clases Nodo y ArbolBST.
# Recibe la base de datos de Castor y la organiza en un arbol
# binario de busqueda para responder las dudas del usuario.

import unicodedata
from base_datos import BASE_CONOCIMIENTO

class Nodo:
    def __init__(self, clave, respuesta):
        self.clave = clave
        self.respuesta = respuesta
        self.izquierdo = None
        self.derecho = None

class ArbolBST:
    def __init__(self):
        self.raiz = None

    def normalizar(self, texto):
        texto = texto.lower()
        texto = unicodedata.normalize('NFD', texto)
        texto = ''.join(c for c in texto if unicodedata.category(c) != 'Mn')
        return texto

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

    def buscar(self, mensaje):
        mensaje_normalizado = self.normalizar(mensaje)
        palabras = mensaje_normalizado.split()
        for palabra in palabras:
            resultado = self._buscar_rec(self.raiz, palabra)
            if resultado:
                return resultado
        resultado = self._buscar_parcial(self.raiz, mensaje_normalizado)
        if resultado:
            return resultado
        return "😅 Hmm no entendi bien tu pregunta. Puedes preguntarme sobre envios, pagos, personalizacion, productos o devoluciones!"

    def _buscar_rec(self, nodo, clave):
        if nodo is None:
            return None
        if clave == nodo.clave:
            return nodo.respuesta
        elif clave < nodo.clave:
            return self._buscar_rec(nodo.izquierdo, clave)
        else:
            return self._buscar_rec(nodo.derecho, clave)

    def _buscar_parcial(self, nodo, mensaje):
        if nodo is None:
            return None
        if nodo.clave in mensaje:
            return nodo.respuesta
        izq = self._buscar_parcial(nodo.izquierdo, mensaje)
        if izq:
            return izq
        return self._buscar_parcial(nodo.derecho, mensaje)

    def construir(self):
        for clave, respuesta in BASE_CONOCIMIENTO:
            self.insertar(clave, respuesta)