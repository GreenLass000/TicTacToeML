let cells = document.querySelectorAll(".game-cell");
let isPlayer1turn = Math.round(Math.random());

let tempElement;

function start() {
    restartGrid();

    cells.forEach(function (cell) {
        tempElement = document.createElement("div");

        // console.log("Temp Element:", tempElement);

        cell.addEventListener("mouseenter", function () {
            if (cell.style.backgroundImage === "") {
                tempElement.className = "grid-item-before";

                tempElement.style.position = "absolute";
                tempElement.style.width = "75px";
                tempElement.style.height = "75px";
                tempElement.style.backgroundImage = "url(./resources/" + (isPlayer1turn ? "circle" : "cross") + ".png)";
                // "url(./resources/circle.png)";
                tempElement.style.backgroundSize = "cover";
                tempElement.style.backgroundRepeat = "no-repeat";
                tempElement.style.opacity = "0.5";

                cell.appendChild(tempElement);
                // console.log(cell);
            }
        });
        cell.addEventListener("mouseleave", function () {
            if (cell.style.backgroundImage === "") {
                for (let childNode of cell.childNodes) {
                    cell.removeChild(childNode);
                }
            }
        });
        cell.addEventListener("click", function () {
            if (cell.style.backgroundImage === "") {
                cell.removeChild(tempElement);
                console.log(tempElement);
                cell.style.backgroundImage = "url(./resources/" + (isPlayer1turn ? "circle" : "cross") + ".png)";
                cell.className += isPlayer1turn ? " circle" : " cross";

                checkPositions();

                isPlayer1turn = !isPlayer1turn;
            }
        });
    });
}

function checkPositions() {
    let crossMarked = document.querySelectorAll(".cross");
    let circleMarked = document.querySelectorAll(".circle");

    let crossNumbers = [];
    let circleNumbers = [];

    if (isPlayer1turn) {
        getPositions(circleMarked, circleNumbers);
        // console.log(circleNumbers);
        if (validatePositions(circleNumbers)) {
            resetGame("circle");
        }
    } else {
        getPositions(crossMarked, crossNumbers);
        // console.log(crossNumbers);
        if (validatePositions(crossNumbers)) {
            resetGame("cross");
        }
    }

    let fillCont = 0;
    cells.forEach(cell => {
        if (cell.style.backgroundImage) {
            fillCont++;
        }
    });

    if (fillCont === 9) {
        resetGame();
    }
    // console.log(crossMarked);
    // console.log(circleMarked);
}

function getPositions(turn, numbers) {
    turn.forEach(function (item) {
        let idNumber = (item.id).split("-")[1];
        // if (!numbers.includes(idNumber))
        numbers.push(parseInt(idNumber))

    })
}

function validatePositions(arr) {

    const WIN_CONDITIONS = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9],];

    for (const winCondition of WIN_CONDITIONS) {
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

function resetEvents(className = "none", hex = "orange") {
    cells.forEach(function (cell) {
        cell.classList.remove("circle", "cross");
        cell.style.backgroundImage = "";

        cell.removeEventListener('mouseenter', event_handler);
        cell.removeEventListener('mouseleave', event_handler);
        cell.removeEventListener('click', event_handler);
    });

    document.body.style.backgroundColor = hex;
    setTimeout(function () {
        document.body.style.backgroundColor = "#f0f0f0";

        if (className !== "none") {
            let text = document.getElementById(className);
            // console.log(parseInt(circleText.textContent) + 1);
            text.textContent = parseInt(text.textContent) + 1;
        }
    }, 2000);

    function event_handler(event) {
    }
}

function resetGame(winner = "none") {
    if (winner === "circle") {
        resetEvents("circleText", "rgba(254,63,63,0.4)");
        // cells.forEach(cell => {
        //     // console.log(cell)
        //     cell.style.backgroundImage = "";
        // });

    } else if (winner === "cross") {
        resetEvents("crossText", "rgba(81,169,240,0.4)");
    } else {
        resetEvents();
    }
    setTimeout(() => {
        start();
    }, 10);
}

function restartGrid() {
    cells.forEach(function (cell) {
        let itemsBefore = cell.querySelectorAll(".grid-item-before");
        itemsBefore.forEach(cellBefore => {
            cellBefore.remove();
        })
    });
    // document.querySelector("#game").innerHTML = "";
}