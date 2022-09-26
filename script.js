const cart = {
    products: [],
    pushCartProduct(product) {
        if (!this.products.includes(product)) {
            this.products.push(product);
        } else if (this.products.includes(product)) {
            product.count++
        }
    },

    getPriceBasket() {
        sum = null;
        this.products.forEach(elem => {
            sum += elem.price * elem.count;
        })
        cart.renderCart(sum);
    },

    renderCart(sum) {
        const cartBody = document.querySelector(".cart")
        if (cart.products == 0) {
            cartBody.textContent = "Корзина пуста"
        } else {
            cartBody.textContent = "";
            this.products.forEach(product => {
                cartBody.insertAdjacentHTML("afterbegin", `
            <div class="product-cart">
                <h2 class="catalog__product-heading_cart">${product.name}</h2>
                <p><span class="catalog__product-price_cart">Цена: ${product.price}</span>
                <br>
                <span class="catalog__product-count_cart">Количество: ${product.count}</span></p>
            </div> 
        `);
            })
            cartBody.insertAdjacentHTML("beforeend", `<span class="sum"></span>`)
            let sumEl = cartBody.querySelector(".sum")
            if (cartBody.contains(sumEl)) {
                sumEl.textContent = `Всего: ${sum}`;
            }
        };
    },
};

const catalog = {
    products: [
        { name: "Shirt", price: 150, count: 1 },
        { name: "Socks", price: 50, count: 2 },
        { name: "Jacket", price: 350, count: 3 },
        { name: "Shoes", price: 250, count: 3 },
    ],
    renderCatalog() {
        const catalogBody = document.querySelector(".catalog");
        this.products.forEach(product => {
            catalogBody.insertAdjacentHTML("afterbegin", `
        <div class="product-card">
            <h2 class="catalog__product-heading">${product.name}</h2>
            <span class="catalog__product-price">${product.price}</span>
            <span class=product-price>рублей</span>
            <button class="button">Добавить в корзину</button>
        </div> 
    `);
        });
    },
    getProduct(event) {
        if (event.target.classList.contains("button")) {
            catalog.products.forEach(product => {
                if (product.name == event.target.parentElement.children[0].textContent) {
                    cart.pushCartProduct(product);
                }
            })
        }
    },
};
catalog.renderCatalog();
cart.renderCart();

document.querySelector(".catalog").addEventListener("click", event => {
    catalog.getProduct(event);
    cart.getPriceBasket();
})

