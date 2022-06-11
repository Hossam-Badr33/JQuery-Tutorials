/*
//addSelector
$(selector).addClass("className className ...");
$("selector, selector, ...").addClass("className className ...");
you can use one/many elements and add one/many classes
//removeSelector
$(selector).removeClass("className className ...");
$("selector, selector, ...").removeClass("className className ...");
you can use one/many elements and remove one/many classes
note => if u just write removeClass() without determone any class to remove it will remove all classes in elements
//toggleClass
$(selector).addClass("className className ...");
$("selector, selector, ...").toggleClass("className className ...");
you can use one/many elements and toggle one/many classes
 */
$(function () {
  var div1 = $("div:first");
  var div2 = $("div:last");
  var btn = $("button");
  var span = $("span");
  btn.click(function () {
    $("div:contains(hey), div:last").addClass("style1 style2").removeClass("hossam");
  });
  $(div1).click(function () {
    $(this).removeClass("style2");
  });
  $(div2).click(function () {
    $(this).removeClass();
  });
  span.click(function () {
    $(this).toggleClass("border");
  });
});
