$(document).ready(function () {
  /*$(selector).bind(event[required],data,function[required],map)*/
  /*we use bind : to bind one or more than one-event.
        1-$(selector).bind("event_name", function)
      */
  //   $("button").bind("click", function () {
  //     $("section:first-child").addClass("design");
  //   });
  /*more than 1 event un same function separate by space
  2-$(selector).bind("event_name1 event_name2 ...", function)
  */
  //   $("section:last-child").bind("mouseover mouseout", function () {
  //     $("section:last-child").fadeToggle(500);
  //   });
  /*more than 1 event each event different function 
    3-$(selector).bind({
        event_name: function,
        event_name: function,
    })
   */
  //   $("section:first-child").bind({
  //     mouseover: function () {
  //       $(this).addClass("design");
  //     },
  //     mouseout: function () {
  //       $(this).removeClass("design");
  //     },
  //   });
  //   $("button").bind({
  //     mouseover: function () {
  //       $(this).css("backgroundColor", "#f00");
  //     },
  //     click: function () {
  //       $("section:first-child").addClass("design");
  //     },
  //     dblclick: function () {
  //       $("section:last-child").addClass("design");
  //     },
  //   });
  /*
   4-$(selector).bind("event_name", data, function)
   */
  function myAction(e) {
    console.log(e.data.msg);
  }
  myAction;
  $("button").bind(
    "click",
    {
      msg: "you clicked me",
      name: "Hossam",
    },
    function (e) {
      $("section:first-child").text(
        e.data.msg + "and I know your name is " + e.data.name
      );
    }
  );
  /*
  6- $(selector).bind("NewEvent"=> custom event, function (e, parameters){});
  $(selector).event(function () {
    $(selector).trigger("NewEvent", [parameters])
  })
   */
  $("aside").bind("MyEvent", function (e, width, height) {
    $(this).css({ backgroundColor: "#fe1" });
    $(this).width(width);
    $(this).height(height);
  });
  $("aside").click(function () {
    $("aside").trigger("MyEvent", ["200px", "200px"]);
  });
});
