$(document).ready(function () {
  //js
  /*const li = document.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    if (li[i].classList.contains("first")) {
      li[i].style.color = "red";
      li[i].parentElement.firstElementChild.style.textDecoration = "underline";
    }
  }*/
  //jQuery
  const li = $("li");
  let target = "";
  /*
  li.each(function (index, element) {
    if ($(element).hasClass("first")) {
      $(element).prev().css("color", "#b1a");
    }
  });
  // 1-it's better to use $(this) instead of element.
    2-put $(this) inside variable and update DOM-element outside loop (each)
  */
  li.each(function () {
    if ($(this).hasClass("first")) {
      target = $(this);
    }
  });
  target.prev().css("color", "#b1a");
});
