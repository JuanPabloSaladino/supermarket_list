const app = new Vue({

    el: '#app',
    data: {
        title: 'Supermarket list',
        products: [],
        newProduct: ''
    },
    methods: {
        addNewProduct() {
            this.products.push({
                name: this.newProduct,
                status: false
            });
            this.newProduct = "";
        },
        editProduct(index) {
            this.products[index].status = true;
        },
        deleteProduct(index) {
            this.products.splice(index, 1);
        }
    }

})