export function request (endpoint, method, token, body) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    if (token) {
        headers.append('Authorization', `Bearer ${token}`);
    }

    return fetch(`${ process.env.NEXT_PUBLIC_API_URL }/${ endpoint }`, {
        method: method,
        headers: headers,
        body: body ? JSON.stringify(body) : null
    })
}

export function get (endpoint, token) {
    return request(endpoint, 'GET', token).then(res => res.json())
}

export function post (endpoint, token, body) {
    return request(endpoint, 'POST', token, body)
}

export function put (endpoint, token, body) {
    return request(endpoint, 'PUT', token, body)
}

export function del (endpoint, token) {
    return request(endpoint, 'DELETE', token)
}
