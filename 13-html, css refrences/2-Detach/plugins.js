/*
Syntax => $(selector).detach() 
delete all text & child nodes but keeps data & events.
 */
$(document).ready(function () {
  $("button:first-of-type").click(function () {
    $("body").append($(".detach").detach());
  });
  $("button:last-of-type").click(function () {
    $("body").append($(".remove").remove());
  });
  $("p").click(function () {
    $(this).css("fontSize", "+=1px");
  });
  // console.log($(".detach").detach().text());
  // console.log($(".remove").remove().text());
  // console.log($(".copy").empty().text());
  // $(".copy").empty(); //=>remove only the content from the selected elements
  // $(".remove").remove(); //=>remove the elements and its data and events
  // $(".detach").detach(); //=>removes the selected elements, including all text and child nodes. However, it keeps data and events.
});
