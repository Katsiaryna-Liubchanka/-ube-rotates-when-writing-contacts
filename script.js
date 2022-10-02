
var rotateY = 0;
rotateX = 0;

document.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowLeft":
      rotateY -= 4;
      break;
    case "ArrowUp":
      rotateX += 4;
      break;
    case "ArrowRight":
      rotateY += 4;
      break;
    case "ArrowDown":
      rotateX -= 4;
      break;
  }
  document.querySelector(".cube").style.transform =
    'rotateY(' + rotateY + 'deg)' +
    'rotateX(' + rotateX + 'deg)';
}
