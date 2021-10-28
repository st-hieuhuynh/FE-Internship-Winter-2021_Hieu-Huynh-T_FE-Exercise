import CartStore from "./CartStore.js";
class Cart {
	static get productList() {
		return CartStore.readCartStorage() || [];
	}
	static addProductToCart = (product) => {
		let newCart = [
			...this.productList,
			{ productDetail: product, quantity: 1 },
		];
		this._productList = newCart;
		CartStore.saveToStorage(newCart);
	};
	static removeProductFromCart = (id) => {
		let newCart = [...this.productList];
		newCart = newCart.filter((ele) => ele.productDetail._id !== id);
		CartStore.saveToStorage(newCart);
	};
	static increaseProductQuantity = (id) => {
		console.log(id);
		let newCart = this.productList.map((product) => {
			return product.productDetail._id === id
				? {
						productDetail: product.productDetail,
						quantity: (product.quantity += 1),
				  }
				: product;
		});
		CartStore.saveToStorage(newCart);
	};
	static decreaseProductQuantity = (id) => {
		CartStore.saveToStorage(
			this.productList.map((product) => {
				return product.productDetail._id === id
					? {
							productDetail: product.productDetail,
							quantity: (product.quantity -= 1),
					  }
					: product;
			})
		);
	};
	static renderItem = (product) => {
		const _productDetail = product.productDetail;
		// trow
		const tRow = document.createElement("tr");
		tRow.className = "cart-product";
		// ====Info product ====
		const $infoProduct = `
		<td class="cart-product-info">
		<img class="cart-product-image" src="${_productDetail._image}" alt="${_productDetail._name}" />
		<h4 class="cart-product-title">
		${_productDetail._name} <span class="cart-product-id">${_productDetail._id}</span>
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
			this.decreaseProductQuantity(_productDetail._id);
			$qtyText.innerText = Number.parseInt($qtyText.innerText) - 1;
		};
		// button increase qty
		const $increaseBtn = document.createElement("button");
		$increaseBtn.innerHTML = "+";
		$increaseBtn.onclick = () => {
			this.increaseProductQuantity(_productDetail._id);
			$qtyText.innerText = Number.parseInt($qtyText.innerText) + 1;
		};
		// event qty
		$qtyText.addEventListener("change", () => {
			if ($qtyText.innerText <= 1) {
				$decreaseBtn.disabled = true;
			} else {
				$decreaseBtn.disabled = false;
			}
		});

		// td quantity
		const $tdQty = document.createElement("td");
		const $divQty = document.createElement("div");

		$divQty.className = "cart-product-qty flex f-center-x justify-center gap-m";
		$divQty.append($decreaseBtn, $qtyText, $increaseBtn);
		$tdQty.append($divQty);
		// ==== Price ====
		const $tdPrice = document.createElement("td");
		$tdPrice.className = "cart-product-price";
		$tdPrice.innerHTML = `<span>$${_productDetail._price}</span>`;
		// ==== Remove Product ====
		// button rm
		const $removeBtn = document.createElement("button");
		$removeBtn.innerHTML = "&#10005";
		$removeBtn.className = "cart-product-remover";
		$removeBtn.onclick = () => {
			tRow.parentNode.removeChild(tRow);
			this.removeProductFromCart(_productDetail._id);
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
