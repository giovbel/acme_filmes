'use strict'

export async function listarUsuarios() {
    const url = 'http://localhost:8080/v2/AcmeFilmes/usuarios';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.Usuarios;
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return null;
    }
}

//////////////FILMES///////////////////

export async function listarFilmes () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
} 
