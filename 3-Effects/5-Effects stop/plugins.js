/*
$(selector).stop(stopAll[def false],goToEnd[false]);
    A-false, false=> stop all animations/effects and got to last animation/effect in queue[first animation/effect, second animatiom/effect, ....].
    B-true, false=> freeze animation and stop atonce.
    C-true, true=> freeze animation and stop atonce.
    d-false, true => stop animations got to last one directly
 */
$(document).ready(function () {
  $("div").animate(
    {
      top: "100px",
    },
    1000
  );
  $("div").animate(
    {
      width: "+=100px",
    },
    1000,
    function () {
      $("div").css("color", "black");
    }
  );
  $("div").fadeOut(1000);
  $("button").click(function () {
    $("div").stop(false, true);
  });
});
