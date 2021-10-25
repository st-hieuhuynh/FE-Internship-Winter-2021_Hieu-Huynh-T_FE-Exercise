import CartStore from "./CartStore.js";
class Cart {
	constructor(products = []) {
		this._productList = CartStore.readCartStorage() || products;
		this._total = 0;
	}
	addProductToCart = (product) => {
		let newCart = [..._productList, { productDetail: product, quantity: 1 }];
		this._productList = newCart;
		CartStore.saveToStorage(newCart);
	};
	removeProductFromCart = (id) => {
		let newCart = [...this._productList];
		newCart = newCart.filter((ele) => ele.product.id !== id);
		CartStore.saveToStorage(newCart);
	};
	increaseProductQuantity = (id) => {
		let newCart = this._productList.map((product) => {
			return product.id === id
				? { id: id, quantity: (product.quantity += 1) }
				: product;
		});
		CartStore.saveToStorage(newCart);
	};
	decreaseProductQuantity = (id) => {
		CartStore.saveToStorage(
			this._productList.map((product) => {
				return product.id === id
					? { id: id, quantity: (product.quantity -= 1) }
					: product;
			})
		);
	};
	renderItem = (product) => {
		const _productDetail = product.productDetail;
		// trow
		const tRow = document.createElement("tr");
		tRow.className = "cart-product";
		// ====Info product ====
		const $infoProduct = `
		<td class="product">
		<img class="product-image" src="${_productDetail.image}" alt="${_productDetail.name}" />
		<h4 class="product-title">
		${_productDetail.name}<span class="product-id">${_productDetail.id}</span>
		</h4>
		</td>
		<td>White</td>
		<td>XL</td>`;
		// ==== Quantity ====
		// Quantity text
		const $qtyText = document.createElement("span");
		$qtyText.innerText = product.quantity;
		// button decrease qty
		const $decreaseBtn = document.createElement("button");
		$decreaseBtn.innerHTML = "-";
		$decreaseBtn.onclick = () => {
			this.decreaseProductQuantity(productDetail.id);
			$qtyText.innerText = product.quantity - 1;
		};
		// button increase qty
		const $increaseBtn = document.createElement("button");
		$increaseBtn.innerHTML = "+";
		$increaseBtn.onclick = () => {
			this.increaseProductQuantity(productDetail.id);
			$qtyText.innerText = product.quantity + 1;
		};
		// td quantity
		const $tdQty = document.createElement("td");
		$tdQty.append($decreaseBtn, $qtyText, $increaseBtn);
		// ==== Price ====
		const $tdPrice = document.createElement("td");
		tdPrice.className = "product-price";
		tdPrice.innerHTML = `<span>$${productDetail.price}</span>`;
		// ==== Remove Product ====
		// button rm
		const $removeBtn = document.createElement("button");
		$removeBtn.innerHTML = "x";
		$removeBtn.className = "cart-product-remover";
		$removeBtn.onclick = () => {
			this.removeProductFromCart(productDetail.id);
			tRow.parentNode.removeChild(tRow);
		};
		// td Remove
		const $tdRemove = document.createElement("td");
		$tdRemove.appendChild($removeBtn);
		//========== Append ==========
		tRow.innerHTML = $infoProduct;
		tRow.appendChild($tdQty);
		tRow.appendChild($tdPrice);
		tRow.appendChild($tdRemove);
		return tRow;
	};
}
export default Cart;
