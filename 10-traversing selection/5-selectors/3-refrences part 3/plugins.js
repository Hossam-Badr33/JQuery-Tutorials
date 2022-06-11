$(document).ready(function () {
  /*$(selector => div next to him p)*/
  // $("div + p, section + aside").css("color", "brown");
  /*$(selector => all p direct children of div)*/
  // $("div > p").css("color", "brown");
  /*$(selector => all p (global) regardless direct/not direct children of div)*/
  // $("div p").css("color", "brown");
  /*$(selector => all p-siblings)*/
  // $("p~p").css("color", "brown");
  /*$(selector => all div-siblings(only p siblings))*/
  // $("div~p").css("color", "brown");
  // $("p:not(:last-child)").css("color", "brown");
  // $("p:not(:last-of-type)").css("color", "brown");
  /*$(selector => aside (index))*/
  // $("aside:eq(1)").css("color", "brown");
  /*$(selector => li (indexes => 2,3,4 ....gt(1)))*/
  // $("header ul li:gt(1)").css("border", "2px solid #99a");
  /*$(selector => li (indexes => 2,1,0 lt(3)))*/
  $("header ul li:lt(3)").css("border", "2px solid #99a");
});
