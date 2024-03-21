export async function postFilme (Filme) {

    const url = 'http://10.107.134.17:8080/v2/acmeFilmes/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify (Filme)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function putFilme (Filme) {

    const url = `http://10.107.134.17:8080/v2/acmeFilmes/atualizarFilme/${filme.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify (Filme)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function deleteFilme (id) {

    const url = `http://10.107.134.17:8080/v2/acmeFilmes/atualizarFilme/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)

    return response.ok
}