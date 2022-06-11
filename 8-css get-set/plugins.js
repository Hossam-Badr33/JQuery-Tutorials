$(function () {
  var div1 = $("div:contains(Welcome)");
  var div2 = $("div:contains(love)");
  $(div1).addClass("first");
  $(div2).addClass("second");
  $("button").click(function () {
    console.log(div1.css("color"));
    console.log(div2.css("fontSize"));
    var input = $("input").val();
    div1.css("backgroundColor", input);
    div2.css({
      "margin-top": "50px",
      "border-radius": "30px",
    });
  });
});
