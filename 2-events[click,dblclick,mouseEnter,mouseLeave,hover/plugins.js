/* js */
/*let btn = document.querySelector("button");
let p = document.querySelector("p");
btn.onclick = function () {
  btn.style.backgroundColor = "#000";
  btn.style.color = "#462";
};
p.onmouseenter = function () {
  p.style.fontSize = "40px";
};
p.onmouseleave = function () {
  p.style.fontSize = "10px";
};
*/
/* jQuery */
$(document).ready(function () {
  /* //1-click event
    $("button").click(function () {
      $(this).css("backgroundColor", "#773");
      $(this).css("color", "#aaa");
    });
    */
  /* //2-double-click event
    $("button").dblclick(function () {
      $("p").css("fontSize", "30px");
      $("p").css("backgroundColor", "#00b");
      $("p").css("color", "white");
      $("p").css("textAlign", "center");
    });
    */
  //3-mouseenter event (function())
  $("p").mouseenter(function () {
    $("button").css("color", "red");
    $(this).css("color", "blue");
  });
  //3-mouseleave event (function())
  $("p").mouseleave(function () {
    $(this).css("color", "black");
    $("button").css("color", "black");
  });
  /*//4-hover event (function-1[mouseenter], function-2[mouseleave])
  $("button").hover(
    function () {
      $("body").css("backgroundColor", "rgb(256, 0, 0)");
    },
    function () {
      $("body").css("backgroundColor", "transparent");
    }
  );
  */
});
