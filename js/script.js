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
let $cartSection = document.querySelector(".cart-table-body");
