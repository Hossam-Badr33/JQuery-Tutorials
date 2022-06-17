/*
$(selector).on(event[required],childSelector,data,function[required],map)
note => parent not necessary direct parent you can use body/html/
note => all type of events u can use one/more-event, map-events, custom-event
 */
$(document).ready(function () {
  /*
      note => if u create any elment from jQuery event the new-element will not affected with thus event so we need to use one of these [live, delegate, on]
      we use on because live and delegate deprecated scince version 1.9
       */
  //   $("body").on("click", "div", function () {
  //     $(this).text("hi hossam").css({
  //       color: "rgb(100, 49, 150)",
  //       fontSize: "20px",
  //     });
  //   });
  //   $("html").on("mouseover mouseout", "p", function () {
  //     $(this).toggleClass("design");
  //   });
  //   $("body").on(
  //     {
  //       click: function () {
  //         $(this).css("color", "#fab");
  //       },
  //       dblclick: function () {
  //         $(this).fadeOut(500);
  //         $(this).fadeIn(1000);
  //       },
  //       hover: function () {
  //         $(this).css("transform", "translatex(30px)");
  //       },
  //     },
  //     "p"
  //   );
  $("div").on("myEvent", function (e, name, fName) {
    $(this).text(`hi ${name} how are you ${fName}`);
  });
  $("div").mouseover(function () {
    $(this).trigger("myEvent", ["hossam", "Badr"]);
  });
});
