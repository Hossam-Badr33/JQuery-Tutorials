/*
1-$().fadeIn(speed-ms/"slow"/"fast", backCall-function) => change opacity from 0 - 1
2-$().fadeOut(speed-ms/"slow"/"fast", backCall-function) => change opacity from 1 - 0 then => dispaly: "none"
3-$().fadeToggle(speed-ms/"slow"/"fast", backCall-function) => change opacity 2-ways
4-$().fadeTo(speed-ms/"slow"/"fast", backCall-function, opacity-value) => change opacity from 0 - certainValue
 */
$(function () {
  $("button").click(function () {
    $("div").fadeIn(2000, function () {});
    $("span").fadeOut(1000);
    $("p").fadeToggle(3000, function () {
      $("span").fadeTo(2000, 1);
    });
  });
});
