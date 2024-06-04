'use strict'

import { listarUsuarios } from "./endpoints.js"

const email = document.getElementById("email");
const senha = document.getElementById("senha");

async function logar() {
    const usuarios = await listarUsuarios();
    if (!usuarios) {
        console.error('No users found or failed to fetch users.');
        return;
    }
    usuarios.forEach(usuario => {
        if (usuario.email === email.value && usuario.senha === senha.value) {
            window.location.assign('../home.html');
        }
    });
}

const entrar = document.getElementById("entrar");
entrar.addEventListener('click', logar);
