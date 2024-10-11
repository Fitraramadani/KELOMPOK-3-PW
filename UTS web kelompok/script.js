// script.js

document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.btn-sm');
    const cart = [];

    orderButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const card = this.closest('.card');
            const itemName = card.querySelector('.card-title').textContent;
            const itemPrice = card.querySelector('.price').textContent;
            
            cart.push({ name: itemName, price: itemPrice });
            updateCart();
        });
    });

    function updateCart() {
        const cartElement = document.getElementById('cart');
        if (!cartElement) {
            console.error('Cart element not found');
            return;
        }

        cartElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            cartElement.appendChild(li);

            const price = parseInt(item.price.replace(/\D/g,''));
            total += price;
        });

        const totalElement = document.createElement('li');
        totalElement.textContent = `Total: Rp ${total.toLocaleString()}`;
        totalElement.style.fontWeight = 'bold';
        cartElement.appendChild(totalElement);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.btn-sm');
    const cart = [];
    let total = 0;

    orderButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const card = this.closest('.card');
            const itemName = card.querySelector('.card-title').textContent;
            const itemPrice = card.querySelector('.price').textContent;
            
            cart.push({ name: itemName, price: itemPrice });
            updateCart();
        });
    });

    function updateCart() {
        const cartElement = document.getElementById('cart');
        if (!cartElement) {
            console.error('Elemen keranjang tidak ditemukan');
            return;
        }

        cartElement.innerHTML = '';
        total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            cartElement.appendChild(li);

            const price = parseInt(item.price.replace(/\D/g,''));
            total += price;
        });

        const totalElement = document.createElement('li');
        totalElement.textContent = `Total: Rp ${total.toLocaleString()}`;
        totalElement.style.fontWeight = 'bold';
        cartElement.appendChild(totalElement);

        document.getElementById('paymentTotal').textContent = `Rp ${total.toLocaleString()}`;
        
        
        const payButton = document.getElementById('payButton');
        if (payButton) {
            payButton.style.display = cart.length > 0 ? 'block' : 'none';
        }
    }

    
    const payButton = document.getElementById('payButton');
    if (payButton) {
        payButton.addEventListener('click', function() {
            const paymentMethod = document.getElementById('paymentMethod').value;
            alert(`Pembayaran sebesar Rp ${total.toLocaleString()} dengan metode ${paymentMethod} berhasil!`);
            cart.length = 0; 
            updateCart(); 
        });
    }
});
