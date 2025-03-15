let container = document.getElementById("container");
let emptyCart = document.getElementById("emptyCart");
let totalamt = 0;

let div = document.createElement("div");
div.id = "checkout";
let checkoutBtn = document.createElement("button");
checkoutBtn.textContent = "Checkout";

let total = document.createElement("p");
total.id = "total";

let itemDiv = document.createElement("div");

const products = [
  { id: "product-1-btn", name: "Product 1", price: 29.99 },
  { id: "product-2-btn", name: "Product 2", price: 19.99 },
  { id: "product-3-btn", name: "Product 3", price: 49.99 },
];

products.forEach((product) => {
  document.getElementById(product.id).addEventListener("click", () => {
    emptyCart.remove();
    let p = document.createElement("p");
    p.textContent = `${product.name}-$${product.price}`;
    itemDiv.appendChild(p);
    container.appendChild(itemDiv);

    div.appendChild(checkoutBtn);
    container.appendChild(div);

    totalamt += product.price;
    total.textContent = `Total: $${totalamt.toFixed(2)}`;
    container.appendChild(total);
  });
});

checkoutBtn.addEventListener("click", () => {
  alert("Checkout Successful!");
  itemDiv.innerHTML = "";
  total.remove();
  div.remove();
  container.appendChild(emptyCart);
  totalamt = 0;
});
