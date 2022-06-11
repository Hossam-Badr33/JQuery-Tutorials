$(document).ready(function () {
  //   $(":header").css({
  //     color: "#fa2",
  //   });
  //   $("p:first-of-type").animate(
  //     {
  //       width: "600px",
  //     },
  //     1000
  //   );
  //   $(":animated").animate(() => $(this).css("backgroundColor", "red"));
  //   $(":animated").animate({ height: "300px" }, 1000);
  //   $(":animated").css({ "background-color": "red" });
  //   $(":not(:animated)").css("color", "crimson");
  //   $("button:only-of-type").click(function () {
  //     $("h3:has('span')").css("color", "crimson");
  //     $("h3:has('.test')").css("color", "crimson");
  //   });
  // $(":empty").css({"width":"auto", height: "auto", backgroundColor: "yellow"})
  //     .text("empty")
  // $("button").click(function () {
  //     $("p:hidden, h4:hidden").animate({width:"400px"});
  //     $("p, h4").fadeToggle();
  //     $("p:visible, h4:visible").css("backgroundColor", "green");
  // });
  // $("section:visible").css("backgroundColor", "green")
  // $("button").click(function () {

  //     $(":root").css({border: "5px solid #000",});
  // });
  $(":lang(en)").css({
    color: "crimson",
  });
  $(":lang(ar)").css({
    border: "4px dotted crimson",
    width: "fit-content",
  });
});
