let cartCount = localStorage.getItem("cartCount")|| 0;
document.getElementById("cartCount").innerText = cartCount;

function addToCart() {
    cartCount++;

    localStorage.setItem("cartCount" , cartCount);

    document.getElementById("cart-count").innerText = cartCount;

    alert("Product added to cart!");
}

const searchInput = document.querySelector(".search");
const Product = document.querySelectorAll(".card");

searchInput.addEventListener("keyup",() => {
    const value= searchInput.value.toLowerCase();
    Product.forEach(Product => {
        const name = Product.querySelector("h3").textContent.toLowerCase();
        if(name.includes(value)){
            Product.style.display = "block";
        }
        else{
            Product.Style.display = "none";
        }
    })
})

