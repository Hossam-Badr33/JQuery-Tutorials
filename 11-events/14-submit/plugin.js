/*
- The submit event occurs when a form is submitted.
- This event can only be used on <form> elements.
- The submit() method triggers the submit event, or attaches a function to run when a submit event occurs.

Syntax => $(selector).submit()
        $(selector).submit(function)
 */
$(document).ready(function () {
  //traditional click-event
  /*$(":submit").click(function (e) {
    if ($(":text").val() === "Hossam") {
      $("p").text("Your input right").fadeOut(1500);
    } else {
      $("p").text("Your input Incorrect").fadeOut(1500);
      e.preventDefault();
    }
  });*/
  //submit-event
  $("form").submit(function (e) {
    if ($(":text").val() === "Hossam") {
      alert("submitted");
    } else {
      e.preventDefault();
      $("p").text("Your input Incorrect").fadeOut(1500);
      setTimeout(function () {
        alert("submit prevented");
      }, 2000);
    }
  });
});
