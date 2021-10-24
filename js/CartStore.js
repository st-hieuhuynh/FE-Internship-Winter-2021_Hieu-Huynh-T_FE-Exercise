const _key = "cart";

class CartStore {
	constructor() {
		this._cart = JSON.parse(localStorage.getItem(_key)) || [];
	}
	saveToStorage = (cart) => {
		let cartString = JSON.stringify(cart);
		localStorage.setItem(_key, cartString);
	};
	addProductToCart = (id) => {
		let newCart = [...this._cart, { id: id, quantity: 1 }];
		this.saveToStorage(newCart);
	};
	removeProductFromCart = (id) => {
		let newCart = [...this._cart];
		newCart = newCart.filter((ele) => ele.id !== id);
		this.saveToStorage(newCart);
	};
	increaseProductQuantity = (id) => {
		let newCart = this._cart.map((product) =>
			product.id === id ? (product.quantity += 1) : product
		);
		this.saveToStorage(newCart);
	};
	clearCart = () => {};
}

export default CartStore;
