const api = {
    endpoint: '//alin-is-selling-stuff-server.herokuapp.com/api/',
    async login(username, password) {
        const res = await fetch(this.endpoint + 'login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `user=${username}&pass=${password}`
        });

        return res.json();
    },
    async getProducts() {
        const res = await fetch(this.endpoint + 'products', {
            mode: 'cors'
        });

        return res.json();
    }
};

export default api;