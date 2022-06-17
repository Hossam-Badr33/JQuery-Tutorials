/*
The live() method was deprecated in jQuery version 1.7, and removed in version 1.9. Use the on() method instead.
$(selector).live(event,data,function)
 */
$(document).ready(function () {
  /*
  note => if u create any eelment from jQuery event the new-eleemnt will not affected with thus event so we need to use one of these [live, delegate, on]
  we use on because live and delegate deprecated scince version 1.9
   */
  // $("p:contains('1')").click(function () {
  //   $("<p>New Paragraph</p>").insertAfter($("p:contains('1')"));
  // });
  // $("p:contains('Paragraph')").live("click", function () {
  //   $("<p>New Paragraph</p>").insertAfter($("p:contains('1')"));
  // });
  // $("p:last-of-type").live("click dblclick", The live() method was deprecated in jQuery version 1.7, and removed in version 1.9. Use the on() method instead.function () {
  //   $("<p>New Paragraph</p>").insertAfter($(this));
  //   $(this).toggleClass("add-remove");
  // });
  $("p:last-of-type").live({
    mouseenter: function () {
      $(this).width("200px").height("200px").css({
        backgroundColor: "#001",
        color: "rgb(40, 100, 45)",
      });
    },
    mouseleave: function () {},
  });
});
