import Product from "./Product.js";
import ProductData from "./data.js";

console.log(ProductData);

let $productSection = document.querySelector(
	".selected-product .container .row"
);
// render list product
ProductData.forEach((element) => {
	let product = new Product(element);
	let $li = document.createElement("li");
	$li.className = "col-3";
	$li.appendChild(product.render());
	$productSection.appendChild($li);
});

let cartCurrent = new Cart();
