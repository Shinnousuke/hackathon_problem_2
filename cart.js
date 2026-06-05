let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cartItems");

let total = 0;
let totalItems = 0;

cart.forEach((item,index)=>{

    let subtotal = item.price * item.qty;

    total += subtotal;

    totalItems += item.qty;

    container.innerHTML += `

    <div class="cart-card">

    <img src="${item.image}">

    <div>

        <h3>${item.name}</h3>

        <p>₹${item.price}</p>

        <p>Qty: ${item.qty}</p>

        <button
            class="remove-btn"
            onclick="removeFromCart(${index})">
            Remove
        </button>

    </div>

    <h3>₹${subtotal}</h3>

</div>

    `;
});

document.getElementById("grandTotal").innerText = total;
document.getElementById("totalItems").innerText = totalItems;

function removeFromCart(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart[index].qty > 1){
        cart[index].qty--;
    }
    else{
        cart.splice(index,1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}

async function placeOrder(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Cart is empty");
        return;
    }

    const response = await fetch(
        "http://localhost:5000/place-order",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(cart)
        }
    );

    const data = await response.json();

    alert(
        "Order Placed!\n" +
        "Token Number: " +
        data.token
    );

    localStorage.removeItem("cart");

    window.location.href =
        "token.html?token=" +
        data.token;
}
