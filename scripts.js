const canvas = document.querySelector("canvas");
const drawingArea = canvas.getContext("2d");

let xCoords = 150;
let yCoords = 150;

drawingArea.beginPath();
drawingArea.moveTo(xCoords, yCoords);

function draw(e) {
    let deltaX = 0;
    let deltaY = 0;

    if (e.key === "ArrowRight") {
        deltaX += 1;
    }
    else if (e.key === "ArrowLeft") {
        deltaX -= 1;
    }

    else if (e.key === "ArrowUp") {
        deltaY -= 1;
    }
    else if (e.key === "ArrowDown") {
        deltaY += 1;
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