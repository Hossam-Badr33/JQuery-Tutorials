/*
$(selector).resize(function)
The resize event occurs when the browser window changes size.

The resize() method triggers the resize event, or attaches a function to run when a resize event occurs.
 */
$(document).ready(function () {
  //   console.log(`document-width => ${$(this).width()}`);
  //   console.log(`window-width => ${$(window).width()}`);
  //   console.log(`document-height => ${$(this).height()}`);
  //   console.log(`window-height => ${$(this).height()}`);
  //   $(window).resize(function () {
  //     console.log(`window-width => ${$(window).width()}`);
  //     console.log(`window-height => ${$(this).height()}`);
  //   });
  $(window).on("resize", function () {
    if ($(this).width() < 600) {
      $("p").addClass("original");
      $("p").text("sorry mobile version not supported");
    } else {
      $("p").removeClass("original").text("");

      //   $("p").height($(window).height() - 200);
      //   $(window).on("resize", function () {
      //     $("p").height($(window).height());
      //   });
    }
  });
});
