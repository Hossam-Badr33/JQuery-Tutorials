/* js */
window.onload = function () {
  //your sentax here
  document.querySelector("p").style.display = "none";
};
/* jQuery 
    Syntax $(document).ready(function () {
        //your code
        1-$        => for jQuery
        2-document => index.html
        3-ready    => like onload but it not wait for all images to load
        4-function () {}
        5-jQuery   => add styles/effects inline-elements most powerful css-effect
    })
*/
//1-long ideal syntax
$(document).ready(function () {
  $("p").show();
});
//2-same syntax but short
$(function () {
  $("p").css("color", "#99E");
});
