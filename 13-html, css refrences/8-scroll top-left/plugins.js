/*
 - The scrollTop() method sets or returns the vertical scrollbar position for the selected elements.
  - When used to return the position:
This method returns the vertical position of the scrollbar for the FIRST matched element.
 - When used to set the position:
This method sets the vertical position of the scrollbar for ALL matched elements.

Syntax  $(selector).scrollTop() => return position
        $(selector).scrollTop(position) => set position
 */
$(document).ready(function () {
  //set value to scrollTop
  /*$(".scroll").scrollTop(200);*/
  $(".scroll").scroll(function () {
    //get value of scrollTop
    /*console.log("scrollTop => " + $(".scroll").scrollTop());*/
    //get value of scrollLeft
    /*console.log("scrollLeft => " + $(".scroll").scrollLeft());*/
    //change color of span at scrollTop of value 50
    if ($(".scroll").scrollTop() >= 50) {
      $("span").css("color", "red");
    }
  });
  //add animation effect on scroll note => u can also use scroll-behavior: smooth
  $("a").click(function () {
    $(".scroll").animate({ scrollTop: 300 }, 3000);
  });
});
