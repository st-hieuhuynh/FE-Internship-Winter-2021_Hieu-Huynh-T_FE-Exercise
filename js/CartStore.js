const _key = "cart";

class CartStore {
	static readCartStorage = () => {
		return JSON.parse(window.localStorage.getItem(_key));
	};
	static saveToStorage = (cart) => {
		let cartString = JSON.stringify(cart);
		window.localStorage.setItem(_key, cartString);
		let event = document.createEvent("Event");
		event.initEvent("storage", true, true);
		window.dispatchEvent(event);
	};
}

export default CartStore;
