# app.py
# Agente: Hormiga
# Rol: Integrador del sistema
# Descripción: Conecta el árbol BST con el frontend mediante Flask.
# Recibe el mensaje del usuario, consulta el árbol y retorna la respuesta.

from flask import Flask, request, jsonify, send_from_directory
import sys
import os

# Permite importar desde la carpeta backend
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from arbol_chatbot import ArbolBST

# ── INICIALIZAR FLASK ──────────────────────────────────────
app = Flask(__name__, static_folder='../frontend')

# ── CONSTRUIR EL ÁRBOL UNA SOLA VEZ ───────────────────────
# Al iniciar la app, se insertan todos los pares
# clave-respuesta de base_datos.py en el árbol BST.
arbol = ArbolBST()
arbol.construir()

# ── ENDPOINT: PÁGINA PRINCIPAL ────────────────────────────
# Sirve el index.html al usuario cuando entra a la tienda.
@app.route('/')
def index():
    return send_from_directory('../frontend', 'index.html')

# ── ENDPOINT: CHAT ────────────────────────────────────────
# Recibe el mensaje del usuario desde chatbot.js,
# busca en el árbol BST y retorna la respuesta en JSON.
@app.route('/chat', methods=['POST'])
def chat():
    datos = request.get_json()
    mensaje = datos.get('mensaje', '')

    if not mensaje.strip():
        return jsonify({
            'respuesta': '😅 Escríbeme algo para poder ayudarte!'
        })

    respuesta = arbol.buscar(mensaje)
    return jsonify({'respuesta': respuesta})

# ── INICIAR SERVIDOR ──────────────────────────────────────
if __name__ == '__main__':
    app.run(debug=True, port=5000)