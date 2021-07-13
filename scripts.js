const canvas = document.querySelector("canvas");
const drawingArea = canvas.getContext("2d");

let xCoords = 0;
let yCoords = 0;

drawingArea.beginPath();
drawingArea.moveTo(xCoords, yCoords);

function draw(e) {
    let deltaX = 0;
    let deltaY = 0;

    if (e.key === "ArrowRight") {
        deltaX += 5;
    }
    else if (e.key === "ArrowLeft") {
        deltaX -= 5;
    }

    else if (e.key === "ArrowUp") {
        deltaY -= 5;
    }
    else if (e.key === "ArrowDown") {
        deltaY += 5;
    }

    xCoords += deltaX;
    yCoords += deltaY;

    drawingArea.lineTo(xCoords, yCoords);
    drawingArea.stroke();
}

// canvas.onclick = function(e) {
//     xCoords = e.layerX;
//     yCoords = e.layerY;

//     drawingArea.moveTo(xCoords, yCoords);
// };

document.addEventListener("keydown", draw);