/*
- The clone() method makes a copy of selected elements, including child nodes, text and attributes.
Syntax => $(selector).clone(true|false)
      A-true	Specifies that event handlers also should be copied.
      B-false	Default. Specifies that event handlers should not be copied
 */
$(document).ready(function () {
  $("div:first-of-type").click(function () {
    $(this).css("color", "crimson");
  });
  $("button").click(function () {
    $("body").append($("div:first-of-type").clone(true)); //true here will also clone/copy effect of css include in click event
  });
});
