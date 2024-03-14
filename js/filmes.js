export async function postFilme (Filme) {
    const url = 'http://10.107.134.46:8080/v2/acmeFilmes/filme'
    const options = {
        method: 'POST'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify (Filme)
    }

    const response = await fetch(url, options)

    return response.ok
}