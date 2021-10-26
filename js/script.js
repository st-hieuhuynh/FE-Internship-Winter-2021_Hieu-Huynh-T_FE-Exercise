import Product from "./Product.js";
import Cart from "./Cart.js";
import ProductData from "./data.js";

let $productSection = document.querySelector(
	".selected-product .container .row"
);
// render list product
let list = ProductData.map((element) => {
	let product = new Product(element);
	let $li = document.createElement("li");
	$li.className = "col-3";
	$li.appendChild(product.render());
	return $li;
});
$productSection.append(...list);
// ---- cart table body handle ----
const $cartSection = document.querySelector(".cart-table-body");
const $total = $cartSection.querySelector();
const getCartItem = () => Cart.productList.map((item) => Cart.renderItem(item));
// init cart at load
$cartSection.append(...getCartItem());
// reload cart
window.addEventListener("storage", () => {
	$cartSection.replaceChildren(...getCartItem());
	console.log("change cart");
	$cartItem = getCartItem();
});
