$(function () {
  var div = $("div");
  //u can use for same selector chain of effects/animations div/$("div").chain
  div
    .animate(
      {
        height: "+=100px",
      },
      1000
    )
    .animate(
      {
        width: "+=50px",
      },
      1000
    )
    .fadeOut(1000)
    .show(1000);
});
