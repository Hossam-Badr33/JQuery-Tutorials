$(document).ready(function () {
  /*$(selector:first) => get/set only first element*/
  // $("p:first").css("color", "brown");
  /*$(selector:first-child) => get/set all elements located as first-child */
  //   $("p:first-child").css("color", "brown");
  /*$(selector:last-child) => get/set all elements located as last-child */
  //   $("p:last-child").css("color", "brown");
  /*$(selector:nth-child(1,2,3....)) => get/set all elements located as first-child(number) regarding it's number top to bottom*/
  //   $("p:nth-child(1)").css("color", "brown");
  /*$(selector:nth-last-child(1,2,3....)) => get/set all elements located as last-child(number) regarding it's number bottom to top*/
  //   $("p:nth-last-child(2)").css("color", "brown");
  /*$(selector:last) => get/set only last element*/
  $("p:last").css("color", "brown");
  //   $("p:first-of-type").css("color", "brown");
  //   $("p:last-of-type").css("color", "brown");
  //   $("div p:nth-of-type(2)").css("color", "brown");   //count from top to bottom
  // $("div p:nth-last-of-type(1)").css("color", "brown"); //count from bottom to top
  // $("p:only-child").css("color", "brown"); //only child without other siblings for a parent
  // $("p:only-of-type").css("color", "brown");//only p regardless other type siblings presence
});
