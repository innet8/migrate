

const Requests = {
    get: (url, headers) => {
        return fetch(url, {
            method: 'GET',
            headers: headers
        })
    }
}