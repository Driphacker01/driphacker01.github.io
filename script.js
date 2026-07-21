// =============================
// NovaCart JavaScript
// =============================

let cart = 0;

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    // Welcome message
    console.log("Welcome to NovaCart!");

    // Select all Buy buttons
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            cart++;

            alert("✅ Product added to cart!\n\nItems in cart: " + cart);

            updateCart();

        });

    });

});

// Create cart badge
function updateCart(){

    let badge = document.getElementById("cart-count");

    if(!badge){

        badge = document.createElement("span");

        badge.id = "cart-count";

        badge.style.background = "#2563eb";
        badge.style.color = "#fff";
        badge.style.padding = "6px 10px";
        badge.style.borderRadius = "20px";
        badge.style.marginLeft = "10px";
        badge.style.fontWeight = "bold";

        const logo = document.querySelector("
