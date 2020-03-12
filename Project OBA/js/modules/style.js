var items = document.querySelectorAll('#categoryList article a');

for (var i = 0, l = items.length; i < l; i++) {
  items[i].style.left = (50 - 115 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

  items[i].style.top = (50 + 115 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
}