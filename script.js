// Carousel functionality (if needed)
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to update carousel position
function updateCarousel() {
  if (carouselImages) {
    carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
  }
}

// Next Button Functionality
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });
}

// Previous Button Functionality
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });
}

// Auto Slide every 5 seconds
if (carouselImages) {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 5000);
}

// Cart functionality
const cart = []; // Array to store products in the cart
const cartCount = document.querySelector('.cart-count'); // Cart count in the navbar

// Function to update the cart count
function updateCartCount() {
  cartCount.textContent = cart.length; // Update the count with the number of items in the cart
}

// Function to add a product to the cart
function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice }); // Add product details to the cart array
  updateCartCount(); // Update the cart count in the navbar
}

// Add click event listeners to all product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card) => {
  card.addEventListener('click', () => {
    const productName = card.getAttribute('data-name'); // Get product name from the card
    const productPrice = card.getAttribute('data-price'); // Get product price from the card
    addToCart(productName, productPrice); // Add the product to the cart
    alert(`Added "${productName}" to the cart.`); // Notify the user
  });
});
