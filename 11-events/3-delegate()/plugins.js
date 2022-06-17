/*
The live() method was deprecated in jQuery version 3.0.Use the on() method instead.
$(selector[parent]).delegate(childSelector[required],event[required],data,function[required])
note => parent not necessary direct parent you can use body/html
note => all type of events u can use one/more-event, map-events, custom-event
 */
$(document).ready(function () {
  /*
    note => if u create any eelment from jQuery event the new-eleemnt will not affected with thus event so we need to use one of these [live, delegate, on]
    we use on because live and delegate deprecated scince version 1.9
     */
  $("body").delegate(":file", "click", function () {
    $("<br/><input type='file'/>").insertAfter($(this));
  });
  $("body").delegate("p:first-of-type", "mouseover", function () {
    $(this).css({
      color: "#2f1",
      fontSize: "20px",
    });
  });
});
