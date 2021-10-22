var body = document.body;
// Excercise 1
var title = document.createElement("h2");
title.innerHTML = "<h2>Excercise 1</h2>";
body.append(title);
// 1 input
var inputAge = document.createElement("input");
inputAge.placeholder = "nhập năm sinh";
// 1 button
var buttonAge = document.createElement("button");
buttonAge.innerHTML = "Tính tuổi";
// 1 paragraph
var paragAge = document.createElement("p");
// onclick
buttonAge.onclick = function () {
	paragAge.innerHTML = "Tuổi của bạn là: " + (2021 - inputAge.value);
};
body.append(inputAge);
body.append(buttonAge);
body.append(paragAge);
// Excercise 2
var title1 = document.createElement("h2");
title1.innerHTML = "<h2>Excercise 2</h2>";
body.append(title1);
var div = document.createElement("div");
div.style.display = "flex";
div.style.flexDirection = "row";
div.style.gap = "10px";
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
var tableBasic = document.createElement("table");
tableBasic.style.textAlign = "center";
tableBasic.style.border = "1px solid #EAEBEB";
tableBasic.style.width = "20rem";
tableBasic.createTHead().insertRow(0).insertCell(0).innerHTML =
	"<span>" + planList[0].title + "</span>";
tableBasic.tHead.rows[0].cells[0].style.borderBottom = "1px solid #EAEBEB";
tableBasic.createTBody().insertRow(0).insertCell(0).innerHTML =
	"<span>" +
	planList[0].price +
	"</span>" +
	"<br>" +
	"<p>" +
	planList[0].benefit.userNum +
	" users included" +
	"<br>" +
	planList[0].benefit.storage +
	" GB of storage" +
	"<br>" +
	planList[0].benefit.support +
	" support" +
	"<br>" +
	(planList[0].benefit.helpCenterAccess ? "Help center access" : "") +
	"</p>" +
	"<button>" +
	"Get Started" +
	"</button>";
var tablePro = document.createElement("table");
tablePro.style.textAlign = "center";
tablePro.style.border = "1px solid #EAEBEB";
tablePro.style.width = "20rem";
tablePro.createTHead().insertRow(0).insertCell(0).innerHTML =
	"<span>" + planList[1].title + "</span>";
tablePro.tHead.rows[0].cells[0].style.borderBottom = "1px solid #EAEBEB";
tablePro.createTBody().insertRow(0).insertCell(0).innerHTML =
	"<span>" +
	planList[1].price +
	"</span>" +
	"<br>" +
	"<p>" +
	planList[1].benefit.userNum +
	" users included" +
	"<br>" +
	planList[1].benefit.storage +
	" GB of storage" +
	"<br>" +
	planList[1].benefit.support +
	" support" +
	"<br>" +
	(planList[1].benefit.helpCenterAccess ? "Help center access" : "") +
	"</p>" +
	"<button>" +
	"Buy Now" +
	"</button>";
div.appendChild(tableBasic);
div.appendChild(tablePro);
body.append(div);
document.querySelectorAll("span").forEach((element) => {
	element.style.fontSize = "1.5rem";
	element.style.fontWeight = "bold";
	element.style.padding = "0.5rem 0";
});

var btnBasic = document.querySelectorAll("button")[1];
btnBasic.style.backgroundColor = "transparent";
btnBasic.style.border = "1px solid #147FFA";
btnBasic.style.borderRadius = "0.5rem";
btnBasic.style.color = "#147FFA";
btnBasic.style.width = "100%";
btnBasic.style.padding = "0.5rem 0";
btnBasic.style.fontSize = "1.2rem";
var btnPro = document.querySelectorAll("button")[2];
btnPro.style.backgroundColor = "#147FFA";
btnPro.style.border = "1px solid #147FFA";
btnPro.style.borderRadius = "0.5rem";
btnPro.style.color = "#fff";
btnPro.style.width = "100%";
btnPro.style.padding = "0.5rem 0";
btnPro.style.fontSize = "1.2rem";
