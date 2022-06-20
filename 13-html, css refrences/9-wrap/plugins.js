/*
- The wrap() method wraps specified HTML element(s) around each selected element.
Syntax
$(selector).wrap(wrappingElement,function(index)[opt]).
    wrappingElement: HTML elements, jQuery objects, DOM elements. 
    function: that returns the wrapping element
 */
$(function () {
  $("div").one("click", function () {
    //wrap div around HTML-element
    /*$(this).wrap("<p></p>");*/
    //wrap div around DOM-element using same time function return DOM-element ("p")
    $(this).wrap(function (index) {
      console.log(index);
      return document.createElement("p");
    });
  });
});
