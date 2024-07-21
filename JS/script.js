document.addEventListener("DOMContentLoaded", function() {
    // Get all "Add to Cart" buttons
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    
    // Add event listener to each button
    addToCartButtons.forEach(function (button) {
    button.addEventListener("click", addToCart);
    });
    
    function addToCart(event) {
        var button = event.target;
        var productContainer = button.parentNode;
        var productTitle = productContainer.querySelector(".product-title").innerText;
        var productPrice = productContainer.querySelector(".product-price").innerText;
        
        var product = {
            title: productTitle,
            price: productPrice
        };
        
        var message = product.title + " has been added to the cart.";
        alert(message);
        }
    });
