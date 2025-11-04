// تحميل السلة من localStorage أو إنشاء واحدة جديدة
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// تحديث عداد السلة في النافبار
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }
}

// وظيفة لإضافة منتج للسلة
function addToCart(name, price, image) {
  // نتحقق هل المنتج مضاف قبل كده
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1; // لو المنتج مكرر نزود العدد
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }

  // نحفظ السلة بعد التعديل
  localStorage.setItem("cart", JSON.stringify(cart));

  // نحدث العداد
  updateCartCount();

  // إشعار بسيط
//   alert(`${name} added to your cart!`);
}

// تحديث العداد أول ما الصفحة تفتح
document.addEventListener("DOMContentLoaded", updateCartCount);
