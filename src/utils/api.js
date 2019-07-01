const api = {
    endpoint: '//alin-is-selling-stuff-server.herokuapp.com/api/',
    async login(formData) {
        const res = await fetch(this.endpoint + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode: 'cors',
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
                'token': token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData)
        });

        return res.json();
    },
    async editProduct(token, formData) {
        const res = await fetch(this.endpoint + 'products', {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'token': token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData)
        });

        return res.json();
    },
    async upload(token, formData) {
        const res = await fetch(this.endpoint + 'upload', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'token': token
            },
            body: formData
        });

        return res.json();
    },
    async deleteProduct(token, id) {
        const res = await fetch(this.endpoint + 'products', {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'token': token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `id=${id}`
        });

        return res.json();
    }
};

export default api;