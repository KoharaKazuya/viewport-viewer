// Get HUD Elements
var layoutViewportWidth   = document.querySelector('#layout-viewport-width');
var layoutViewportHeight  = document.querySelector('#layout-viewport-height');
var visualViewportWidth  = document.querySelector('#visual-viewport-width');
var visualViewportHeight = document.querySelector('#visual-viewport-height');
var visualViewportX = document.querySelector('#visual-viewport-x');
var visualViewportY = document.querySelector('#visual-viewport-y');

function update() {

  layoutViewportWidth.textContent = document.documentElement.clientWidth;
  layoutViewportHeight.textContent = document.documentElement.clientHeight;

  visualViewportWidth.textContent = window.innerWidth;
  visualViewportHeight.textContent = window.innerHeight;

  visualViewportX.textContent = window.pageXOffset;
  visualViewportY.textContent = window.pageYOffset;
}

setInterval(update, 100);
update();
