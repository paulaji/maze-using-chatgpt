var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var playerX = 50;
var playerY = 50;
var playerWidth = 20;
var playerHeight = 20;
var playerSpeed = 5;

var maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function drawPlayer() {
  ctx.fillStyle = "red";
  ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
}

function drawMaze() {
  var cellWidth = canvas.width / maze[0].length;
  var cellHeight = canvas.height / maze.length;
  for (var i = 0; i < maze.length; i++) {
    for (var j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 1) {
        ctx.fillStyle = "black";
        ctx.fillRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMaze();
  drawPlayer();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", function (event) {
  if (
    event.code === "ArrowLeft" &&
    maze[Math.floor(playerY / 20)][Math.floor((playerX - playerSpeed) / 20)] ===
      0
  ) {
    playerX -= playerSpeed;
  } else if (
    event.code === "ArrowRight" &&
    maze[Math.floor(playerY / 20)][
      Math.floor((playerX + playerSpeed + playerWidth) / 20)
    ] === 0
  ) {
    playerX += playerSpeed;
  } else if (
    event.code === "ArrowUp" &&
    maze[Math.floor((playerY - playerSpeed) / 20)][Math.floor(playerX / 20)] ===
      0
  ) {
    playerY -= playerSpeed;
  } else if (
    event.code === "ArrowDown" &&
    maze[Math.floor((playerY + playerSpeed + playerHeight) / 20)][
      Math.floor(playerX / 20)
    ] === 0
  ) {
    playerY += playerSpeed;
  }
});

gameLoop();
