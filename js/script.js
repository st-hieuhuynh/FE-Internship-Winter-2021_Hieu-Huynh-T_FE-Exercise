import Product from "./Product.js";
import Cart from "./Cart.js";
import ProductData from "./data.js";

let $productSection = document.querySelector(
  ".selected-product .container .row"
);
const $main = document.querySelector("main");
const $footer = document.querySelector("footer");
// ---- Restyle Header ----
const $logoImage = document.querySelector("#logo-header");
const $menuCategoryText = document
  .querySelector(".menu-category")
  .querySelectorAll(".text-primary");
const $searchBtn = document.querySelector("#search-btn");
const $userBtn = document.querySelector("#user-btn");
const $cartBtn = document.querySelector("#cart-btn");
let isMenuLight = true;
let toggleHeaderMode = () => {
  if (isMenuLight) {
    $logoImage.src = "./assets/img/Logo-dark.png";
    $searchBtn.src = "./assets/img/search-icon-dark.png";
    $userBtn.src = "./assets/img/user-icon-dark.png";
    $cartBtn.src = "./assets/img/cart-icon-dark.png";
  } else {
    $logoImage.src = "./assets/img/Logo.png";
    $searchBtn.src = "./assets/img/search-icon.png";
    $cartBtn.src = "./assets/img/cart-icon.png";
    $userBtn.src = "./assets/img/user-icon.png";
  }
  $menuCategoryText.forEach((ele) => ele.classList.toggle("text-primary"));
  isMenuLight = !isMenuLight;
};
// ---- render list product ----
let list = ProductData.map((element) => {
  let product = new Product(element);
  let $li = document.createElement("li");
  $li.className = "col-3 col-lg-3 col-md-6";
  $li.appendChild(product.render());
  return $li;
});
$productSection.append(...list);
// ---- cart button ----
const $iconsDesktop = document.getElementsByClassName("icon");
const $cartScreen = document.querySelector(".cart-screen");
const $goBackBtn = document.querySelector(".go-back");
$cartBtn.src;
const toggleCartScreen = () => {
  $cartScreen.classList.toggle("hide");
  $main.classList.toggle("hide");
  $footer.classList.toggle("hide");
  toggleHeaderMode();
};
$goBackBtn.onclick = toggleCartScreen;
// ---- cart table body handle ----
const $cartSection = document.querySelector(".cart-table-body");
const $total = document.querySelector(".total-price");
const $quantityBadge = document.querySelector(".cart-btn-badge");
const getCartItem = () => Cart.productList.map((item) => Cart.renderItem(item));
// init cart at load

// reload cart
const loadPriceAndQty = () => {
  $total.innerHTML =
    "$" +
    Cart.productList
      .reduce((prev, cur) => prev + cur.productDetail._price * cur.quantity, 0)
      .toFixed(2);
  $quantityBadge.innerHTML = Cart.productList.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );
};
window.onload = () => {
  loadPriceAndQty();
};
$cartBtn.onclick = () => {
  $cartSection.replaceChildren(...getCartItem());
  toggleCartScreen();
};
window.addEventListener("storage", () => {
  loadPriceAndQty();
});
