/*
effects:
    1-$().hide();  => hide element
    1-$().show();  => show element
    1-$().toggle();=> show/hidw element
    note all 3-effects have parameters
    $().hide.show/toggle(time ms/"slow"/"fast"[opt=>def 400ms], callback function)
 */
$(document).ready(function () {
  $("button").click(function () {
    $("p").hide(3000, callBackHide);
    $("span").hide();
  });
  $("button").dblclick(function () {
    $("p").show();
    $("span").show(4000, callBackShow);
  });
  $("button").click(function () {
    $("p").toggle(2000);
    $("span").toggle(3000, callBackToggle);
  });
});
function callBackHide() {
  $("button").css("width", "40px");
}
function callBackShow() {
  $("button").show();
}
function callBackToggle() {
  $("button").toggle();
}
