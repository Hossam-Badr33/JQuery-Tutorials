/*
1-$(selector).width() => will give you width of an element without calculate padding/border/margin
2-$(selector).width(value) => will set value for width: A-$(selector).width(300) without determine an unit will take px
       B-$(selector).width(300px/%/em)
 */
$(document).ready(function () {
  // $("div").text("hi");
  var myDiv = $("div.dimensions");
  myDiv.css({
    backgroundColor: "#973",
    color: "#bef",
    textAlign: "center",
    fontSize: "20px",
    padding: "10px",
    border: "5px solid",
    margin: "10px 10px",
  });
  //width
  console.log(myDiv.width());
  myDiv.width(300);
  myDiv.append(" " + myDiv.width());
  myDiv.click(function () {
    myDiv.width("+=" + 50);
    myDiv.text("width: " + myDiv.width());
  });
  //section
  /*$("section").width(500);
  var section = $("section div");
  var div1 = $("section div:first");
  var div2 = $("section div:last");
  section.css({
    marginTop: "5px",
  });
  section.css({
    backgroundColor: "#973",
    color: "#bef",
    textAlign: "center",
    fontSize: "20px",
  });
  div1.css({
    marginRight: "10px",
    float: "left",
  });
  div1.width(300);
  div2.css({
    float: "left",
  });
  div2.width(190);
  div1.click(function () {
    div1.width("+=" + 50);
    div2.width("-=" + 50);
  });
  div2.click(function () {
    div2.width("+=" + 50);
    div1.width("-=" + 50);
  });*/
  //innerWidth()
  console.log(
    myDiv.innerWidth()
  ); /*Returns the width of an element (includes padding)
  => 320px (300 width + 20px padding)*/
  //outerWidth()
  console.log(
    myDiv.outerWidth()
  ); /*Returns the width of an element (includes padding and border).
  =>330px (300px width + 20px padding-left/right + 10px border-left/right)*/
  //outerWidth(true)
  console.log(
    myDiv.outerWidth(true)
  ); /*To include the margin, use outerWidth(true).
  => 350px (300px width + 20px padding-left/right + 10px border-left/right + 10px margin-left/right*/
  //height
  console.log(myDiv.height()); //23px
  myDiv.height("200");
  console.log(myDiv.height()); //200px
  console.log(myDiv.innerHeight()); //220px(200 height + 20 padding-top/bottom);
  console.log(myDiv.outerHeight()); //230px(200 height + 20 padding-top/bottom + 10 border-top/bottom);

  console.log(myDiv.outerHeight(true)); //230px(200 height + 20 padding-top/bottom + 10 border-top/bottom + 20 margin-top/bottom);
});
