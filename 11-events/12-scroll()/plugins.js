/*
Syntax: $(selector).scroll()
        $(selector).scroll(function)
- Count the number of times the scroll is used for an element.
- The scroll event occurs when the user scrolls in the specified element.
- The scroll event works for all scrollable elements and the window object (browser window).
- The scroll() method triggers the scroll event, or attaches a function to run when a scroll event occurs.
 */
$(document).ready(function () {
  $(window).on("scroll", function () {
    //js
    let btn = document.querySelector("button");
    if (window.pageYOffset > 100) {
      btn.classList.add("show");
      // btn.style.opacity = "1";
    } else {
      // btn.style.opacity = "0";
      btn.classList.remove("show");
    }
    //jquery
    /*if ($(window).scrollTop() > 1000) {
      $("button").fadeIn(500);
    } else {
      $("button").fadeOut(500);
    }*/
  });
  document.querySelector("p").style.color = "red";
});
