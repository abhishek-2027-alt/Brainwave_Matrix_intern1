const products = [
    { id: 1, name: 'Smartphone', price: 299.99, image: 'images/smartphone.jpg' },
    { id: 2, name: 'Laptop', price: 799.99, image: 'images/laptop.jpg' },
    { id: 3, name: 'Headphones', price: 49.99, image: 'images/headphones.jpg' },
    { id: 4, name: 'Smartwatch', price: 199.99, image: 'images/smartwatch.jpg' }
];

let cart = [];

const productListEl = document.getElementById('product-list');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');

function renderProducts() {
    productListEl.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListEl.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    cartCountEl.textContent = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalEl.textContent = total.toFixed(2);
}

window.onload = renderProducts;
