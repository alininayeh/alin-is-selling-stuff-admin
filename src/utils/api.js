const api = {
    endpoint: 'http://alin-is-selling-stuff-server.herokuapp.com/api/',
    login(username, password) {
        return fetch(this.endpoint + 'login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `user=${username}&pass=${password}`
        }).then(res => res.json());
    }
};

export default api;