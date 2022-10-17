class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
            <h3>${this.title}</h3>
            <p>${this.price}</p>
            <button>Купить</button>
            </div>`;
    }
};

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    };
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    getAllPrice() {
        let allPrice = null;
        this.goods.forEach(item => {

            allPrice += item.price

        });
        return allPrice;
    }

};

const list = new GoodsList();
list.fetchGoods();
list.render();
list.getAllPrice();

class productBasket {
    constructor(productList) {
        this.productList = productCard;
    }
    renderBasket() {

    }

};

class productCard {
    constructor(price, count, img, title) {
        this.price = price
        this.count = count
        this.img = img
        this.title = title
    }
    renderProduct() {

    }
    renderProductList() {

    }
};

let text = "фффффф 'фффффффф' aren't"
console.log(text);
const regexp = /'/g;
const regexp2 = /aren"t/g
text = text.replace(regexp, '"')
text = text.replace(regexp2, "aren't")
console.log(text);
