const config = require('config')
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args))

function get(url) {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        method: 'GET',
    }
    return fetch(url, requestOptions)
        .then(handleResponse)
        .catch((err) => handleResponseError(err))
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body),
    }
    return fetch(url, requestOptions).then(handleResponse)
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(body),
    }
    return fetch(url, requestOptions).then(handleResponse)
}

function _delete(url) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(url),
    }
    return fetch(url, requestOptions).then(handleResponse)
}

function authHeader() {
    if (config.has('TOKEN_EXTERNAL_API')) {
        return { Authorization: `Bearer ${config.get('TOKEN_EXTERNAL_API')}` }
    } else {
        return {}
    }
}

function handleResponseError(error) {
    return error
}

function handleResponse(response) {
    return response.text().then((text) => {
        let data

        try {
            data = text && JSON.parse(text)
        } catch (error) {
            data = text
        }

        if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return error
        }

        return data
    })
}

module.exports = { get, post, put, _delete }
