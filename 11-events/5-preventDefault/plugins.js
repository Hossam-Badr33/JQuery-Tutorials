$(document).ready(function () {
  /* 
        1- first in js => event.preventDefault()
     */
  //   var a = document.getElementById("event");
  //   a.addEventListener("click", function (e) {
  //     e.preventDefault();
  //   });
  /*
    2- in jQuery => event.preventDefault();
                 => event.isDefaultPrevented()        check if preventDefault() was called
   */
  //   $("a").click(function (e) {
  //     e.preventDefault();
  //     $("img").css({
  //       width: "200px",
  //       height: "200px",
  //     });
  //   });
  $("a").click(function (e) {
    // e.preventDefault();
    e.isDefaultPrevented() ? console.log("prevented") : console.log("working");
  });
});
