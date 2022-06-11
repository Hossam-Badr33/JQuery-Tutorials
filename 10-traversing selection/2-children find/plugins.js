$(document).ready(function () {
  console.log($(".ele1").children());
  /*$(selector).children() => direct children only span, section of selected element
  if u wanna to determine/filter 1 of them u can use $()*/
  $(".ele1").children().css({
    border: "3px solid #1bc",
  });
  //if u wanna to narrow serach only for section
  $(".ele1").children("section.ele2").css({
    border: "3px solid #e00",
  });
  //$(selector).find($(selector/filter/Object)) => all grandchildren to end
  console.log($(".ele2").find($(".ele3")).text());
  $(".ele2").find($(".ele3")).css({
    color: "rgb(35, 200, 100)",
  });
  //if u wanna to select all children with find $(selector).find("*")
  $(".ele1").find("*").css("fontSize", "20px");
  var newEle = $(".ele3").children()[0].tagName;
  $(".ele3").after(`<h2>${newEle}<h2/>`);
  console.log($(".ele2").find($(".ele3")));
  let ob = $(".ele2").find($(".ele3"));
  console.log(ob.prevObject);
});
