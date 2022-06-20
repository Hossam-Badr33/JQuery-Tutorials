/*
- The is() method checks if one of the selected elements matches the selectorElement.

Syntax:
    $(selector).is(selectorElement,function(index,element)[opt]).
    selectorElement: element or a jQuery object.
    function: Specifies a function to run for the group of selected elements
 */
$(function () {
  /*
  console.log($("p").parent().is("div")); //true =>parent of p is div
  console.log($(".test").next().is("p")); //true =>next element of ".test" is p
  console.log(
    $("p")
      .parent()
      .is(function (index, element) {
        console.log(index); //index of div
        console.log(element); //"div" or $(this)
        return "div";//true 
      })
      );
      */
  //note u can use more than selector and element
  $("span, p").click(function () {
    if ($(this).is(":contains('2'), span:last-of-type")) {
      $("p:first-of-type").css("color", "#cf2");
    }
  });
});
