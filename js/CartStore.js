export default class CartStore {
	constructor(cart = []) {
		this._cart = cart;
		this._key = "cart";
	}
	get cart() {
		return this._cart;
	}
	set cart(cart) {
		this._cart = cart;
	}
	addToCart = (product) => {
		localStorage.getItem("");
		let newCart = [...this._card, { id: product.id, quantity: 1 }];
		let cartString = JSON.stringify(newCart);
		localStorage.setItem(this._key, cartString);
	};
}
