/*
1-$().slideDown(speed ms, callBack-function); =>change(increase padding-top, padding-bottom then display:block;).
2-$().slideUp(speed ms, callBack-function); =>change(decrease padding-top, padding-bottom then display:none;).
2-$().slideToggle(speed ms, callBack-function); =>change 2-directions(slideDown - slideUp).
 */
$(function () {
  $("button").click(function () {
    $("#first").slideDown(4000, function () {
      $(".second").slideUp(2000);
    });
    $(".second").slideToggle(3000);
  });
});
