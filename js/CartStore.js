class CartStore {
	key = "cart";
	constructor() {
		this._cart = JSON.parse(localStorage.getItem(key)) || [];
	}
	saveToStorage = (cart) => {
		let cartString = JSON.stringify(newCart);
		localStorage.setItem(key, cartString);
	};
	addToCart = (id) => {
		let newCart = [...this._cart, { id: product.id, quantity: 1 }];
		this.saveToStorage(newCart);
	};
	removeFromCart = (id) => {
		let newCart = [...this._cart];
		newCart = newCart.filter((ele) => ele.id !== id);
		this.saveToStorage(newCart);
	};
	updateCart = () => {
		let newCart = [...this._cart];
	};
	clearCart = () => {};
}

export default CartStore;
