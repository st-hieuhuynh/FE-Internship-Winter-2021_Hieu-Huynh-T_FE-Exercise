var $body = document.body;
// Excercise 1
var $title = document.createElement("h2");
$title.innerHTML = "Excercise 1";
$body.append($title);
// input
var $inputAge = document.createElement("input");
$inputAge.placeholder = "nhập năm sinh";
// 1 button
var $buttonAge = document.createElement("button");
$buttonAge.innerHTML = "Tính tuổi";
// 1 paragraph
var $paragAge = document.createElement("p");
// onclick
$buttonAge.onclick = function () {
  $paragAge.innerHTML = "Tuổi của bạn là: " + (2021 - inputAge.value);
};
$body.append($inputAge);
$body.append($buttonAge);
$body.append($paragAge);
// Excercise 2
var $title1 = document.createElement("h2");
$title1.innerHTML = "Excercise 2";
$body.append($title1);
var $div = document.createElement("div");
$div.className = "plan";
var planList = [
  {
    title: "Basic",
    price: "10$ / month",
    benefit: {
      userNum: 10,
      storage: 2,
      support: "Email",
      helpCenterAccess: true,
    },
  },
  {
    title: "Pro",
    price: "30$ / month",
    benefit: {
      userNum: 100,
      storage: 20,
      support: "Priority email",
      helpCenterAccess: true,
    },
  },
];
var $planTableContent = function (plan, btnContent) {
  var $tableEle = document.createElement("table");
  $tableEle.className = "plan-table";
  var $header = document.createElement("span");
  $header.innerText = plan.title;
  $tableEle.createTHead().insertRow(0).insertCell(0).append($header);
  var $price = document.createElement("span");
  $price.innerText = plan.price;
  var $userNum = document.createElement("p");
  $userNum.innerText = plan.benefit.userNum + " users included";
  var $storage = document.createElement("p");
  $storage.innerText = plan.benefit.storage + " GB of storage";
  var $support = document.createElement("p");
  $support.innerText = plan.benefit.support + " support";
  var $helpCenterAccess = document.createElement("p");
  $helpCenterAccess.innerText = plan.benefit.helpCenterAccess
    ? "Help center access"
    : "";
  var $btn = document.createElement("button");
  $btn.innerHTML = btnContent;
  $tableEle
    .createTBody()
    .insertRow(0)
    .insertCell(0)
    .append($price, $userNum, $storage, $support, $helpCenterAccess, $btn);
  return $tableEle;
};
$div.appendChild($planTableContent(planList[0], "Get Started"));
$div.appendChild($planTableContent(planList[1], "Buy Now"));
$body.append($div);
var $btnBasic = document.querySelectorAll("button")[1];
$btnBasic.className = "btn-basic";
var $btnPro = document.querySelectorAll("button")[2];
$btnPro.className = "btn-pro";
