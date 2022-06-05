/*
before => add text/tag before parent outside
<parent>
==============prepend/prependTo=======
prepend => to start of tag/parent inside it
syntax=>$(selector[parent]).prepend("text/tag"[child])
prependTo => to start of tag/parent inside it
syntax=>$("text/tag"[child]).prpendTo(selector[parent])
=============append/appendTo================
append  => to last of tag/parent inside it
syntax=>$(selector[parent]).append("text/tag"[child])
appendTo  => to last of tag/parent inside it
syntax=>$("text/tag"[child]).appendTo(selector[parent])
</parent>
after => add text/tag after parent outside
 */
$(document).ready(function () {
  //append & appendTo
  $(".first").append(" append");
  $(".first").append("<p>paragraph</p>");
  $("<a href='#'>link</a>").appendTo($(".first"));
  //prepend & prependTo
  $(".second").prepend(" prepend");
  $(".second").prepend("<p>paragraph</p>");
  $("<a href='#'>link</a>").prependTo($(".second"));
  //after
  $(".first").after("after");
  //before
  $(".second").before("before");
});
