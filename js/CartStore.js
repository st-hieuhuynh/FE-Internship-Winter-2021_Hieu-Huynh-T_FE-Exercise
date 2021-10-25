const _key = "cart";

class CartStore {
	static saveToStorage = (cart) => {
		let cartString = JSON.stringify(cart);
		localStorage.setItem(_key, cartString);
	};
	static addProductToCart = (id) => {
		let _cart = JSON.parse(localStorage.getItem(_key));
		let newCart = [..._cart, { id: id, quantity: 1 }];
		this.saveToStorage(newCart);
	};
	static removeProductFromCart = (id) => {
		let newCart = [...this._cart];
		newCart = newCart.filter((ele) => ele.id !== id);
		this.saveToStorage(newCart);
	};
	static increaseProductQuantity = (id) => {
		let newCart = this._cart.map((product) => {
			return product.id === id
				? { id: id, quantity: (product.quantity += 1) }
				: product;
		});
		this.saveToStorage(newCart);
	};
	static decreaseProductQuantity = (id) => {
		this.saveToStorage(
			this._cart.map((product) => {
				return product.id === id
					? { id: id, quantity: (product.quantity -= 1) }
					: product;
			})
		);
	};
	static clearCart = () => {};
}

export default CartStore;
