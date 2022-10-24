const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: "",
        isVisibleCart: false,
        basket: [{ product_name: "Товаров в корзине нет", price: 0 }],
    },
    methods: {
        makeGETRequest(url, callback) {
            var xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
            xhr.open('GET', url, true);
            xhr.send();
        },
        filterGoods() {
            this.searchLine = document.querySelector(".goods-search").value.toUpperCase();

            if (this.searchLine != 0) {
                this.filteredGoods = [];
                this.goods.forEach(elem => {
                    if (elem.product_name.toUpperCase().includes(this.searchLine)) {
                        this.filteredGoods.push(elem)
                    }
                });
            } else {
                this.filteredGoods = this.goods;
            }
        },
        showBasket(event) {
            if (this.isVisibleCart) {
                event.target.textContent = "скрыть корзину"
                this.isVisibleCart = false
            } else {
                this.isVisibleCart = true
                event.target.textContent = "показать корзину"
            }
        },
    },
    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
        })
    },
});