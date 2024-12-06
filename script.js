// carousel variables
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev-btn'); 
const nextButton = document.querySelector('.next-btn'); 

let index = 0;

/* Function for the carousel, changes the photo every 5 seconds
*/
function updateCarousel() 
{
  if (carouselImages) 
  {
    carouselImages.style.transform = 'translateX(' + (-index * 100) + '%)';
  }
}

// next button functionality, if user wants to
// see the next image manually
if (nextButton) 
{
  nextButton.addEventListener('click', function () {
    index = (index + 1) % images.length;
    updateCarousel();
  });
}

// previuos button functionality, if user wants to
// see the previous image manually
if (prevButton) 
{
  prevButton.addEventListener('click', function () {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });
}

// auto slide
if (carouselImages) 
{
  setInterval(function () {
    index = (index + 1) % images.length;
    updateCarousel();
  }, 5000);
}





// cart count variables
const cart = []; 
const cartCounter = document.querySelector('.cart-count'); 

/* function the update the cart count
*/
function updateCartCount() 
{
    cartCounter.textContent = cart.length; 
}

/* Function that adds the chosen product in the cart
*/
function addToCart(productName, productPrice) 
{
    cart.push({ name: productName, price: productPrice }); 
    updateCartCount(); 
}