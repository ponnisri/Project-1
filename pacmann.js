var pos = 0;
let pageWidth = window.innerWidth;

const pacArray = [
  ["PacMan1.png", "PacMan2.png"],  // facing right
  ["PacMan3.png", "PacMan4.png"],  // facing left
];

var direction = 0;
var focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;

  // Change mouth open/close
  focus = (focus + 1) % 2;

  // Check if PacMan hits page bounds
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);

  // Update image
  img.src = pacArray[direction][focus];

  // Move PacMan left or right
  if (direction) {
    pos -= 20;
  } else {
    pos += 20;
  }

  img.style.left = pos + "px";
}

// Run the function every 200ms
setInterval(Run, 200);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (pos + imgWidth > pageWidth) direction = 1; // hit right wall
  if (pos < 0) direction = 0; // hit left wall
  return direction;
}