const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];
const renderGoodsItem = (product) => {
    return `<div class="goods-item">
        <h3 class="catalog__product-heading">${product.title}</h3>
        <p>${product.price}</p>
        <button>Купить</button>
        </div>`;
};
const renderGoodsList = (list) => {
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item)).join('');
};
renderGoodsList(goods);

//Заглушка