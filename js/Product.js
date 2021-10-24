import CartStore from "./CartStore.js";
class Product {
	constructor(product) {
		this._id = product.id;
		this._name = product.name;
		this._price = product.price;
		this._image = product.image;
		this._discount = product.discount;
	}
	render() {
		let div = document.createElement("div");
		div.className = "product";
		div.innerHTML = `
    <img src="${this._image}" alt="${this._name}" class="product-img"/>
    <h4 class="product-title">${this._name}</h4>
    <div class="product-price">
    ${
			this._discount !== 0
				? `<span class="product-price">$${this._price}</span>`
				: `
      <span class="product-price new-price">$${
				(this._price * (100 - this._discount)) / 100
			}</span>
      <span class="product-price old-price">$${this._price}</span>
      `
		}      
    </div>
    ${
			this._discount === 0
				? ``
				: `<span class="product-promo badge">${this._discount}%</span>`
		}    
  </div>`;
		let addCartBtn = document.createElement("button");
		addCartBtn.className = " btn btn-primary";
		addCartBtn.innerHTML = "Add To Cart";
		addCartBtn.style.cssText = "display: none; position: absolute; margin: 0";

		addCartBtn.onclick = () => {
			console.log(this._id);
		};
		div.appendChild(addCartBtn);
		div.onmouseover = () => {
			addCartBtn.style.display = "block";
			addCartBtn.style.filter = "brightness(100%)";
		};
		div.onmouseout = () => {
			addCartBtn.style.display = "none";
		};
		return div;
	}
}
export default Product;
