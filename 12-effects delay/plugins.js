/*
The delay() method sets a timer to delay the execution of the next item in the queue.
Syntax => $(selector).delay(speed,queueName)
 */
$(document).ready(function () {
  $("button:first-of-type").click(function () {
    $("p").text("I'm here");
  });
  $("button:nth-of-type(2)").click(function () {
    $("p").delay(3000).fadeOut();
  });
});
