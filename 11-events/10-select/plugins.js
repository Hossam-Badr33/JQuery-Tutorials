/*
The select event occurs when a text is selected (marked) in a text area or a text field.
 */
$(function () {
  $("input:first-child").blur(function () {
    $(this).select(); //will select value inside input
    // $(this).select(function () {
    //   $(this).after("okkkkkk");
    // });
  });
  $("input:nth-child(2)").select(function () {
    if ($(this).val() === "Hossam") {
      $("div").text("yes it's me");
    } else {
      $(this).fadeOut(500);
      $("div").text("");
    }
  });
});
