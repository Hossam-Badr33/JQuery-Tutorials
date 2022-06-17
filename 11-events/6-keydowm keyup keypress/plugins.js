/*
 1-$(selector).keyup() => The key is released (best one)
 2-$(selector).keydown() => The key is on its way down
 3-$(selector).keypressed() => The key is pressed down
 */
$(function () {
  $("input").keyup(function () {
    $("div").text($("input").val());
  });
  $("textarea").keyup(function () {
    // $($("textarea").text()).insertAfter($("div"));
    $("div").html($("input").val() + ":<br> " + $(this).val());
  });
  console.log($("div").text());
});
