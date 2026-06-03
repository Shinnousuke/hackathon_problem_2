function openMealPage(){

    window.location.href = "meal.html";

}

function scrollToCategories(){

    document
        .getElementById("categories-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}
function addToCart(name, price, image){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === name);

    if(existingItem){
        existingItem.qty += 1;
    }
    else{
        cart.push({
            name: name,
            price: price,
            image: image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}