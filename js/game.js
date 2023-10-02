let cells = document.querySelectorAll(".game-cell");

// cells.forEach(cell => {
//     cell.addEventListener("mouseover", function () {
//         cell.style.backgroundSize = "cover";
//         cell.style.backgroundRepeat = "no-repeat";
//         cell.style.backgroundImage = "url(../resources/circle.png)";
//         cell.style.opacity = "0.3";
//     })
//     cell.addEventListener("mouseout", function () {
//         cell.style.backgroundSize = "cover";
//         cell.style.backgroundRepeat = "no-repeat";
//         cell.style.backgroundImage = "";
//         cell.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
//     })
// });

let isPlayer1turn = Math.round(Math.random());

cells.forEach(function (cell) {
	let tempElement;

	// console.log(cell.id);

	cell.addEventListener("mouseenter", function () {
		if (cell.style.backgroundImage === "") {
			tempElement = document.createElement("div");
			tempElement.className = "grid-item-before";

			tempElement.style.position = "absolute";
			tempElement.style.width = "75px";
			tempElement.style.height = "75px";
			tempElement.style.backgroundImage =
				"url(../resources/" + (isPlayer1turn ? "circle" : "cross") + ".png)";
			tempElement.style.backgroundSize = "cover";
			tempElement.style.backgroundRepeat = "no-repeat";
			tempElement.style.opacity = "0.5";

			cell.appendChild(tempElement);
		}
	});
	cell.addEventListener("mouseleave", function () {
		if (cell.style.backgroundImage === "") {
			cell.removeChild(tempElement);
		}
	});
	cell.addEventListener("click", function () {
		if (cell.style.backgroundImage === "") {
			cell.removeChild(tempElement);
			cell.style.backgroundImage =
				"url(../resources/" + (isPlayer1turn ? "circle" : "cross") + ".png)";
			cell.className += isPlayer1turn ? " circle" : " cross";
			isPlayer1turn = !isPlayer1turn;

			checkPositions(cells);
		}
	});
});

function checkPositions(cells) {
	let crossMarked = document.querySelectorAll(".cross");
	let circleMarked = document.querySelectorAll(".circle");

	let crossNumbers = []
	let circleNumbers = [];

	const WIN_CONDITIONS = [
		[1, 2, 3], [1, 4, 7],
		[1, 5, 9], [2, 5, 8],
		[3, 5, 7], [3, 6, 9],
		[4, 5, 6], [7, 8, 9],
	];

	if (!isPlayer1turn) {
		getPositions(circleMarked, circleNumbers);
		// console.log(circleNumbers);
		console.log(validatePositions(circleNumbers, WIN_CONDITIONS) ? "Circle Wins" : "Continue");
	} else {
		getPositions(crossMarked, crossNumbers);
		// console.log(crossNumbers);
		console.log(validatePositions(crossNumbers, WIN_CONDITIONS) ? "Cross Wins" : "Continue");
	}

	// console.log(crossMarked);
	// console.log(circleMarked);
}

function getPositions(turn, numbers) {
	turn.forEach(function (item) {
		let idNumber = (item.id).split("-")[1];
		if (!numbers.includes(idNumber)) {
			numbers.push(parseInt(idNumber))
		}
	})
}

function validatePositions(arr, winConditions) {
	for (const winCondition of winConditions) {
		let containsAll = true;
		for (const position of winCondition) {
			if (!arr.includes(position)) {
				containsAll = false;
				break;
			}
		}
		if (containsAll) {
			return true;
		}
	}
	return false;
}