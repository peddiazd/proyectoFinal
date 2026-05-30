# app.py
# Agente: Hormiga
# Rol: Integrador del sistema

from flask import Flask, request, jsonify, send_from_directory
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from arbol_chatbot import ArbolBST

frontend = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'frontend')

app = Flask(__name__, static_folder=frontend, static_url_path='')

arbol = ArbolBST()
arbol.construir()

@app.route('/')
def index():
    return send_from_directory(frontend, 'index.html')

@app.route('/chat', methods=['POST'])
def chat():
    datos = request.get_json()
    mensaje = datos.get('mensaje', '')
    if not mensaje.strip():
        return jsonify({'respuesta': 'Escribeme algo para poder ayudarte!'})
    respuesta = arbol.buscar(mensaje)
    return jsonify({'respuesta': respuesta})

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory(frontend, filename)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
