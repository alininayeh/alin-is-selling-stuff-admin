const api = {
    endpoint: '//alin-is-selling-stuff-server.herokuapp.com/api/',
    async login(formData) {
        const res = await fetch(this.endpoint + 'login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData)
        });

        return res.json();
    },
    async getProducts() {
        const res = await fetch(this.endpoint + 'products', {
            mode: 'cors'
        });

        return res.json();
    },
    async addProduct(token, formData) {
        const res = await fetch(this.endpoint + 'products', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': token
            },
            body: new URLSearchParams(formData)
        });

        return res.json();
    }
};

export default api;