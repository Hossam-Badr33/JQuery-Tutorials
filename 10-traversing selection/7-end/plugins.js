/*
- The end() method in jQuery is used to end the most recent filtering operation in the current chain and returns the matched set of elements to its previous state. This method is used without any argument.

Syntax:
    operations.end()   
    This method does not accept any argument.
 */
$(function () {
  if ($("span").parent().is("p")) {
    // $("span").css("color", "blue"); //css applied on span
  }
  //   $("p").find("span").css("color", "blue"); //css applied on "p"
  //   $("p").find("span").end().css("color", "blue"); //end() will remove find-filter and css applied on all "p"
  //   $("p").find("span").first().css("color", "blue"); //css applied on first-span only
  //   $("p").find("span").first().end().css("color", "blue");//end() will remove first() method so css will applied on all (span)
  console.log($("p").find("span").last().parent().prev().end().end().text()); //end() remove prev(), end() remove parent()
  console.log($("p").find("span").last().parent().prev().text());
  $("p:first-of-type")
    .find("span")
    .css("color", "crimson")
    .end()
    .find("span")
    .css("fontWeight", "bold"); //end() here will remove find("span")
});
