/*
$(selector).change(function)
 */
$(document).ready(function () {
  $("input").change(function () {
    if ($("input").val().length < 5) {
      $("div.change").text("Input sooo small");
    }
  });
});
