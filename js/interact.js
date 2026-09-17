document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll("[data-href]");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function (e) {
      if (e.target.closest("a,button")) return;
      location.href = this.getAttribute("data-href");
    });
  }
});