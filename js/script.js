import CartStore from "./CartStore.js";
import Product from "./Product.js";
import ProductData from "./data.js";

console.log(ProductData);

let productSection = document.querySelector(
	".selected-product .container .row"
);
ProductData.forEach((element) => {
	let product = new Product(element);
	// console.log(product.render());
	let li = document.createElement("li");
	li.className = "col-3";
	li.appendChild(product.render());
	productSection.appendChild(li);
});
