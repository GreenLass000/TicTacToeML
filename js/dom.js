let pointCircle = document.getElementById("circle");
let pointCross = document.getElementById("cross");

let circleImage = document.createElement("img");
circleImage.src = "resources/circle.png";
circleImage.id = "circleImage";

let circleText = document.createElement("span");
circleText.textContent = "0";
circleText.id = "circleText";
circleText.style.fontSize = "64px";
circleText.style.fontFamily = "consolas";

let crossImage = document.createElement("img");
crossImage.src = "resources/cross.png";
crossImage.id = "crossImage";

let crossText = document.createElement("span");
crossText.textContent = "0";
crossText.id = "crossText";
crossText.style.fontSize = "64px";
crossText.style.fontFamily = "consolas";

pointCircle.innerHTML = "";
pointCross.innerHTML = "";

pointCircle.appendChild(circleImage);
pointCircle.appendChild(circleText);
pointCross.appendChild(crossImage);
pointCross.appendChild(crossText);