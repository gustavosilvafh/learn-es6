"use strict";

function teste(x) {
  var y = 2;
  if (x > 5) console.log(x, y);
}

document.getElementById('adicionaTodo').onclick = function () {
  teste(6, 2);
};
