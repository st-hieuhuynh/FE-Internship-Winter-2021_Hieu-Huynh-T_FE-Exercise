const _key = "cart";

class CartStore {
	static readCartStorage = () => {
		return JSON.parse(localStorage.getItem(_key));
	};
	static saveToStorage = (cart) => {
		let cartString = JSON.stringify(cart);
		localStorage.setItem(_key, cartString);
	};
}

export default CartStore;
