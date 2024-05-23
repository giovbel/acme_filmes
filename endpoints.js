'use strict'

export async function listarUsuarios () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/usuarios'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
} 

export async function cadastrarUsuario (usuario) { //pedir autorização para usar a API
    const url = 'http://localhost:8080/v2/AcmeFilmes/usuarios'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario) //transformar o objeto em um string
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response
}


export async function atualizarUsuario (usuario){
    const url = `http://localhost:8080/v2/AcmeFilmes/usuario/${usuario.id}`
    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log (response.ok)
    return response
}


export async function deletarUsuario (id) {
    const url = `http://localhost:8080/v2/AcmeFilmes/usuario/${usuario.id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    console.log (response.ok)
    return response
}


