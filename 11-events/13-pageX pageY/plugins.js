/*
1- The event.pageX property returns the position of the mouse pointer, relative to the left edge of the document.
Syntax => event.pageX
2-The event.pageY property returns the position of the mouse pointer, relative to the top edge of the document.
Syntax => event.pageY
 */
$(document).ready(function () {
  $(window).mousemove(function (e) {
    $("span").html("pageX => " + e.pageX + "<br>" + " pageY => " + e.pageY);
    $(".page").fadeIn().css({
      top: e.pageY,
      left: e.pageX,
    });
  });
});
