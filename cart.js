 // نجيب السلة من localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    function renderCart() {
      cartContainer.innerHTML = '';
      let total = 0;

      cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartContainer.innerHTML += `
          <div class="cart-item">
            <div class="d-flex align-items-center">
              <img src="${item.image}" alt="${item.name}">
              <div class="ms-3">
                <h5>${item.name}</h5>
                <p>${item.price} EGP × ${item.quantity} = <strong>${itemTotal} EGP</strong></p>
              </div>
            </div>
            <div>
              <button onclick="decreaseQuantity(${index})">−</button>
              <button onclick="increaseQuantity(${index})">+</button>
              <button onclick="removeItem(${index})">Remove</button>
            </div>
          </div>
        `;
      });

      cartTotal.textContent = total.toFixed(2);
    }

    function increaseQuantity(index) {
      cart[index].quantity++;
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }

    function decreaseQuantity(index) {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }

    function removeItem(index) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }

    renderCart();