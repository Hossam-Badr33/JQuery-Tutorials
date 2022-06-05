/*
$().animate({styleName:"",...}, speed, callBackFunction);
 */
$(document).ready(function () {
  $("div").animate(
    //note all animatins will excute together but same tag/element animations will excuted one after one
    {
      left: "100px",
      height: "+=100px",
      lineHeight: "+=2em",
    },
    3000
  );
  $("div").animate(
    {
      width: "hide", // u can use other effects in styleName like hide/show/fadeIn/fadeOut .......
    },
    1000
  );
  $("span").animate(
    {
      marginLeft: "200px",
    },
    3000
  );
  $("span").fadeOut(1000);
});
