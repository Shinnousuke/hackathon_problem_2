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

        </div>

        <h3>₹${subtotal}</h3>

    </div>

    `;
});

document.getElementById("grandTotal").innerText = total;
document.getElementById("totalItems").innerText = totalItems;